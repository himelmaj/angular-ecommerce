import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Product } from '../../../../../shared/interfaces/product';
import { ProductService } from '../../../../../shared/services/product.service';

@Component({
  selector: 'app-productspage',
  standalone: true,
  imports: [],
  templateUrl: './productspage.component.html',
})
export class ProductspageComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {
    this.productService.fetchProducts();
    this.products = this.productService.productsSignal();
    console.log('ProductspageComponent created', this.products);
    console.log('ProductspageComponent created', this.productService.productsSignal);

  }

  ngOnInit(): void {
    this.products = this.productService.productsSignal();
    this.productService.fetchProducts();
    
  };
}
