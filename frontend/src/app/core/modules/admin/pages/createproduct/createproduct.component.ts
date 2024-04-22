import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormGroup, FormControl, Validators } from '@angular/forms';
=======
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Product } from '../../../../../shared/interfaces/product';
import { ProductService } from '../../../../../shared/services/product.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
>>>>>>> 5147a472ea77879e8a0ed85353f9511cf391e91f

@Component({
  selector: 'app-createproduct',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './createproduct.component.html',
})
export class CreateproductComponent {
<<<<<<< HEAD
  ProductsForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });
=======
  product: Product = {
    id: '',
    name: '',
    description: '',
    price: 0,
    image: '',
    category: '',
  };

  form = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
  });

  f = this.form.controls;

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit() {
    if (this.form.invalid) {
      console.log('Invalid form', this.product);
      return;
    }
    this.productService.addProduct(this.product);
    this.router.navigate(['/products']);
  }
>>>>>>> 5147a472ea77879e8a0ed85353f9511cf391e91f
}
