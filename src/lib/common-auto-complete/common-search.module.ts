import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../PrimeNgModules.module';
import { CommonSearchComponent } from './common-search.component';

@NgModule({
  imports: [CommonModule, PrimeNgModule],
  declarations: [CommonSearchComponent],
  exports: [CommonSearchComponent]
})
export class CommonSearchModule {}
