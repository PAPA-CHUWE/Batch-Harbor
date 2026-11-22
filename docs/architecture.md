# Architecture

DataRelay is a monorepo with four concerns:

- **Next.js dashboard** — feed setup, mapping review, run history, catalogue browsing
- **FastAPI** — feed configuration, mapping approval, run/replay triggers, dashboard queries
- **Dagster** — ingestion, schema drift detection, row validation, replay, dbt triggering
- **dbt** — catalogue and inventory transformations, data tests, lineage

One PostgreSQL instance serves both the API metadata and the warehouse for the MVP.
