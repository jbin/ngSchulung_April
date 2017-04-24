import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'app/product/product';
import { ProductService } from "app/product/product.service";
import { Router } from "@angular/router";

@Component({
  selector: 'stn-reactive-product',
  templateUrl: './reactive-product.component.html',
  styleUrls: ['./reactive-product.component.css']
})
export class ReactiveProductComponent implements OnInit {

  id: FormControl = new FormControl('', Validators.required);
  name: FormControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
  price: FormControl = new FormControl();
  weight: FormControl = new FormControl();

  nameLength: number;

  productForm: FormGroup;
  @Output() productCreated: EventEmitter<Product> = new EventEmitter<Product>();


  constructor(private builder: FormBuilder, private pService: ProductService, private router: Router) {
    this.productForm = builder.group({
      id: this.id,
      name: this.name,
      price: this.price,
      weight: this.weight
    });
  }

  ngOnInit() {
    this.name.valueChanges
      .filter((value) => value.trim().length > 0)
      .map((value) => value.trim())
      .subscribe(
      (value) => { this.nameLength = value.length; }
      );
  }

  save() {
    this.productCreated.emit(this.productForm.value);
    let product: Product = this.productForm.value;
    product.id = null;
    this.pService.saveProduct(product).subscribe(
      () => alert('Saved'),
      (err) => alert(JSON.stringify(err))
    );
    this.router.navigate(['products']);
  }

}
