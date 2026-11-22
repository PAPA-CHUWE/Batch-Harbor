select count(*) as invalid_rows
from {{ ref('fct_inventory_snapshot') }}
where quantity < 0
