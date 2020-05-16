import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonPaginatorComponent } from './common-paginator.component';
import { CommonSelectModule } from '../common-select/common-select.module';
import { FormsModule } from '@angular/forms';
import { PaginatorPubServiceModule } from '../services/paginatorPubSubService/paginatorPubSub.module';

@NgModule({
  imports: [CommonModule, FormsModule, CommonSelectModule],
  declarations: [CommonPaginatorComponent],
  providers: [PaginatorPubServiceModule],
  exports: [CommonPaginatorComponent]
})
export class CommonPaginatorModule {}
