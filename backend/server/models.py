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
    featured: Optional[bool] = Field(default=False)
    created_at: Optional[datetime] = Field(default=datetime.now())
    updated_at: Optional[datetime] = Field(default=datetime.now())
    
class Product(ProductBase, table=True):
    __tablename__ = 'products'
    id: Optional[int] = Field(default=None, primary_key=True)
    
class ProductRead(ProductBase):
    id: int
    
class ProductCreate(ProductBase):
    pass

class ProductUpdate(SQLModel):
    name: Optional[str] = Field(max_length=100, default=None)
    description: Optional[str] = Field(max_length=200, default=None)
    price: Optional[float] = Field(default=0.0)
    featured: Optional[bool] = Field(default=False)
    category: Optional[Category] = Field(default=None)
    image: Optional[str] =  Field(default="https://via.placeholder.com/400")
    

