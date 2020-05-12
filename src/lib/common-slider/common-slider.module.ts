import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSliderComponent } from './common-slider.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [CommonSliderComponent],
  exports: [CommonSliderComponent]
})
export class CommonSliderModule {}
