{{ config(materialized='table') }}

select distinct product_id, product_name, supplier_id
from {{ ref('int_supplier_products_deduplicated') }}
