import { Component } from '@angular/core';
import { Product } from 'app/product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stn works!?';

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
}
