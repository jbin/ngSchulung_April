import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { BruttoPipe } from './brutto.pipe';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveProductComponent } from './reactive-product/reactive-product.component';

@NgModule({
  imports: [
    CommonModule, MaterialModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [ProductComponent, BruttoPipe, EditProductComponent, ReactiveProductComponent],
  exports: [ProductComponent, EditProductComponent, ReactiveProductComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule { }
