import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ASC, handleAscSort, DESC, handleDescSort, IHeaders } from './table-utils';
import { PaginatorPubSubService } from '../services/paginatorPubSubService/paginatorPubSub.service';

@Component({
  selector: 'common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableTwoComponent implements OnInit {
  @Input() tableData: any[];
  @Input() dataKey: string;
  @Input() tableHeaders: IHeaders[];
  @Input() showEditOption: boolean;
  @Input() showDeleteOption: boolean;
  @Input() rowsPerPage = 5;
  @Input() rowsPerPageOptions = [5, 10, 15, 20, 25];
  @Output() selectedRowData: EventEmitter<any> = new EventEmitter();
  @Output() dataToEdit: EventEmitter<any> = new EventEmitter();
  @Output() dataToDelete: EventEmitter<any> = new EventEmitter();
  sortDirection = 'ASC';
  selectedHeader = null;
  isSelectAll = false;
  selectAllContainer: Map<number, any> = new Map();
  selectedRow: Map<number, any> = new Map();
  page = 0;
  originalTableState: any[];

  constructor(private paginatorService: PaginatorPubSubService) {}

  ngOnInit() {
    this.originalTableState = this.tableData;
    this.handlePaginatorService(this.originalTableState);
    this.tableData = this.tableData.slice(0, this.rowsPerPage);
  }

  handlePaginatorService(originalTableState: any[]) {
    this.paginatorService.changeState({
      rowsPerPage: this.rowsPerPage,
      tableData: originalTableState
    });
    this.paginatorService.state.subscribe(data => {
      this.tableData = data.tableData;
      this.rowsPerPage = data.rowsPerPage;
      this.page = data.page || 0;
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

  getRowData(data: any) {
    if (!this.selectedRow.has(data[this.dataKey])) {
      this.selectedRow.set(data[this.dataKey], data);
    } else if (this.selectedRow.has(data[this.dataKey])) {
      this.selectedRow.delete(data[this.dataKey]);
    }
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
      if (!this.selectAllContainer.has(this.page)) {
        this.selectAllContainer.set(this.page, this.tableData);
      }
    } else {
      this.selectAllContainer.delete(this.page);
    }
  }
}
