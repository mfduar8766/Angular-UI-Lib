import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ASC, handleAscSort, DESC, handleDescSort, IHeaders } from './table-utils';

@Component({
  selector: 'common-table-2',
  templateUrl: './common-table-2.component.html',
  styleUrls: ['./common-table-2.component.scss']
})
export class CommonTableTwoComponent implements OnInit {
  @Input() tableData: any[];
  @Input() dataKey: string;
  @Input() tableHeaders: IHeaders[];
  @Input() showEditOption: boolean;
  @Input() showDeleteOption: boolean;
  @Output() selectedRowData: EventEmitter<any> = new EventEmitter();
  @Output() dataToEdit: EventEmitter<any> = new EventEmitter();
  @Output() dataToDelete: EventEmitter<any> = new EventEmitter();
  data: any[];
  tableDataOriginalState: any[] = [];
  sortDirection = 'ASC';
  selectedHeader = null;
  rowsPerPage = 5;
  rowsToDisplay = null;
  numberOfRowsToDisplay = [5, 10, 15, 20, 25];
  isSelectAll = false;
  page = 1;
  selectedRows: any[] = [];
  selectedRowIndex: number[] = [];

  constructor() {}

  ngOnInit() {
    this.tableDataOriginalState = this.tableData.slice(0, this.rowsPerPage);
    this.data = this.tableData;
    this.tableData = this.tableData.slice(0, this.rowsPerPage);
  }

  setSortDirection() {
    if (this.sortDirection === 'ASC') {
      this.sortDirection = 'DESC';
      return this.sortDirection;
    }
    if (this.sortDirection === 'DESC') {
      this.sortDirection = 'ASC';
      return this.sortDirection;
    }
  }

  handleSort(header: string) {
    this.setSortDirection();
    this.selectedHeader = header;
    switch (this.sortDirection) {
      case ASC:
        return (this.tableData = handleAscSort(this.tableData, header));
      case DESC:
        return (this.tableData = handleDescSort(this.tableData, header));
      default:
        return this.tableData;
    }
  }

  getRowData(data: any, index: number) {
    if (this.selectedRows.filter(item => item[this.dataKey] === data[this.dataKey]).length > 0) {
      this.removeSelectedValues(data, index);
    } else if (!(this.selectedRows.filter(item => item[this.dataKey] === data[this.dataKey]).length > 0)) {
      this.addSelectedValues(data, index);
    }
  }

  addSelectedValues(data: any, index: number) {
    this.selectedRowIndex.push(index);
    this.selectedRows.push(data);
    this.selectedRowData.emit(data);
  }

  removeSelectedValues(data: any, index: number) {
    this.selectedRows = this.selectedRows.filter(item => item[this.dataKey] !== data[this.dataKey]);
    this.selectedRowIndex = this.selectedRowIndex.filter(i => i !== index);
    this.selectedRowData.emit(data);
  }

  getDataToEdit(data: any) {
    this.dataToEdit.emit(data);
  }

  getDataToDelete(data: any) {
    this.dataToDelete.emit(data);
  }

  toggleSelectAll() {
    this.isSelectAll = !this.isSelectAll;
    if (this.isSelectAll) {
      this.selectedRows = this.tableData;
    }
    this.selectedRows = [];
  }

  setTable(data: { page: number; tableData: any[]; data: any[]; tableDataOriginalState: any[]; rowsPerPage: number }) {
    this.tableData = this.tableData;
    this.page = data.page;
    this.rowsPerPage = data.rowsPerPage;
    this.tableDataOriginalState = data.tableDataOriginalState;
    this.data = data.data;
  }

  // nextPage() {
  //   this.tableData = this.data.slice(this.rowsPerPage, this.data.length);
  //   this.page = this.rowsPerPage + 1;
  //   this.rowsPerPage = this.rowsPerPage + this.tableData.length;
  // }

  // previousPage() {
  //   const previous = this.data.length - this.tableData.length;
  //   this.page = previous - this.tableData.length;
  //   this.tableData = this.data.slice(0, previous);
  //   this.rowsPerPage = previous;
  // }

  // resetPaginator() {
  //   this.rowsPerPage = 5;
  //   this.page = 1;
  //   this.tableData = this.tableDataOriginalState.slice(0, this.rowsPerPage);
  // }

  // getSelectedOption(data: number) {
  //   this.rowsPerPage = data;
  //   this.tableData = this.data.slice(0, data);
  // }

  // goToLastPage() {
  //   // console.log('PAGE', this.page);
  //   // console.log('TABLE', this.tableData);
  //   // console.log('DATA', this.data);
  //   // console.log('ROWS', this.rowsPerPage);
  //   // if (this.rowsPerPage === 5) {
  //   //   this.nextPage();
  //   // }
  // }
}
