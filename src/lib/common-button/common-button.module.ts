import { NgModule } from '@angular/core';
import { CommonButtonComponent } from './common-button.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [CommonButtonComponent],
  exports: [CommonButtonComponent],
})
export class CommonButtonModule {}
