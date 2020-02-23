import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModalComponent } from './common-modal.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CommonModalComponent],
  exports: [CommonModalComponent]
})
export class CommonModalModule {}
