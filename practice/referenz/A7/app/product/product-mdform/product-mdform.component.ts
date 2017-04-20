import { ActivatedRoute } from '@angular/router';
import { CustomValidators } from './../../utils/custom-validators';
import { Product } from './../product';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'stn-product-mdform',
  templateUrl: './product-mdform.component.html'
})
export class ProductMdformComponent implements OnInit {

  id = new FormControl('', [Validators.required, Validators.pattern(new RegExp('^[0-9]+$'))]);
  name = new FormControl('', [Validators.required]);
  price = new FormControl('', [CustomValidators.positiveNumber]);
  weight = new FormControl();
  productForm: FormGroup;
  isSaved: boolean;

  @Output() productCreated = new EventEmitter<Product>();

  constructor(builder: FormBuilder, private route: ActivatedRoute) {
    this.productForm = builder.group({
      id: this.id,
      name: this.name,
      price: this.price,
      weight: this.weight
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.id.setValue(params['id']));
    this.isSaved = false;
  }

  save(): void {
    this.productCreated.emit(this.productForm.value);
    alert(JSON.stringify(this.productForm.value));
    this.isSaved = true;
  }
}
