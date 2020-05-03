import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})
export class CommonTableComponent implements OnInit {
  @Input() dataKey: string;
  @Input() tableData: any[];
  @Input() columns: any[];
  @Input() rowsperPage = 5;
  @Input() showPagination = true;
  @Input() rowsPerPageOptions: number[] = [5, 10, 25, 50, 100];
  @Input() styleClass: string;
  @Output() editTableData: EventEmitter<any> = new EventEmitter();
  showDeleteMessage: boolean;
  selectedData: any[];
  totalRecords: number;
  first = 0;
  rowsPerPageSelection = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 25, value: 25 },
    { label: 100, value: 100 }
  ];

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {}

  ngOnInit(): void {
    if (this.tableData && this.tableData.length) {
      this.totalRecords = this.tableData.length;
    }
  }

  nextPage() {
    this.first = this.first + this.rowsperPage;
  }

  previousPage() {
    this.first = this.first - this.rowsperPage;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.first === this.tableData.length - this.rowsperPage;
  }

  isFirstPage(): boolean {
    return this.first === 0;
  }

  setRowsPerPage(event) {
    this.rowsperPage = event.value;
  }

  deleteData(data) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Record',
      icon: 'fa fa-info-circle',
      accept: () => {
        this.tableData = this.tableData.filter(dataValue => dataValue.agencyId !== data.agencyId);
        this.messageService.add({ severity: 'success', key: 'deleteSuccess', summary: 'Record deleted.' });
      },
      reject: () => {
        return;
      }
    });
  }
}
