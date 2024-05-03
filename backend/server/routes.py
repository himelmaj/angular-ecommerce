from fastapi import APIRouter, Body, Depends, status
from fastapi.encoders import jsonable_encoder
from sqlmodel import Session
from typing import List
from .database import get_session
from .models import Product, ProductBase, ProductRead, ProductCreate, ProductUpdate
from .services import get_all_products_or_404, create_product_or_404, update_product_or_404


router = APIRouter()


@router.get('/product', response_model=List[ProductRead], status_code=status.HTTP_200_OK)
def get_products(*, session: Session = Depends(get_session)):
    db_products = get_all_products_or_404(session)
    return db_products


@router.post('/product', response_model=ProductRead, status_code=status.HTTP_201_CREATED)
def create_product(*, product: ProductCreate, session: Session = Depends(get_session)):
    db_product = create_product_or_404(session, product)
    return db_product

@router.patch('/product/{product_id}', response_model=ProductRead, status_code=status.HTTP_200_OK)
def update_product(*, product_id: int, product: ProductUpdate, session: Session = Depends(get_session)):
    db_product = update_product_or_404(session, product_id, product)
    return db_product