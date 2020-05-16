import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({ providedIn: 'root' })
export class PaginatorPubSubService {
  private state$ = new BehaviorSubject<any>({
    rowsPerPage: null,
    tableData: [],
    data: [],
    page: null,
    tableDataOriginalState: []
  });

  changeState(value) {
    this.state$.next({
      rowsPerPage: value.rowsPerPage,
      tableData: value.tableData,
      data: value.data,
      page: value.page,
      tableDataOriginalState: value.tableDataOriginalState
    });
  }

  get state() {
    return this.state$.asObservable();
  }
}
