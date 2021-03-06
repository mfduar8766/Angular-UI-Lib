import { Component, Input, OnInit } from '@angular/core';
import { chunckArray } from '../common-table/table-utils';
import { PaginatorPubSubService } from '../services/paginatorPubSubService/paginatorPubSub.service';

@Component({
  selector: 'common-paginator',
  templateUrl: './common-paginator.component.html',
  styleUrls: ['./common-paginator.component.scss']
})
export class CommonPaginatorComponent implements OnInit {
  @Input() rowsPerPageOptions: number[];
  @Input() originalTableState: any[];
  rowsPerPage = 5;
  tableData: any[] = [];
  pagesArray: number[] = [];
  currentPage = 0;
  rowsPerPageCollection = {};

  constructor(private paginatorService: PaginatorPubSubService) {}

  ngOnInit() {
    this.tableData = this.originalTableState;
    this.paginatorService.state.subscribe(data => {
      this.rowsPerPage = data.rowsPerPage;
    });
    this.calculateTotalPages();
    this.setRowsPerPageCollection();
  }

  calculateTotalPages() {
    if (this.tableData.length % 2 === 0) {
      this.pagesArray = Array(this.tableData.length / this.rowsPerPage)
        .fill(null)
        .map((_, i) => i);
    }
    if (this.tableData.length % 2 !== 0) {
      this.pagesArray = Array(Math.ceil(this.tableData.length / this.rowsPerPage))
        .fill(null)
        .map((_, i) => i);
    }
  }

  setRowsPerPageCollection() {
    const chunckedArray = chunckArray(this.tableData, this.rowsPerPage);
    this.pagesArray.forEach(page => {
      if (chunckedArray[page]) {
        if (!this.rowsPerPageCollection[page]) {
          this.rowsPerPageCollection[page] = chunckedArray[page];
        }
      }
    });
  }

  getSelectedOption(rowsPerPage: number) {
    this.rowsPerPage = rowsPerPage;
    this.rowsPerPageCollection = {};
    this.calculateTotalPages();
    this.setRowsPerPageCollection();
    this.changePage(this.currentPage);
  }

  nextPage() {
    if (!(this.currentPage === this.pagesArray.length - 1)) {
      this.currentPage++;
      this.changePage(this.currentPage);
    }
  }

  previousPage() {
    if (!(this.currentPage <= this.pagesArray[0])) {
      this.currentPage--;
      this.changePage(this.currentPage);
    }
  }

  resetPaginator() {
    this.currentPage = 0;
    this.changePage(this.currentPage);
  }

  goToLastPage() {
    this.currentPage = this.pagesArray.length - 1;
    this.changePage(this.currentPage);
  }

  changePage(page) {
    this.currentPage = page;
    this.paginatorService.changeState({
      rowsPerPage: this.rowsPerPage,
      tableData: this.rowsPerPageCollection[page],
      page: this.currentPage
    });
  }
}
