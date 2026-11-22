{{ config(materialized='view') }}

select * from {{ source('supplier_feeds', 'supplier_inventory') }}
