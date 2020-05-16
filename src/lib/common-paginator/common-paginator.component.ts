import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PaginatorPubSubService } from '../services/paginatorPubSubService/paginatorPubSub.service';

@Component({
  selector: 'common-paginator',
  templateUrl: './common-paginator.component.html',
  styleUrls: ['./common-paginator.component.scss']
})
export class CommonPaginatorComponent implements OnInit {
  @Input() options: number[];
  rowsPerPage: number;
  tableData: any[];
  data: any[];
  page: number;
  tableDataOriginalState: any[];

  constructor(private paginatorService: PaginatorPubSubService) {}

  ngOnInit() {
    this.paginatorService.state.subscribe(data => {
      (this.rowsPerPage = data.rowsPerPage),
        (this.tableData = data.tableData),
        (this.data = data.data),
        (this.page = data.page),
        (this.tableDataOriginalState = data.tableDataOriginalState);
    });
  }

  getSelectedOption(data: number) {
    this.rowsPerPage = data;
    this.tableData = this.data.slice(0, data);
    this.paginatorService.changeState({
      rowsPerPage: this.rowsPerPage,
      tableData: this.tableData,
      data: this.data,
      page: this.page,
      tableDataOriginalState: this.tableDataOriginalState
    });
  }

  nextPage() {
    this.tableData = this.data.slice(this.rowsPerPage, this.data.length);
    this.page = this.rowsPerPage + 1;
    this.rowsPerPage = this.rowsPerPage + this.tableData.length;
    this.paginatorService.changeState({
      page: this.page,
      rowsPerPage: this.rowsPerPage,
      tableData: this.tableData,
      data: this.data,
      tableDataOriginalState: this.tableDataOriginalState
    });
  }

  previousPage() {
    const previous = this.data.length - this.tableData.length;
    this.page = previous - this.tableData.length;
    this.tableData = this.data.slice(0, previous);
    this.rowsPerPage = previous;
    this.paginatorService.changeState({
      page: this.page,
      tableData: this.tableData,
      rowsPerPage: this.rowsPerPage,
      data: this.data,
      tableDataOriginalState: this.tableDataOriginalState
    });
  }

  resetPaginator() {
    this.rowsPerPage = 5;
    this.page = 1;
    this.tableData = this.tableDataOriginalState.slice(0, this.rowsPerPage);
    this.paginatorService.changeState({
      page: this.page,
      tableData: this.tableData,
      rowsPerPage: this.rowsPerPage,
      data: this.data,
      tableDataOriginalState: this.tableDataOriginalState
    });
  }

  calculateendOfPages() {}

  goToLastPage() {
    const subtractLengths = this.data.length - this.tableData.length;
    if (subtractLengths < this.rowsPerPage) {
      this.page = this.rowsPerPage + 1;
      this.tableData = this.data.slice(subtractLengths + 1);
      this.rowsPerPage = this.data.length;
      this.paginatorService.changeState({
        page: this.page,
        tableData: this.tableData,
        rowsPerPage: this.rowsPerPage,
        data: this.data,
        tableDataOriginalState: this.tableDataOriginalState
      });
    }
  }
}
