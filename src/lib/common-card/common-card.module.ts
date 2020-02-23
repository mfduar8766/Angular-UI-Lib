import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonCardComponent } from './common-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CommonCardComponent],
  exports: [CommonCardComponent]
})
export class CommonCardModule {}
