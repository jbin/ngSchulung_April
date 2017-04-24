import { Injectable } from '@angular/core';
import { Product } from "app/product/product";

@Injectable()
export class ProductService {

  productList: Array<Product> = [
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
    }];

  constructor() { }

  getList(): Array<Product> {
    return this.productList;
  }

  saveProduct(p: Product) {
    this.productList.push(p);
  }

}
