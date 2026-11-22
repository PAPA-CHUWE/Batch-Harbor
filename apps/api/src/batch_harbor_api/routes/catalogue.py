from fastapi import APIRouter

router = APIRouter()

@router.get("")
def list_products():
    return []

@router.get("/{product_id}")
def get_product(product_id: str):
    return {"product_id": product_id}
