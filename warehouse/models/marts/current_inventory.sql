{{ config(materialized='table') }}

select product_id, max(snapshot_at) as last_snapshot, sum(quantity) as current_quantity
from {{ ref('fct_inventory_snapshot') }}
group by product_id
