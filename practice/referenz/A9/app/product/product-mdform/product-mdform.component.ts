import { ProductService } from './../product.service';
import { ActivatedRoute } from '@angular/router';
import { CustomValidators } from './../../utils/custom-validators';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
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
  counter: number = 0;

  constructor(builder: FormBuilder, private route: ActivatedRoute, private pService: ProductService) {
    this.productForm = builder.group({
      id: this.id,
      name: this.name,
      price: this.price,
      weight: this.weight
    });

   this.name.valueChanges.subscribe(value => this.counter = value.length);
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.id.setValue(params['id']));
    this.isSaved = false;
  }

  save(): void {
    this.pService.newProduct(this.productForm.value);
    this.isSaved = true;
  }
}
