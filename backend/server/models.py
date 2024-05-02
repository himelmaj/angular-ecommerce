from typing import List, Optional
from sqlmodel import Field, Relationship, Session, SQLModel
from datetime import date, datetime
from enum import Enum

class Category(str, Enum):
    man = 'man'
    woman = 'woman'
    unisex = 'unisex'

class ProductBase(SQLModel):
    name: str = Field(max_length=100)
    description: Optional[str] = Field(default=None)
    price: float = Field(default=0.0)
    category: Category = Field(default=None)
    image: Optional[str] =  Field(default=None)
    created_at: Optional[datetime] = Field(default=datetime.now())
    updated_at: Optional[datetime] = Field(default=datetime.now())
    
class Product(ProductBase, table=True):
    __tablename__ = 'products'
    id: Optional[int] = Field(default=None, primary_key=True)
    
class ProductRead(ProductBase):
    id: int
    
class ProductCreate(ProductBase):
    pass

