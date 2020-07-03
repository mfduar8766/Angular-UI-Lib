import { NgModule } from '@angular/core';
import { CommonTableTwoComponent } from './common-table.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonPaginatorModule } from '../common-paginator/common-paginator.module';
import { PaginatorPubServiceModule } from '../services/paginatorPubSubService/paginatorPubSub.module';

@NgModule({
  imports: [CommonModule, FormsModule, CommonPaginatorModule],
  declarations: [CommonTableTwoComponent],
  providers: [PaginatorPubServiceModule],
  exports: [CommonTableTwoComponent]
})
export class CommonTableModule {}
