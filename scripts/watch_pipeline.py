from __future__ import annotations

import time
from pathlib import Path

from dagster_graphql import DagsterGraphQLClient
from dagster_graphql.client.utils import ReloadRepositoryLocationStatus
from watchfiles import Change, watch


ROOT = Path(__file__).resolve().parents[1]
WATCH_PATHS = (ROOT / "pipelines", ROOT / "packages")
LOCATION_NAME = "batch-harbor-pipelines"


def is_python_source(change: Change, path: str) -> bool:
    source_path = Path(path)
    return source_path.suffix == ".py" and "__pycache__" not in source_path.parts


def reload_code_location() -> None:
    client = DagsterGraphQLClient("127.0.0.1", port_number=3001, timeout=10)
    for attempt in range(5):
        try:
            result = client.reload_repository_location(LOCATION_NAME)
            if result.status is ReloadRepositoryLocationStatus.SUCCESS:
                print(f"[PIPELINE] Reloaded Dagster code location: {LOCATION_NAME}", flush=True)
            else:
                print(f"[PIPELINE] Dagster could not reload definitions: {result.message}", flush=True)
            return
        except Exception as error:
            if attempt == 4:
                print(f"[PIPELINE] Code-location reload failed: {error}", flush=True)
                return
            time.sleep(1)


def main() -> None:
    print("[PIPELINE] Watching pipeline and shared Python packages...", flush=True)
    for changes in watch(
        *(str(path) for path in WATCH_PATHS),
        watch_filter=is_python_source,
        debounce=800,
        step=200,
    ):
        paths = sorted({path for _, path in changes})
        print(f"[PIPELINE] Source changed ({len(paths)} file(s)); reloading definitions...", flush=True)
        reload_code_location()


if __name__ == "__main__":
    main()
