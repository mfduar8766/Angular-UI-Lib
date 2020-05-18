import { OnInit, EventEmitter } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
export declare class CommonTableComponent implements OnInit {
  private confirmationService;
  private messageService;
  dataKey: string;
  tableData: any[];
  columns: any[];
  rowsperPage: number;
  showPagination: boolean;
  rowsPerPageOptions: number[];
  styleClass: string;
  editTableData: EventEmitter<any>;
  showDeleteMessage: boolean;
  selectedData: any[];
  totalRecords: number;
  first: number;
  rowsPerPageSelection: {
    label: number;
    value: number;
  }[];
  constructor(confirmationService: ConfirmationService, messageService: MessageService);
  ngOnInit(): void;
  nextPage(): void;
  previousPage(): void;
  reset(): void;
  isLastPage(): boolean;
  isFirstPage(): boolean;
  setRowsPerPage(event: any): void;
  deleteData(data: any): void;
}
