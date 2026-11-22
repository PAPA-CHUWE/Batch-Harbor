from dagster import schedule

@schedule(cron_schedule="0 */6 * * *", job_name="ingest")
def supplier_feeds():
    return {}
