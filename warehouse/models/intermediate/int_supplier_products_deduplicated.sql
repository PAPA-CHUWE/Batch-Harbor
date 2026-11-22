{{ config(materialized='view') }}

with deduped as (
    select *,
        row_number() over (partition by product_id order by batch_id desc) as rn
    from {{ ref('stg_supplier_products') }}
)
select *
from deduped
where rn = 1
