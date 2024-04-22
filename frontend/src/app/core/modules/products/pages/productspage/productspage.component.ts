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
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
