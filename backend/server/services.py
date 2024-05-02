from sqlmodel import Session, select, text
from fastapi import HTTPException, status, Depends
from .models import Product, ProductCreate


def get_all_products_or_404(session: Session):
    products = session.exec(select(Product)).all()
    
    if not products:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No products found",
        )
        
    return products

def create_product_or_404(session: Session, product: ProductCreate):
    product = Product.model_validate(product)
    session.add(product)
    session.commit()
    session.refresh(product)
    
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not created",
        )
    
    return product