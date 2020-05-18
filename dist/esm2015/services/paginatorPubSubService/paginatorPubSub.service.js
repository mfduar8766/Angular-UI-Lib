import { __decorate } from 'tslib';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import * as i0 from '@angular/core';
let PaginatorPubSubService = class PaginatorPubSubService {
  constructor() {
    this.state$ = new BehaviorSubject({
      rowsPerPage: null,
      tableData: [],
      data: [],
      page: null,
      tableDataOriginalState: []
    });
  }
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
};
PaginatorPubSubService.ɵprov = i0.ɵɵdefineInjectable({
  factory: function PaginatorPubSubService_Factory() {
    return new PaginatorPubSubService();
  },
  token: PaginatorPubSubService,
  providedIn: 'root'
});
PaginatorPubSubService = __decorate([Injectable({ providedIn: 'root' })], PaginatorPubSubService);
export { PaginatorPubSubService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yUHViU3ViLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvcGFnaW5hdG9yUHViU3ViU2VydmljZS9wYWdpbmF0b3JQdWJTdWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBR2hFLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBQW5DO1FBQ1UsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFNO1lBQ3hDLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFNBQVMsRUFBRSxFQUFFO1lBQ2IsSUFBSSxFQUFFLEVBQUU7WUFDUixJQUFJLEVBQUUsSUFBSTtZQUNWLHNCQUFzQixFQUFFLEVBQUU7U0FDM0IsQ0FBQyxDQUFDO0tBZUo7SUFiQyxXQUFXLENBQUMsS0FBSztRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2YsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxzQkFBc0I7U0FDckQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0NBQ0YsQ0FBQTs7QUF0Qlksc0JBQXNCO0lBRGxDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QixzQkFBc0IsQ0FzQmxDO1NBdEJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMvaW50ZXJuYWwvQmVoYXZpb3JTdWJqZWN0JztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBQYWdpbmF0b3JQdWJTdWJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdGF0ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oe1xuICAgIHJvd3NQZXJQYWdlOiBudWxsLFxuICAgIHRhYmxlRGF0YTogW10sXG4gICAgZGF0YTogW10sXG4gICAgcGFnZTogbnVsbCxcbiAgICB0YWJsZURhdGFPcmlnaW5hbFN0YXRlOiBbXVxuICB9KTtcblxuICBjaGFuZ2VTdGF0ZSh2YWx1ZSkge1xuICAgIHRoaXMuc3RhdGUkLm5leHQoe1xuICAgICAgcm93c1BlclBhZ2U6IHZhbHVlLnJvd3NQZXJQYWdlLFxuICAgICAgdGFibGVEYXRhOiB2YWx1ZS50YWJsZURhdGEsXG4gICAgICBkYXRhOiB2YWx1ZS5kYXRhLFxuICAgICAgcGFnZTogdmFsdWUucGFnZSxcbiAgICAgIHRhYmxlRGF0YU9yaWdpbmFsU3RhdGU6IHZhbHVlLnRhYmxlRGF0YU9yaWdpbmFsU3RhdGVcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBzdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cbiJdfQ==
