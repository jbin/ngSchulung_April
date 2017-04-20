import { ProductMdformComponent } from './../product/product-mdform/product-mdform.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SaveFormsGuard implements CanDeactivate<ProductMdformComponent> {
  canDeactivate(comp: ProductMdformComponent): boolean {
    return comp.isSaved;
  }
}
