import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTableComponent } from './common-table.component';
import { PrimeNgModule } from '../PrimeNgModules.module';

@NgModule({
  imports: [CommonModule, PrimeNgModule],
  declarations: [CommonTableComponent],
  exports: [CommonTableComponent]
})
export class CommonTableModule {}
