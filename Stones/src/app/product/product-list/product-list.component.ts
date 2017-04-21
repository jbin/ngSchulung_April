import { Component, OnInit } from '@angular/core';
import { Product } from 'app/product/product';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = [
    {
      'id': 0,
      'name': 'nisi elit',
      'price': 100,
      'weight': 22
    },
    {
      'id': 1,
      'name': 'pariatur aliquip',
      'price': 122.39,
      'weight': 21
    }
  ];

  showPrice(price) {
    alert(price);
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  constructor() { }

  ngOnInit() {
  }

}
