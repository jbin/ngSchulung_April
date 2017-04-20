import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BruttoPipe } from './brutto.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BruttoPipe],
  exports: [BruttoPipe]
})
export class UtilsModule { }
