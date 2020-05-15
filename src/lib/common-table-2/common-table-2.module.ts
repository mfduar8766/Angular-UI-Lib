import { NgModule } from '@angular/core';
import { CommonTableTwoComponent } from './common-table-2.component';
import { CommonModule } from '@angular/common';
import { CommonTableRowsComponent } from './components/common-table-rows/common-table-rows.component';
import { FormsModule } from '@angular/forms';
import { CommonSelectModule } from '../common-select/common-select.module';

@NgModule({
  imports: [CommonModule, FormsModule, CommonSelectModule],
  declarations: [CommonTableTwoComponent, CommonTableRowsComponent],
  exports: [CommonTableTwoComponent, CommonTableRowsComponent]
})
export class CommonTableTwoModule {}
