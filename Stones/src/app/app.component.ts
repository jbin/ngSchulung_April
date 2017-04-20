import { Component } from '@angular/core';
import { Product } from 'app/product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stn works!?';

  productParent: Product = new Product(0, 'test', 12);

  showPrice(price) {
    alert(price);
  }
}
