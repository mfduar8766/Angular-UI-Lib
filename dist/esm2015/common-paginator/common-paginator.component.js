import { __decorate } from 'tslib';
import { Component, Input } from '@angular/core';
import { PaginatorPubSubService } from '../services/paginatorPubSubService/paginatorPubSub.service';
let CommonPaginatorComponent = class CommonPaginatorComponent {
  constructor(paginatorService) {
    this.paginatorService = paginatorService;
  }
  ngOnInit() {
    this.paginatorService.state.subscribe(data => {
      (this.rowsPerPage = data.rowsPerPage),
        (this.tableData = data.tableData),
        (this.data = data.data),
        (this.page = data.page),
        (this.tableDataOriginalState = data.tableDataOriginalState);
    });
  }
  getSelectedOption(data) {
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
};
CommonPaginatorComponent.ctorParameters = () => [{ type: PaginatorPubSubService }];
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
export { CommonPaginatorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXBhZ2luYXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXBhZ2luYXRvci9jb21tb24tcGFnaW5hdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBT3BHLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBUW5DLFlBQW9CLGdCQUF3QztRQUF4QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXdCO0lBQUcsQ0FBQztJQUVoRSxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0MsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ25DLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO2dCQUNqQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDdkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlCQUFpQixDQUFDLElBQVk7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztZQUNoQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLHNCQUFzQixFQUFFLElBQUksQ0FBQyxzQkFBc0I7U0FDcEQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUM1RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO1lBQ2hDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2Ysc0JBQXNCLEVBQUUsSUFBSSxDQUFDLHNCQUFzQjtTQUNwRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzFELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7WUFDaEMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixzQkFBc0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCO1NBQ3BELENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO1lBQ2hDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2Ysc0JBQXNCLEVBQUUsSUFBSSxDQUFDLHNCQUFzQjtTQUNwRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsbUJBQW1CLEtBQUksQ0FBQztJQUV4QixZQUFZO1FBQ1YsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDakUsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN0QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDcEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztnQkFDaEMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDekIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2Ysc0JBQXNCLEVBQUUsSUFBSSxDQUFDLHNCQUFzQjthQUNwRCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRixDQUFBOztZQWpGdUMsc0JBQXNCOztBQVBuRDtJQUFSLEtBQUssRUFBRTt5REFBbUI7QUFEaEIsd0JBQXdCO0lBTHBDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsK3lDQUFnRDs7S0FFakQsQ0FBQztHQUNXLHdCQUF3QixDQXlGcEM7U0F6Rlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnaW5hdG9yUHViU3ViU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3BhZ2luYXRvclB1YlN1YlNlcnZpY2UvcGFnaW5hdG9yUHViU3ViLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21tb24tcGFnaW5hdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbW1vbi1wYWdpbmF0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21tb24tcGFnaW5hdG9yLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uUGFnaW5hdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgb3B0aW9uczogbnVtYmVyW107XG4gIHJvd3NQZXJQYWdlOiBudW1iZXI7XG4gIHRhYmxlRGF0YTogYW55W107XG4gIGRhdGE6IGFueVtdO1xuICBwYWdlOiBudW1iZXI7XG4gIHRhYmxlRGF0YU9yaWdpbmFsU3RhdGU6IGFueVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnaW5hdG9yU2VydmljZTogUGFnaW5hdG9yUHViU3ViU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2luYXRvclNlcnZpY2Uuc3RhdGUuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgKHRoaXMucm93c1BlclBhZ2UgPSBkYXRhLnJvd3NQZXJQYWdlKSxcbiAgICAgICAgKHRoaXMudGFibGVEYXRhID0gZGF0YS50YWJsZURhdGEpLFxuICAgICAgICAodGhpcy5kYXRhID0gZGF0YS5kYXRhKSxcbiAgICAgICAgKHRoaXMucGFnZSA9IGRhdGEucGFnZSksXG4gICAgICAgICh0aGlzLnRhYmxlRGF0YU9yaWdpbmFsU3RhdGUgPSBkYXRhLnRhYmxlRGF0YU9yaWdpbmFsU3RhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0U2VsZWN0ZWRPcHRpb24oZGF0YTogbnVtYmVyKSB7XG4gICAgdGhpcy5yb3dzUGVyUGFnZSA9IGRhdGE7XG4gICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLmRhdGEuc2xpY2UoMCwgZGF0YSk7XG4gICAgdGhpcy5wYWdpbmF0b3JTZXJ2aWNlLmNoYW5nZVN0YXRlKHtcbiAgICAgIHJvd3NQZXJQYWdlOiB0aGlzLnJvd3NQZXJQYWdlLFxuICAgICAgdGFibGVEYXRhOiB0aGlzLnRhYmxlRGF0YSxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgIHRhYmxlRGF0YU9yaWdpbmFsU3RhdGU6IHRoaXMudGFibGVEYXRhT3JpZ2luYWxTdGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgbmV4dFBhZ2UoKSB7XG4gICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLmRhdGEuc2xpY2UodGhpcy5yb3dzUGVyUGFnZSwgdGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgdGhpcy5wYWdlID0gdGhpcy5yb3dzUGVyUGFnZSArIDE7XG4gICAgdGhpcy5yb3dzUGVyUGFnZSA9IHRoaXMucm93c1BlclBhZ2UgKyB0aGlzLnRhYmxlRGF0YS5sZW5ndGg7XG4gICAgdGhpcy5wYWdpbmF0b3JTZXJ2aWNlLmNoYW5nZVN0YXRlKHtcbiAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgIHJvd3NQZXJQYWdlOiB0aGlzLnJvd3NQZXJQYWdlLFxuICAgICAgdGFibGVEYXRhOiB0aGlzLnRhYmxlRGF0YSxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIHRhYmxlRGF0YU9yaWdpbmFsU3RhdGU6IHRoaXMudGFibGVEYXRhT3JpZ2luYWxTdGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgcHJldmlvdXNQYWdlKCkge1xuICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5kYXRhLmxlbmd0aCAtIHRoaXMudGFibGVEYXRhLmxlbmd0aDtcbiAgICB0aGlzLnBhZ2UgPSBwcmV2aW91cyAtIHRoaXMudGFibGVEYXRhLmxlbmd0aDtcbiAgICB0aGlzLnRhYmxlRGF0YSA9IHRoaXMuZGF0YS5zbGljZSgwLCBwcmV2aW91cyk7XG4gICAgdGhpcy5yb3dzUGVyUGFnZSA9IHByZXZpb3VzO1xuICAgIHRoaXMucGFnaW5hdG9yU2VydmljZS5jaGFuZ2VTdGF0ZSh7XG4gICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICB0YWJsZURhdGE6IHRoaXMudGFibGVEYXRhLFxuICAgICAgcm93c1BlclBhZ2U6IHRoaXMucm93c1BlclBhZ2UsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICB0YWJsZURhdGFPcmlnaW5hbFN0YXRlOiB0aGlzLnRhYmxlRGF0YU9yaWdpbmFsU3RhdGVcbiAgICB9KTtcbiAgfVxuXG4gIHJlc2V0UGFnaW5hdG9yKCkge1xuICAgIHRoaXMucm93c1BlclBhZ2UgPSA1O1xuICAgIHRoaXMucGFnZSA9IDE7XG4gICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLnRhYmxlRGF0YU9yaWdpbmFsU3RhdGUuc2xpY2UoMCwgdGhpcy5yb3dzUGVyUGFnZSk7XG4gICAgdGhpcy5wYWdpbmF0b3JTZXJ2aWNlLmNoYW5nZVN0YXRlKHtcbiAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgIHRhYmxlRGF0YTogdGhpcy50YWJsZURhdGEsXG4gICAgICByb3dzUGVyUGFnZTogdGhpcy5yb3dzUGVyUGFnZSxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIHRhYmxlRGF0YU9yaWdpbmFsU3RhdGU6IHRoaXMudGFibGVEYXRhT3JpZ2luYWxTdGF0ZVxuICAgIH0pO1xuICB9XG5cbiAgY2FsY3VsYXRlZW5kT2ZQYWdlcygpIHt9XG5cbiAgZ29Ub0xhc3RQYWdlKCkge1xuICAgIGNvbnN0IHN1YnRyYWN0TGVuZ3RocyA9IHRoaXMuZGF0YS5sZW5ndGggLSB0aGlzLnRhYmxlRGF0YS5sZW5ndGg7XG4gICAgaWYgKHN1YnRyYWN0TGVuZ3RocyA8IHRoaXMucm93c1BlclBhZ2UpIHtcbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucm93c1BlclBhZ2UgKyAxO1xuICAgICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLmRhdGEuc2xpY2Uoc3VidHJhY3RMZW5ndGhzICsgMSk7XG4gICAgICB0aGlzLnJvd3NQZXJQYWdlID0gdGhpcy5kYXRhLmxlbmd0aDtcbiAgICAgIHRoaXMucGFnaW5hdG9yU2VydmljZS5jaGFuZ2VTdGF0ZSh7XG4gICAgICAgIHBhZ2U6IHRoaXMucGFnZSxcbiAgICAgICAgdGFibGVEYXRhOiB0aGlzLnRhYmxlRGF0YSxcbiAgICAgICAgcm93c1BlclBhZ2U6IHRoaXMucm93c1BlclBhZ2UsXG4gICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgdGFibGVEYXRhT3JpZ2luYWxTdGF0ZTogdGhpcy50YWJsZURhdGFPcmlnaW5hbFN0YXRlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
