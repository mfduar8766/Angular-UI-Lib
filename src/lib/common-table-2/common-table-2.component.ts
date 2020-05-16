import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ASC, handleAscSort, DESC, handleDescSort, IHeaders } from './table-utils';
import { PaginatorPubSubService } from '../services/paginatorPubSubService/paginatorPubSub.service';

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
  @Input() rowsPerPage = 5;
  @Output() selectedRowData: EventEmitter<any> = new EventEmitter();
  @Output() dataToEdit: EventEmitter<any> = new EventEmitter();
  @Output() dataToDelete: EventEmitter<any> = new EventEmitter();
  sortDirection = 'ASC';
  selectedHeader = null;
  numberOfRowsToDisplay = [5, 10, 15, 20, 25];
  isSelectAll = false;
  selectedRows: any[] = [];
  selectedRowIndex: number[] = [];

  constructor(private paginatorService: PaginatorPubSubService) {}

  ngOnInit() {
    const originalState = this.tableData.slice(0, this.rowsPerPage);
    const tableDataCopy = this.tableData;
    this.tableData = this.tableData.slice(0, this.rowsPerPage);
    this.handlePaginatorService(originalState, tableDataCopy);
  }

  handlePaginatorService(originalState: any[], tableDataCopy: any[]) {
    this.paginatorService.changeState({
      rowsPerPage: this.rowsPerPage,
      tableData: this.tableData,
      data: tableDataCopy,
      page: 1,
      tableDataOriginalState: originalState
    });
    this.paginatorService.state.subscribe(data => {
      (this.rowsPerPage = data.rowsPerPage), (this.tableData = data.tableData);
    });
  }

  setSortDirection(): string {
    if (this.sortDirection === 'ASC') {
      this.sortDirection = 'DESC';
      return this.sortDirection;
    }
    if (this.sortDirection === 'DESC') {
      this.sortDirection = 'ASC';
      return this.sortDirection;
    }
  }

  handleSort(header: string): any[] {
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

  checkIfSelectedItemsAreInArray(data: any): boolean {
    if (this.selectedRows.filter(item => item[this.dataKey] === data[this.dataKey]).length > 0) {
      return true;
    } else if (!(this.selectedRows.filter(item => item[this.dataKey] === data[this.dataKey]).length > 0)) {
      return false;
    }
  }

  getRowData(data: any, index: number) {
    if (this.checkIfSelectedItemsAreInArray(data)) {
      this.removeSelectedValues(data, index);
    } else if (!this.checkIfSelectedItemsAreInArray(data)) {
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
}
