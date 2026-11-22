from fastapi import APIRouter

router = APIRouter()

@router.get("")
def list_feeds():
    return []

@router.post("")
def create_feed():
    return {}
