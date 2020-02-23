import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSearchComponent } from './common-search.component';
import { PrimeNgModule } from '../PrimeNgModules.module';

@NgModule({
  imports: [CommonModule, PrimeNgModule],
  declarations: [CommonSearchComponent],
  exports: [CommonSearchComponent]
})
export class CommonSearchModule {}
