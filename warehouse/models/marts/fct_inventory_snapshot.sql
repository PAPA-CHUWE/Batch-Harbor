{{ config(materialized='table') }}

select batch_id, product_id, quantity, snapshot_at
from {{ ref('stg_supplier_inventory') }}
