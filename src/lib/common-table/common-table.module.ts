import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonTableComponent } from './common-table.component';
import { PrimeNgModule } from '../PrimeNgModules.module';

@NgModule({
  imports: [CommonModule, PrimeNgModule, FormsModule],
  declarations: [CommonTableComponent],
  exports: [CommonTableComponent]
})
export class CommonTableModule {}
