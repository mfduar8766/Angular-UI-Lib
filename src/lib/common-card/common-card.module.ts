import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonCardComponent } from './common-card.component';
import { PrimeNgModule } from '../PrimeNgModules.module';

@NgModule({
  imports: [CommonModule, PrimeNgModule],
  declarations: [CommonCardComponent],
  exports: [CommonCardComponent]
})
export class CommonCardModule {}
