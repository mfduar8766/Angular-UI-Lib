import { OnInit } from '@angular/core';
import { PaginatorPubSubService } from '../services/paginatorPubSubService/paginatorPubSub.service';
export declare class CommonPaginatorComponent implements OnInit {
  private paginatorService;
  options: number[];
  rowsPerPage: number;
  tableData: any[];
  data: any[];
  page: number;
  tableDataOriginalState: any[];
  constructor(paginatorService: PaginatorPubSubService);
  ngOnInit(): void;
  getSelectedOption(data: number): void;
  nextPage(): void;
  previousPage(): void;
  resetPaginator(): void;
  calculateendOfPages(): void;
  goToLastPage(): void;
}
