# Data Model

Core tables (via Alembic):

- `feeds` — supplier feed configuration
- `batches` — uploaded raw files + checksums
- `mappings` — approved column mappings per feed version
- `runs` — ingestion/replay attempts with status

Warehouse (dbt):

- `stg_supplier_products` / `stg_supplier_inventory`
- `dim_supplier`, `dim_product`
- `fct_inventory_snapshot`, `current_inventory`
