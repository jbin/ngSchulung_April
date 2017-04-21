import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { BruttoPipe } from './brutto.pipe';
import { EditProductComponent } from './edit-product/edit-product.component';
import { MaterialModule } from '@angular/material';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule, MaterialModule, FormsModule
  ],
  declarations: [ProductComponent, BruttoPipe, EditProductComponent],
  exports: [ProductComponent, EditProductComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule { }
