import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../../shared/services/product.service';
import { Product } from '../../../../../shared/interfaces/product';
import { CommonModule } from '@angular/common';

import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { toast } from 'ngx-sonner';

@Component({
  selector: 'app-editproduct',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './editproduct.component.html',
})
export class EditproductComponent implements OnInit {
  id: number = 0;

  product: Product = {
    name: '',
    description: '',
    featured: false,
    price: 0,
    image: 'https://via.placeholder.com/400',
    category: 'unisex',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    featured: new FormControl(false),
    image: new FormControl('https://via.placeholder.com/400'),
    category: new FormControl('', Validators.required),
  });

  f = this.form.controls;


  getProductDetails(id: number) {
    this.productService.getProductById(id);
    this.product = this.productService.productSignal();

  }

  onSubmit() {
    if (this.form.invalid) console.log('Invalid form');

    try {
      this.productService.updateProduct(this.id, this.product);
      toast.success('Product updated');
    } catch (e) {
      toast.error('Error updating product');
    }
    this.router.navigate(['/products']);
  }

  ngOnInit() {
    
    this.id = this.route.snapshot.params['id'];
    this.getProductDetails(this.id);

  }
}