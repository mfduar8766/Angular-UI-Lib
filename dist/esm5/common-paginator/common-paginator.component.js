import { __decorate } from 'tslib';
import { Component, Input } from '@angular/core';
import { PaginatorPubSubService } from '../services/paginatorPubSubService/paginatorPubSub.service';
var CommonPaginatorComponent = /** @class */ (function() {
  function CommonPaginatorComponent(paginatorService) {
    this.paginatorService = paginatorService;
  }
  CommonPaginatorComponent.prototype.ngOnInit = function() {
    var _this = this;
    this.paginatorService.state.subscribe(function(data) {
      (_this.rowsPerPage = data.rowsPerPage),
        (_this.tableData = data.tableData),
        (_this.data = data.data),
        (_this.page = data.page),
        (_this.tableDataOriginalState = data.tableDataOriginalState);
    });
  };
  CommonPaginatorComponent.prototype.getSelectedOption = function(data) {
    this.rowsPerPage = data;
    this.tableData = this.data.slice(0, data);
    this.paginatorService.changeState({
      rowsPerPage: this.rowsPerPage,
      tableData: this.tableData,
      data: this.data,
      page: this.page,
      tableDataOriginalState: this.tableDataOriginalState
    });
  };
  CommonPaginatorComponent.prototype.nextPage = function() {
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
  };
  CommonPaginatorComponent.prototype.previousPage = function() {
    var previous = this.data.length - this.tableData.length;
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
  };
  CommonPaginatorComponent.prototype.resetPaginator = function() {
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
  };
  CommonPaginatorComponent.prototype.calculateendOfPages = function() {};
  CommonPaginatorComponent.prototype.goToLastPage = function() {
    var subtractLengths = this.data.length - this.tableData.length;
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
  };
  CommonPaginatorComponent.ctorParameters = function() {
    return [{ type: PaginatorPubSubService }];
  };
  __decorate([Input()], CommonPaginatorComponent.prototype, 'options', void 0);
  CommonPaginatorComponent = __decorate(
    [
      Component({
        selector: 'common-paginator',
        template:
          '<footer>\n  <common-select\n    (selectedItem)="getSelectedOption($event)"\n    [options]="options"\n    name="tableRows"\n    [(ngModel)]="rowsPerPage"\n  ></common-select>\n  <div\n    style="display: flex; justify-content: center; align-items: center; width: 100%; margin-bottom: 1rem; padding: 1rem;"\n  >\n    <div style="width: 100px; color: rgba(0,0,0,.26);">{{ page }} - {{ rowsPerPage }} of {{ data.length }}</div>\n    <button\n      [disabled]="page === 1 || rowsPerPage > data.length"\n      style="font-size: 1.5rem; margin-right: 1rem;"\n      class="fa fa-angle-double-left"\n      (click)="resetPaginator()"\n    ></button>\n    <button\n      [disabled]="page === 1 || rowsPerPage > data.length"\n      (click)="previousPage()"\n      style="font-size: 1.5rem; margin-right: 1rem;"\n      class="fa fa-angle-left"\n    ></button>\n    <button\n      [disabled]="rowsPerPage === data.length || rowsPerPage > data.length"\n      (click)="nextPage()"\n      style="font-size: 1.5rem; margin-right: 1rem;"\n      class="fa fa-angle-right"\n    ></button>\n    <button\n      [disabled]="rowsPerPage > data.length"\n      (click)="goToLastPage()"\n      style="font-size: 1.5rem;"\n      class="fa fa-angle-double-right"\n    ></button>\n  </div>\n</footer>\n',
        styles: [
          'button{background-color:Transparent;background-repeat:no-repeat;border:none;cursor:pointer;overflow:hidden;outline:0}footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;height:100%;width:100%}'
        ]
      })
    ],
    CommonPaginatorComponent
  );
  return CommonPaginatorComponent;
})();
export { CommonPaginatorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXBhZ2luYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXBhZ2luYXRvci9jb21tb24tcGFnaW5hdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBT3BHO0lBUUUsa0NBQW9CLGdCQUF3QztRQUF4QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXdCO0lBQUcsQ0FBQztJQUVoRSwyQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDeEMsQ0FBQyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ25DLENBQUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqQyxDQUFDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDdkIsQ0FBQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLENBQUMsS0FBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9EQUFpQixHQUFqQixVQUFrQixJQUFZO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxnQkFBZ0Is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WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO2dCQUNoQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO2dCQUN6QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQzdCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixzQkFBc0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCO2FBQ3BELENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7Z0JBaEZxQyxzQkFBc0I7O0lBUG5EO1FBQVIsS0FBSyxFQUFFOzZEQUFtQjtJQURoQix3QkFBd0I7UUFMcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QiwreUNBQWdEOztTQUVqRCxDQUFDO09BQ1csd0JBQXdCLENBeUZwQztJQUFELCtCQUFDO0NBQUEsQUF6RkQsSUF5RkM7U0F6Rlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnaW5hdG9yUHViU3ViU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3BhZ2luYXRvclB1YlN1YlNlcnZpY2UvcGFnaW5hdG9yUHViU3ViLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21tb24tcGFnaW5hdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbW1vbi1wYWdpbmF0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21tb24tcGFnaW5hdG9yLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uUGFnaW5hdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgb3B0aW9uczogbnVtYmVyW107XG4gIHJvd3NQZXJQYWdlOiBudW1iZXI7XG4gIHRhYmxlRGF0YTogYW55W107XG4gIGRhdGE6IGFueVtdO1xuICBwYWdlOiBudW1iZXI7XG4gIHRhYmxlRGF0YU9yaWdpbmFsU3RhdGU6IGFueVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnaW5hdG9yU2VydmljZTogUGFnaW5hdG9yUHViU3ViU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2luYXRvclNlcnZpY2Uuc3RhdGUuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgKHRoaXMucm93c1BlclBhZ2UgPSBkYXRhLnJvd3NQZXJQYWdlKSxcbiAgICAgICAgKHRoaXMudGFibGVEYXRhID0gZGF0YS50YWJsZURhdGEpLFxuICAgICAgICAodGhpcy5kYXRhID0gZGF0YS5kYXRhKSxcbiAgICAgICAgKHRoaXMucGFnZSA9IGRhdGEucGFnZSksXG4gICAgICAgICh0aGlzLnRhYmxlRGF0YU9yaWdpbmFsU3RhdGUgPSBkYXRhLnRhYmxlRGF0YU9yaWdpbmFsU3RhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb24oZGF0YTogbnVtYmVyKSB7XG4gICAgdGhpcy5yb3dzUGVyUGFnZSA9IGRhdGE7XG4gICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLmRhdGEuc2xpY2UoMCwgZGF0YSk7XG4gICAgdGhpcy5wYWdpbmF0b3JTZXJ2aWNlLmNoYW5nZVN0YXRlKHtcbiAgICAgIHJvd3NQZXJQYWdlOiB0aGlzLnJvd3NQZXJQYWdlLFxuICAgICAgdGFibGVEYXRhOiB0aGlzLnRhYmxlRGF0YSxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgIHRhYmxlRGF0YU9yaWdpbmFsU3RhdGU6IHRoaXMudGFibGVEYXRhT3JpZ2luYWxTdGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgbmV4dFBhZ2UoKSB7XG4gICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLmRhdGEuc2xpY2UodGhpcy5yb3dzUGVyUGFnZSwgdGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgdGhpcy5wYWdlID0gdGhpcy5yb3dzUGVyUGFnZSArIDE7XG4gICAgdGhpcy5yb3dzUGVyUGFnZSA9IHRoaXMucm93c1BlclBhZ2UgKyB0aGlzLnRhYmxlRGF0YS5sZW5ndGg7XG4gICAgdGhpcy5wYWdpbmF0b3JTZXJ2aWNlLmNoYW5nZVN0YXRlKHtcbiAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgIHJvd3NQZXJQYWdlOiB0aGlzLnJvd3NQZXJQYWdlLFxuICAgICAgdGFibGVEYXRhOiB0aGlzLnRhYmxlRGF0YSxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIHRhYmxlRGF0YU9yaWdpbmFsU3RhdGU6IHRoaXMudGFibGVEYXRhT3JpZ2luYWxTdGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgcHJldmlvdXNQYWdlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5kYXRhLmxlbmd0aCAtIHRoaXMudGFibGVEYXRhLmxlbmd0aDtcbiAgICB0aGlzLnBhZ2UgPSBwcmV2aW91cyAtIHRoaXMudGFibGVEYXRhLmxlbmd0aDtcbiAgICB0aGlzLnRhYmxlRGF0YSA9IHRoaXMuZGF0YS5zbGljZSgwLCBwcmV2aW91cyk7XG4gICAgdGhpcy5yb3dzUGVyUGFnZSA9IHByZXZpb3VzO1xuICAgIHRoaXMucGFnaW5hdG9yU2VydmljZS5jaGFuZ2VTdGF0ZSh7XG4gICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICB0YWJsZURhdGE6IHRoaXMudGFibGVEYXRhLFxuICAgICAgcm93c1BlclBhZ2U6IHRoaXMucm93c1BlclBhZ2UsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICB0YWJsZURhdGFPcmlnaW5hbFN0YXRlOiB0aGlzLnRhYmxlRGF0YU9yaWdpbmFsU3RhdGVcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0UGFnaW5hdG9yKCkge1xuICAgIHRoaXMucm93c1BlclBhZ2UgPSA1O1xuICAgIHRoaXMucGFnZSA9IDE7XG4gICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLnRhYmxlRGF0YU9yaWdpbmFsU3RhdGUuc2xpY2UoMCwgdGhpcy5yb3dzUGVyUGFnZSk7XG4gICAgdGhpcy5wYWdpbmF0b3JTZXJ2aWNlLmNoYW5nZVN0YXRlKHtcbiAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgIHRhYmxlRGF0YTogdGhpcy50YWJsZURhdGEsXG4gICAgICByb3dzUGVyUGFnZTogdGhpcy5yb3dzUGVyUGFnZSxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIHRhYmxlRGF0YU9yaWdpbmFsU3RhdGU6IHRoaXMudGFibGVEYXRhT3JpZ2luYWxTdGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgY2FsY3VsYXRlZW5kT2ZQYWdlcygpIHt9XG5cbiAgZ29Ub0xhc3RQYWdlKCkge1xuICAgIGNvbnN0IHN1YnRyYWN0TGVuZ3RocyA9IHRoaXMuZGF0YS5sZW5ndGggLSB0aGlzLnRhYmxlRGF0YS5sZW5ndGg7XG4gICAgaWYgKHN1YnRyYWN0TGVuZ3RocyA8IHRoaXMucm93c1BlclBhZ2UpIHtcbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucm93c1BlclBhZ2UgKyAxO1xuICAgICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLmRhdGEuc2xpY2Uoc3VidHJhY3RMZW5ndGhzICsgMSk7XG4gICAgICB0aGlzLnJvd3NQZXJQYWdlID0gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICAgIHRoaXMucGFnaW5hdG9yU2VydmljZS5jaGFuZ2VTdGF0ZSh7XG4gICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgICAgdGFibGVEYXRhOiB0aGlzLnRhYmxlRGF0YSxcbiAgICAgICAgcm93c1BlclBhZ2U6IHRoaXMucm93c1BlclBhZ2UsXG4gICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgdGFibGVEYXRhT3JpZ2luYWxTdGF0ZTogdGhpcy50YWJsZURhdGFPcmlnaW5hbFN0YXRlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
