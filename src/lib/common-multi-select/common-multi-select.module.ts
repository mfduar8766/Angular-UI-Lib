import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../PrimeNgModules.module';
import { CommonMultiSelectComponent } from './common-multi-select.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, PrimeNgModule, ReactiveFormsModule, FormsModule],
  declarations: [CommonMultiSelectComponent],
  exports: [CommonMultiSelectComponent]
})
export class CommonMultiSelectModule {}
