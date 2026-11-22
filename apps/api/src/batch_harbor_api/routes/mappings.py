from fastapi import APIRouter

router = APIRouter()

@router.get("")
def list_mappings():
    return []

@router.post("")
def create_mapping():
    return {}
