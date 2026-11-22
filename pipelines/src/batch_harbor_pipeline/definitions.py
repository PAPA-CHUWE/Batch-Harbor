from dagster import Definitions

from .assets.dbt_models import dbt_models
from .assets.normalized_records import normalized_records
from .assets.raw_batches import raw_batches
from .assets.schema_snapshots import schema_snapshots
from .jobs.ingest import ingest
from .jobs.replay import replay
from .schedules.supplier_feeds import supplier_feeds
from .resources import PostgresResource, RawStorageResource

defs = Definitions(
    assets=[raw_batches, schema_snapshots, normalized_records, dbt_models],
    jobs=[ingest, replay],
    schedules=[supplier_feeds],
    resources={
        "postgres": PostgresResource(),
        "raw_storage": RawStorageResource(),
    },
)
