import { __decorate } from 'tslib';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import * as i0 from '@angular/core';
var PaginatorPubSubService = /** @class */ (function() {
  function PaginatorPubSubService() {
    this.state$ = new BehaviorSubject({
      rowsPerPage: null,
      tableData: [],
      data: [],
      page: null,
      tableDataOriginalState: []
    });
  }
  PaginatorPubSubService.prototype.changeState = function(value) {
    this.state$.next({
      rowsPerPage: value.rowsPerPage,
      tableData: value.tableData,
      data: value.data,
      page: value.page,
      tableDataOriginalState: value.tableDataOriginalState
    });
  };
  Object.defineProperty(PaginatorPubSubService.prototype, 'state', {
    get: function() {
      return this.state$.asObservable();
    },
    enumerable: true,
    configurable: true
  });
  PaginatorPubSubService.ɵprov = i0.ɵɵdefineInjectable({
    factory: function PaginatorPubSubService_Factory() {
      return new PaginatorPubSubService();
    },
    token: PaginatorPubSubService,
    providedIn: 'root'
  });
  PaginatorPubSubService = __decorate([Injectable({ providedIn: 'root' })], PaginatorPubSubService);
  return PaginatorPubSubService;
})();
export { PaginatorPubSubService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yUHViU3ViLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsic2VydmljZXMvcGFnaW5hdG9yUHViU3ViU2VydmljZS9wYWdpbmF0b3JQdWJTdWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0FBR2hFO0lBQUE7UUFDVSxXQUFNLEdBQUcsSUFBSSxlQUFlLENBQU07WUFDeEMsV0FBVyxFQUFFLElBQUk7WUFDakIsU0FBUyxFQUFFLEVBQUU7WUFDYixJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxJQUFJO1lBQ1Ysc0JBQXNCLEVBQUUsRUFBRTtTQUMzQixDQUFDLENBQUM7S0FlSjtJQWJDLDRDQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLHNCQUFzQjtTQUNyRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQUkseUNBQUs7YUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTs7SUFyQlUsc0JBQXNCO1FBRGxDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztPQUN0QixzQkFBc0IsQ0FzQmxDO2lDQTFCRDtDQTBCQyxBQXRCRCxJQXNCQztTQXRCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzL2ludGVybmFsL0JlaGF2aW9yU3ViamVjdCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yUHViU3ViU2VydmljZSB7XG4gIHByaXZhdGUgc3RhdGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHtcbiAgICByb3dzUGVyUGFnZTogbnVsbCxcbiAgICB0YWJsZURhdGE6IFtdLFxuICAgIGRhdGE6IFtdLFxuICAgIHBhZ2U6IG51bGwsXG4gICAgdGFibGVEYXRhT3JpZ2luYWxTdGF0ZTogW11cbiAgfSk7XG5cbiAgY2hhbmdlU3RhdGUodmFsdWUpIHtcbiAgICB0aGlzLnN0YXRlJC5uZXh0KHtcbiAgICAgIHJvd3NQZXJQYWdlOiB2YWx1ZS5yb3dzUGVyUGFnZSxcbiAgICAgIHRhYmxlRGF0YTogdmFsdWUudGFibGVEYXRhLFxuICAgICAgZGF0YTogdmFsdWUuZGF0YSxcbiAgICAgIHBhZ2U6IHZhbHVlLnBhZ2UsXG4gICAgICB0YWJsZURhdGFPcmlnaW5hbFN0YXRlOiB2YWx1ZS50YWJsZURhdGFPcmlnaW5hbFN0YXRlXG4gICAgfSk7XG4gIH1cblxuICBnZXQgc3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUkLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG4iXX0=
