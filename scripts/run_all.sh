#!/usr/bin/env bash
# Start the native Batch-Harbor development services.
set -Eeuo pipefail

# Give each background service its own process group so shutdown also reaches
# child processes started by npm, uv, Uvicorn, and Dagster.
set -m

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
RUN_DIR="$ROOT/.run"
LOG_DIR="$ROOT/.logs"
PID_FILE="$RUN_DIR/orchestrator.pid"
cd "$ROOT"

CHILD_PIDS=()
LAST_BG_PID=""

is_running() {
  kill -0 "$1" 2>/dev/null
}

log_info() { printf '[INFO] %s\n' "$*"; }
log_ok() { printf '[ OK ] %s\n' "$*"; }
log_warn() { printf '[WARN] %s\n' "$*"; }
log_err() { printf '[ERR ] %s\n' "$*" >&2; }

cleanup() {
  local exit_code=$?
  trap - INT TERM EXIT
  echo ""
  log_info "Stopping Batch Harbor..."

  local pid
  for pid in "${CHILD_PIDS[@]:-}"; do
    [[ -n "$pid" ]] || continue
    is_running "$pid" && kill -TERM -- "-$pid" 2>/dev/null || true
  done

  sleep 2

  for pid in "${CHILD_PIDS[@]:-}"; do
    [[ -n "$pid" ]] || continue
    is_running "$pid" && kill -KILL -- "-$pid" 2>/dev/null || true
  done

  wait 2>/dev/null || true
  rm -f "$PID_FILE"
  log_ok "Application processes stopped. PostgreSQL was left running."
  exit "$exit_code"
}

mkdir -p "$RUN_DIR" "$LOG_DIR"
if [[ -f "$PID_FILE" ]]; then
  existing_pid="$(cat "$PID_FILE" 2>/dev/null || true)"
  if [[ -n "$existing_pid" ]] && is_running "$existing_pid"; then
    log_err "Batch Harbor is already running (pid $existing_pid). Stop that session with Ctrl+C first."
    exit 1
  fi
  rm -f "$PID_FILE"
fi
printf '%s\n' "$$" > "$PID_FILE"
trap cleanup EXIT
trap 'exit 130' INT
trap 'exit 143' TERM

echo "Starting Batch Harbor (native development)..."

for executable in uv npm curl pg_isready lsof; do
  if ! command -v "$executable" >/dev/null 2>&1; then
    log_err "Missing $executable. Install uv, Node.js, and PostgreSQL 16 first."
    exit 1
  fi
done

if [[ -f .env ]]; then
  set -a
  # Load local database credentials and application settings.
  source .env
  set +a
fi

POSTGRES_USER="${POSTGRES_USER:-batch_harbor}"
POSTGRES_DB="${POSTGRES_DB:-batch_harbor}"
PGHOST="${PGHOST:-localhost}"
PGPORT="${PGPORT:-5432}"
POSTGRES_PASSWORD="${POSTGRES_PASSWORD:-batch_harbor}"
export POSTGRES_USER POSTGRES_DB PGHOST PGPORT POSTGRES_PASSWORD
export DATABASE_URL="${DATABASE_URL:-postgresql+psycopg2://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${PGHOST}:${PGPORT}/${POSTGRES_DB}}"

if ! pg_isready -h "$PGHOST" -p "$PGPORT" -U "$POSTGRES_USER" -d "$POSTGRES_DB" >/dev/null 2>&1; then
  log_err "PostgreSQL is not ready at ${PGHOST}:${PGPORT}/${POSTGRES_DB}."
  log_err "Start Homebrew PostgreSQL and create the batch_harbor database first."
  exit 1
fi
log_ok "PostgreSQL is accepting connections at ${PGHOST}:${PGPORT}."

for port in 3000 3001 8000; do
  if lsof -nP -iTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1; then
    log_err "Port $port is already in use. Stop the other service and retry."
    exit 1
  fi
done

if [[ ! -d apps/web/node_modules ]]; then
  log_info "Installing frontend dependencies for the first run..."
  npm install --prefix apps/web
fi

log_info "Syncing locked Python dependencies with Python 3.12..."
uv sync --locked --python 3.12

start_background() {
  local name="$1" log_file
  shift
  log_file="$LOG_DIR/$name.log"
  (
    set -o pipefail
    "$@" 2>&1 | tee "$log_file"
  ) &
  LAST_BG_PID=$!
  CHILD_PIDS+=("$LAST_BG_PID")
}

start_api() {
  uv run --python 3.12 uvicorn apps.api.src.batch_harbor_api.main:app \
    --host 127.0.0.1 \
    --port 8000 \
    --reload \
    --reload-dir apps/api \
    --reload-dir packages
}

start_dagster() {
  uv run --python 3.12 dagster dev --workspace workspace.yaml --host 127.0.0.1 --port 3001
}

start_pipeline_watcher() {
  uv run --python 3.12 python scripts/watch_pipeline.py
}

start_web() {
  cd "$ROOT/apps/web"
  npm run dev -- --hostname 127.0.0.1
}

wait_for_http() {
  local label="$1" url="$2" pid="$3" timeout="$4" log_file="$5" elapsed=0
  while (( elapsed < timeout )); do
    if ! is_running "$pid"; then
      log_err "$label exited during startup. See $LOG_DIR/$log_file.log"
      return 1
    fi
    if curl -fsS -o /dev/null --max-time 3 "$url" 2>/dev/null; then
      log_ok "$label is ready ($url)."
      return 0
    fi
    sleep 1
    elapsed=$((elapsed + 1))
  done
  log_err "$label did not become healthy within ${timeout}s. See $LOG_DIR/$log_file.log"
  return 1
}

echo ""
log_info "Starting FastAPI..."
start_background api start_api
api_pid="$LAST_BG_PID"
wait_for_http "API" "http://127.0.0.1:8000/health" "$api_pid" 60 "api"

echo ""
log_info "Starting Dagster..."
start_background pipeline start_dagster
pipeline_pid="$LAST_BG_PID"
wait_for_http "Dagster" "http://127.0.0.1:3001" "$pipeline_pid" 90 "pipeline"

log_info "Starting the pipeline source watcher..."
start_background pipeline-watcher start_pipeline_watcher
watcher_pid="$LAST_BG_PID"
sleep 1
if ! is_running "$watcher_pid"; then
  log_err "Pipeline watcher exited during startup. See $LOG_DIR/pipeline-watcher.log"
  exit 1
fi

echo ""
log_info "Starting Next.js..."
start_background web start_web
web_pid="$LAST_BG_PID"
wait_for_http "Web" "http://127.0.0.1:3000" "$web_pid" 90 "web"

echo ""
echo "Batch Harbor is ready."
echo "  Web:      http://localhost:3000"
echo "  API:      http://localhost:8000 (docs: http://localhost:8000/docs)"
echo "  Dagster:  http://localhost:3001"
echo "  Database: ${PGHOST}:${PGPORT} (${POSTGRES_DB})"
echo ""
echo "Logs: .logs/api.log, .logs/pipeline.log, .logs/pipeline-watcher.log, .logs/web.log"
echo "Press Ctrl+C to stop the application services. PostgreSQL will keep running."
echo ""

api_missed=0
pipeline_missed=0
web_missed=0
while true; do
  for pid in "$api_pid" "$pipeline_pid" "$watcher_pid" "$web_pid"; do
    if ! is_running "$pid"; then
      log_err "A development service exited unexpectedly. Check the corresponding .logs/*.log file."
      exit 1
    fi
  done

  if curl -fsS -o /dev/null --max-time 3 http://127.0.0.1:8000/health 2>/dev/null; then
    api_missed=0
  else
    api_missed=$((api_missed + 1))
  fi
  if curl -fsS -o /dev/null --max-time 3 http://127.0.0.1:3001 2>/dev/null; then
    pipeline_missed=0
  else
    pipeline_missed=$((pipeline_missed + 1))
  fi
  if curl -fsS -o /dev/null --max-time 3 http://127.0.0.1:3000 2>/dev/null; then
    web_missed=0
  else
    web_missed=$((web_missed + 1))
  fi

  if (( api_missed >= 6 || pipeline_missed >= 6 || web_missed >= 6 )); then
    log_err "A service stopped answering its health check. Review .logs/ and restart with ./scripts/run_all.sh."
    exit 1
  fi
  sleep 2
done
