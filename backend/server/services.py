from sqlmodel import Session, select, text
from fastapi import HTTPException, status, Depends
from .models import Product, ProductCreate, ProductRead, ProductUpdate


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

def update_product_or_404(session: Session, product_id: int, product: ProductUpdate):
    
    db_product = session.get(Product, product_id)
    
    if not db_product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found",
        )
        
    product_data = product.model_dump(exclude_unset=True)
    
    for key, value in product_data.items():
        setattr(db_product, key, value)
        
    session.add(db_product)
    session.commit()
    session.refresh(db_product)
    return db_product

def delete_product_or_404(session: Session, product_id: int):
    product = session.get(Product, product_id)
    
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found",
        )
        
    session.delete(product)
    session.commit()
    return {"message": "Product deleted"}

def get_product_or_404(session: Session, product_id: int):
    product = session.get(Product, product_id)
    
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Product not found",
        )
        
    return product


  