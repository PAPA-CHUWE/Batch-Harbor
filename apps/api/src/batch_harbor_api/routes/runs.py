from fastapi import APIRouter

router = APIRouter()

@router.get("")
def list_runs():
    return []

@router.post("/{run_id}/replay")
def replay_run(run_id: str):
    return {"run_id": run_id, "status": "replayed"}
