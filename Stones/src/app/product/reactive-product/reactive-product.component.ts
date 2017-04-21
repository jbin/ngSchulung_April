import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'stn-reactive-product',
  templateUrl: './reactive-product.component.html',
  styleUrls: ['./reactive-product.component.css']
})
export class ReactiveProductComponent implements OnInit {

  id: FormControl = new FormControl();
  name: FormControl = new FormControl();
  price: FormControl = new FormControl();
  weight: FormControl = new FormControl();

  productForm: FormGroup;

  constructor(private builder: FormBuilder) {
    this.productForm = builder.group({
      id: this.id,
      name: this.name,
      price: this.price,
      weight: this.weight
    });
  }

  ngOnInit() {
  }

  save() {
    alert(this.productForm.value.name);
  }

}
