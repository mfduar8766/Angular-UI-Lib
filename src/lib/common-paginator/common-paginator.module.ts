import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonPaginatorComponent } from './common-paginator.component';
import { CommonSelectModule } from '../common-select/common-select.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, CommonSelectModule],
  declarations: [CommonPaginatorComponent],
  exports: [CommonPaginatorComponent]
})
export class CommonPaginatorModule {}
