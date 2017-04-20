import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private product: Product = new Product(0, 'Grabstein Granit', 12.56, 32.45);
  constructor() { }

  ngOnInit() {
  }

  risePrice(): void {
    this.product.price += 5;
    alert(this.product.price);
  }

}
