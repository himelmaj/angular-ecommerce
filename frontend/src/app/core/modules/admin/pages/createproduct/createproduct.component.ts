import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-createproduct',
  standalone: true,
  imports: [],
  templateUrl: './createproduct.component.html',
})
export class CreateproductComponent {
  ProductsForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });
}
