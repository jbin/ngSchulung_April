import { SaveFormsGuard } from './save-forms.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BruttoPipe } from './brutto.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BruttoPipe],
  providers: [SaveFormsGuard],
  exports: [BruttoPipe]
})
export class UtilsModule { }
