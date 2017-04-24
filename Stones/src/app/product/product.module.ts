import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { BruttoPipe } from './brutto.pipe';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveProductComponent } from './reactive-product/reactive-product.component';
import { Route, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from 'app/product/product.service';

const routes: Array<Route> = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/new', component: ReactiveProductComponent }
];

@NgModule({
  imports: [
    CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)
  ],
  declarations: [ProductComponent, BruttoPipe, EditProductComponent, ReactiveProductComponent, ProductListComponent],
  providers: [ProductService],
  exports: [ProductComponent, EditProductComponent, ReactiveProductComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule { }
