import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTabComponent } from './common-tab.component';
import { PrimeNgModule } from '../PrimeNgModules.module';

@NgModule({
  imports: [CommonModule, PrimeNgModule],
  declarations: [CommonTabComponent],
  exports: [CommonTabComponent]
})
export class CommonTabModule {}
