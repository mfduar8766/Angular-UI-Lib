import { NgModule } from '@angular/core';
import { CommonTableTwoComponent } from './common-table-2.component';
import { CommonModule } from '@angular/common';
import { CommonTableRowsComponent } from './components/common-table-rows/common-table-rows.component';
import { FormsModule } from '@angular/forms';
import { CommonPaginatorModule } from '../common-paginator/common-paginator.module';

@NgModule({
  imports: [CommonModule, FormsModule, CommonPaginatorModule],
  declarations: [CommonTableTwoComponent, CommonTableRowsComponent],
  exports: [CommonTableTwoComponent, CommonTableRowsComponent]
})
export class CommonTableTwoModule {}
