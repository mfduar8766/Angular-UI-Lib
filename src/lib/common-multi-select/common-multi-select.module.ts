import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../PrimeNgModules.module';
import { CommonMultiSelectComponent } from './common-multi-select.component';

@NgModule({
  imports: [CommonModule, PrimeNgModule],
  declarations: [CommonMultiSelectComponent],
  exports: [CommonMultiSelectComponent]
})
export class CommonMultiSelectModule {}
