import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../PrimeNgModules.module';
import { CommonDropdownComponent } from './common-dropdown.component';

@NgModule({
  imports: [CommonModule, PrimeNgModule],
  declarations: [CommonDropdownComponent],
  exports: [CommonDropdownComponent]
})
export class CommonDropdownModule {}
