import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private api = 'REPLACE_WITH_URL/api/products';

  constructor(private http: Http) { }

  getList(): Observable<Array<Product>> {
    return this.http.get(this.api).map(list => list.json());
  }

  newProduct(product: Product): Observable<any> {
    product.id = null;
    return this.http.post(this.api, product);
  };

}
