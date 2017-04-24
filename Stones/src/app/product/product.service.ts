import { Injectable } from '@angular/core';
import { Product } from 'app/product/product';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  api: string = 'http://ec2-35-156-66-92.eu-central-1.compute.amazonaws.com:8080/api/products';

  constructor(private http: Http) { }

  getList(): Observable<Array<Product>> {
    return this.http.get(this.api).map((products) => products.json());
  }

  saveProduct(p: Product) {
    return this.http.post(this.api, p);
  }

}

@Injectable()
export class MockProductService {


  productList: Array<Product> = [
    {
      'id': 0,
      'name': 'nisi elit',
      'price': 100,
      'weight': 22
    }];

  constructor() { }

  getList(): Array<Product> {
    return this.productList;
  }

  saveProduct(p: Product) {
    this.productList.push(p);
  }

}
