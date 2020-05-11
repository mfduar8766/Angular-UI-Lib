import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonCounterComponent } from './common-counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [CommonCounterComponent],
  exports: [CommonCounterComponent],
})
export class CommonCounterModule { }
