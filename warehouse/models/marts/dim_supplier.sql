{{ config(materialized='table') }}

select distinct supplier_id, supplier_name
from {{ ref('stg_supplier_products') }}
