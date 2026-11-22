def submit_run(batch_id: str, mapping_id: str):
    return {"batch_id": batch_id, "mapping_id": mapping_id, "status": "submitted"}

def submit_replay(batch_id: str, mapping_version: int):
    return {"batch_id": batch_id, "mapping_version": mapping_version, "status": "replayed"}
