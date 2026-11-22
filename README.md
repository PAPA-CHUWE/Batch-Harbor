# DataRelay

Monorepo for supplier feed ingestion, mapping approval, and inventory catalogue.

## Structure

- `apps/web` — Next.js dashboard (App Router)
- `apps/api` — FastAPI service
- `pipelines` — Dagster ingestion pipeline
- `packages/core` — Shared Python logic
- `packages/llm` — LLM mapping suggestions
- `warehouse` — dbt models
- `database` — Alembic migrations
- `fixtures` — Sample supplier feeds
- `tests` — Unit, integration, e2e

## Demo

1. Ingest one CSV feed and show products/inventory in the dashboard.
2. Upload a second batch with renamed columns; flag for review.
3. Generate a mapping suggestion, approve it in Next.js, replay.
4. Replay again; verify single inventory snapshot per batch.

See `docs/demo.md` for the full walkthrough.

## Local setup

```bash
make setup
make migrate
make demo
```
