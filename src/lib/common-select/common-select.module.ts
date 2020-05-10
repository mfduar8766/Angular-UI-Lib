import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonSelectComponent } from './common-select.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [CommonSelectComponent],
  exports: [CommonSelectComponent],
})
export class CommonSelectModule { }
