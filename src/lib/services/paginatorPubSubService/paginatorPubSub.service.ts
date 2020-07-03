import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({ providedIn: 'root' })
export class PaginatorPubSubService {
  private state$ = new BehaviorSubject<any>({
    rowsPerPage: null,
    tableData: [],
    page: 0
  });

  changeState(value) {
    this.state$.next({
      rowsPerPage: value.rowsPerPage,
      tableData: value.tableData,
      page: value.page
    });
  }

  get state() {
    return this.state$.asObservable();
  }
}
