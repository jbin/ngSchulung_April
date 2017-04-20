import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private api = 'http://ec2-35-157-141-170.eu-central-1.compute.amazonaws.com:8080/api/products';

  constructor(private http: Http) { }

  getList(): Observable<Array<Product>> {
    return this.http.get(this.api).map(list => list.json());
  }

  newProduct(product: Product): Observable<any> {
    product.id = null;
    return this.http.post(this.api, product);
  };

}

@Injectable()
export class MockProductService {
  getList(): Observable<Array<Product>> {
    const list: Array<Product> = [new Product(0, 'test', 1, 2)];
    return Observable.of(list);
  }

  newProduct(product: Product): Observable<any> {
    return new Observable();
  }
}
