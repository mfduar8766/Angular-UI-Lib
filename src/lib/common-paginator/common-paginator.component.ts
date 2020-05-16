import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'common-paginator',
  templateUrl: './common-paginator.component.html',
  styleUrls: ['./common-paginator.component.scss']
})
export class CommonPaginatorComponent {
  @Input() options: number[];
  @Input() rowsPerPage: number;
  @Input() tableData: any[];
  @Input() data: any[];
  @Input() page: number;
  @Input() tableDataOriginalState: any[];
  @Output() paginatorResults: EventEmitter<{
    page: number;
    tableData: any[];
    data: any[];
    tableDataOriginalState: any[];
    rowsPerPage: number;
  }> = new EventEmitter();

  sendPaginatorData() {
    this.paginatorResults.emit({
      page: this.page,
      tableData: this.tableData,
      data: this.data,
      tableDataOriginalState: this.tableDataOriginalState,
      rowsPerPage: this.rowsPerPage
    });
  }

  getSelectedOption(data: number) {
    this.rowsPerPage = data;
    this.tableData = this.data.slice(0, data);
    this.sendPaginatorData();
  }

  nextPage() {
    this.tableData = this.data.slice(this.rowsPerPage, this.data.length);
    this.page = this.rowsPerPage + 1;
    this.rowsPerPage = this.rowsPerPage + this.tableData.length;
    this.sendPaginatorData();
  }

  previousPage() {
    const previous = this.data.length - this.tableData.length;
    this.page = previous - this.tableData.length;
    this.tableData = this.data.slice(0, previous);
    this.rowsPerPage = previous;
    this.sendPaginatorData();
  }

  resetPaginator() {
    this.rowsPerPage = 5;
    this.page = 1;
    this.tableData = this.tableDataOriginalState.slice(0, this.rowsPerPage);
    this.sendPaginatorData();
  }

  goToLastPage() {
    // console.log('PAGE', this.page);
    // console.log('TABLE', this.tableData);
    // console.log('DATA', this.data);
    // console.log('ROWS', this.rowsPerPage);
    // if (this.rowsPerPage === 5) {
    //   this.nextPage();
    // }
  }
}
