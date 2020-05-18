import { __decorate } from 'tslib';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ASC, handleAscSort, DESC, handleDescSort } from './table-utils';
import { PaginatorPubSubService } from '../services/paginatorPubSubService/paginatorPubSub.service';
var CommonTableTwoComponent = /** @class */ (function() {
  function CommonTableTwoComponent(paginatorService) {
    this.paginatorService = paginatorService;
    this.rowsPerPage = 5;
    this.selectedRowData = new EventEmitter();
    this.dataToEdit = new EventEmitter();
    this.dataToDelete = new EventEmitter();
    this.sortDirection = 'ASC';
    this.selectedHeader = null;
    this.numberOfRowsToDisplay = [5, 10, 15, 20, 25];
    this.isSelectAll = false;
    this.selectedRows = [];
    this.selectedRowIndex = [];
  }
  CommonTableTwoComponent.prototype.ngOnInit = function() {
    var originalState = this.tableData.slice(0, this.rowsPerPage);
    var tableDataCopy = this.tableData;
    this.tableData = this.tableData.slice(0, this.rowsPerPage);
    this.handlePaginatorService(originalState, tableDataCopy);
  };
  CommonTableTwoComponent.prototype.handlePaginatorService = function(originalState, tableDataCopy) {
    var _this = this;
    this.paginatorService.changeState({
      rowsPerPage: this.rowsPerPage,
      tableData: this.tableData,
      data: tableDataCopy,
      page: 1,
      tableDataOriginalState: originalState
    });
    this.paginatorService.state.subscribe(function(data) {
      (_this.rowsPerPage = data.rowsPerPage), (_this.tableData = data.tableData);
    });
  };
  CommonTableTwoComponent.prototype.setSortDirection = function() {
    if (this.sortDirection === 'ASC') {
      this.sortDirection = 'DESC';
      return this.sortDirection;
    }
    if (this.sortDirection === 'DESC') {
      this.sortDirection = 'ASC';
      return this.sortDirection;
    }
  };
  CommonTableTwoComponent.prototype.handleSort = function(header) {
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
  };
  CommonTableTwoComponent.prototype.checkIfSelectedItemsAreInArray = function(data) {
    var _this = this;
    if (
      this.selectedRows.filter(function(item) {
        return item[_this.dataKey] === data[_this.dataKey];
      }).length > 0
    ) {
      return true;
    } else if (
      !(
        this.selectedRows.filter(function(item) {
          return item[_this.dataKey] === data[_this.dataKey];
        }).length > 0
      )
    ) {
      return false;
    }
  };
  CommonTableTwoComponent.prototype.getRowData = function(data, index) {
    if (this.checkIfSelectedItemsAreInArray(data)) {
      this.removeSelectedValues(data, index);
    } else if (!this.checkIfSelectedItemsAreInArray(data)) {
      this.addSelectedValues(data, index);
    }
  };
  CommonTableTwoComponent.prototype.addSelectedValues = function(data, index) {
    this.selectedRowIndex.push(index);
    this.selectedRows.push(data);
    this.selectedRowData.emit(data);
  };
  CommonTableTwoComponent.prototype.removeSelectedValues = function(data, index) {
    var _this = this;
    this.selectedRows = this.selectedRows.filter(function(item) {
      return item[_this.dataKey] !== data[_this.dataKey];
    });
    this.selectedRowIndex = this.selectedRowIndex.filter(function(i) {
      return i !== index;
    });
    this.selectedRowData.emit(data);
  };
  CommonTableTwoComponent.prototype.getDataToEdit = function(data) {
    this.dataToEdit.emit(data);
  };
  CommonTableTwoComponent.prototype.getDataToDelete = function(data) {
    this.dataToDelete.emit(data);
  };
  CommonTableTwoComponent.prototype.toggleSelectAll = function() {
    this.isSelectAll = !this.isSelectAll;
    if (this.isSelectAll) {
      this.selectedRows = this.tableData;
    }
    this.selectedRows = [];
  };
  CommonTableTwoComponent.ctorParameters = function() {
    return [{ type: PaginatorPubSubService }];
  };
  __decorate([Input()], CommonTableTwoComponent.prototype, 'tableData', void 0);
  __decorate([Input()], CommonTableTwoComponent.prototype, 'dataKey', void 0);
  __decorate([Input()], CommonTableTwoComponent.prototype, 'tableHeaders', void 0);
  __decorate([Input()], CommonTableTwoComponent.prototype, 'showEditOption', void 0);
  __decorate([Input()], CommonTableTwoComponent.prototype, 'showDeleteOption', void 0);
  __decorate([Input()], CommonTableTwoComponent.prototype, 'rowsPerPage', void 0);
  __decorate([Output()], CommonTableTwoComponent.prototype, 'selectedRowData', void 0);
  __decorate([Output()], CommonTableTwoComponent.prototype, 'dataToEdit', void 0);
  __decorate([Output()], CommonTableTwoComponent.prototype, 'dataToDelete', void 0);
  CommonTableTwoComponent = __decorate(
    [
      Component({
        selector: 'common-table-2',
        template:
          '<div style="box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2); transition: 0.3s;">\n  <table class="table-container">\n    <tr>\n      <th>\n        <div (click)="toggleSelectAll()" [class]="isSelectAll ? \'all-selected\' : \'\'" class="check-box cursor-pointer">\n          <i [class]="isSelectAll ? \'fa fa-check white-check\' : \'\'"></i>\n        </div>\n      </th>\n      <th *ngFor="let headers of tableHeaders" :key="headers.name">\n        <span (click)="handleSort(headers.prop)" class="cursor-pointer">\n          <i\n            *ngIf="selectedHeader === headers.prop; else showDefault"\n            [class]="\n              sortDirection === \'ASC\'\n                ? \'cursor-pointer fa fa-chevron-up\'\n                : sortDirection === \'DESC\'\n                ? \'cursor-pointer fa fa-chevron-down\'\n                : \'\'\n            "\n          ></i>\n          <ng-template #showDefault>\n            <i\n              *ngIf="headers.prop === tableHeaders[0].prop"\n              [class]="\n                sortDirection === \'ASC\'\n                  ? \'cursor-pointer fa fa-chevron-up\'\n                  : sortDirection === \'DESC\'\n                  ? \'cursor-pointer fa fa-chevron-down\'\n                  : \'\'\n              "\n            ></i>\n          </ng-template>\n          {{ headers.name }}\n        </span>\n      </th>\n      <th *ngIf="showEditOption"></th>\n      <th *ngIf="showDeleteOption"></th>\n    </tr>\n    <tr\n      (click)="getRowData(data, i)"\n      [class]="selectedRowIndex.includes(i) || isSelectAll ? \'active\' : \'\'"\n      *ngFor="let data of tableData; let i = index"\n      :key="dataKey"\n    >\n      <td>\n        <div\n          style="display: flex; align-items: center;"\n          [class]="isSelectAll || selectedRowIndex.includes(i) ? \'all-selected\' : \'\'"\n          class="check-box cursor-pointer"\n        >\n          <i [class]="isSelectAll || selectedRowIndex.includes(i) ? \'fa fa-check white-check\' : \'\'"></i>\n        </div>\n      </td>\n      <td *ngFor="let headers of tableHeaders" :key="headers.name">\n        {{ data[headers.prop] }}\n      </td>\n      <td *ngIf="showEditOption">\n        <div style="display: flex; justify-content: space-around;">\n          <i (click)="getDataToEdit(data)" class="cursor-pointer edit-icon fa fa-edit"></i>\n        </div>\n      </td>\n      <td *ngIf="showDeleteOption">\n        <div style="display: flex; justify-content: space-around;">\n          <i (click)="getDataToDelete(data)" class="cursor-pointer trash-icon fa fa-trash"></i>\n        </div>\n      </td>\n    </tr>\n  </table>\n\n  <common-paginator [options]="numberOfRowsToDisplay"></common-paginator>\n</div>\n',
        styles: [
          'button{background-color:Transparent;background-repeat:no-repeat;border:none;cursor:pointer;overflow:hidden;outline:0}.fa-chevron-down,.fa-chevron-up{color:rgba(0,0,0,.26)}.table-container{height:100%;width:100%;display:table;table-layout:fixed;border-collapse:collapse}.active{background-color:#007ad9}th{text-align:left;-webkit-transition:.3s;transition:.3s;padding:1rem;border-bottom:1px solid #dbd7d7}td{text-align:left;padding:1rem;-webkit-transition:.3s;transition:.3s;border-bottom:1px solid #dbd7d7;cursor:pointer}.white-check{color:#fff}.check-box{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-appearance:none;width:25px;height:25px;background:#fff;border-radius:5px;border:2px solid #555;margin-right:10px;margin-bottom:.2rem}.all-selected{-webkit-appearance:none;width:25px;height:25px;border-radius:5px;border:2px solid #555;margin-right:10px;margin-bottom:.2rem;background-color:#007ad9}.edit-icon{color:#00f}.trash-icon{color:red}footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;height:100%;width:100%}'
        ]
      })
    ],
    CommonTableTwoComponent
  );
  return CommonTableTwoComponent;
})();
export { CommonTableTwoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXRhYmxlLTIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbW1vbi10YWJsZS0yL2NvbW1vbi10YWJsZS0yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBT3BHO0lBaUJFLGlDQUFvQixnQkFBd0M7UUFBeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF3QjtRQVhuRCxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNmLG9CQUFlLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0Qsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsMEJBQXFCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIscUJBQWdCLEdBQWEsRUFBRSxDQUFDO0lBRStCLENBQUM7SUFFaEUsMENBQVEsR0FBUjtRQUNFLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDaEUsSUFBTSxh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QUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELGlEQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBeEZxQyxzQkFBc0I7O0lBaEJuRDtRQUFSLEtBQUssRUFBRTs4REFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7NERBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFO2lFQUEwQjtJQUN6QjtRQUFSLEtBQUssRUFBRTttRUFBeUI7SUFDeEI7UUFBUixLQUFLLEVBQUU7cUVBQTJCO0lBQzFCO1FBQVIsS0FBSyxFQUFFO2dFQUFpQjtJQUNmO1FBQVQsTUFBTSxFQUFFO29FQUF5RDtJQUN4RDtRQUFULE1BQU0sRUFBRTsrREFBb0Q7SUFDbkQ7UUFBVCxNQUFNLEVBQUU7aUVBQXNEO0lBVHBELHVCQUF1QjtRQUxuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLDBzRkFBOEM7O1NBRS9DLENBQUM7T0FDVyx1QkFBdUIsQ0EwR25DO0lBQUQsOEJBQUM7Q0FBQSxBQTFHRCxJQTBHQztTQTFHWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBU0MsIGhhbmRsZUFzY1NvcnQsIERFU0MsIGhhbmRsZURlc2NTb3J0LCBJSGVhZGVycyB9IGZyb20gJy4vdGFibGUtdXRpbHMnO1xuaW1wb3J0IHsgUGFnaW5hdG9yUHViU3ViU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3BhZ2luYXRvclB1YlN1YlNlcnZpY2UvcGFnaW5hdG9yUHViU3ViLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21tb24tdGFibGUtMicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tb24tdGFibGUtMi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbW1vbi10YWJsZS0yLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uVGFibGVUd29Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0YWJsZURhdGE6IGFueVtdO1xuICBASW5wdXQoKSBkYXRhS2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRhYmxlSGVhZGVyczogSUhlYWRlcnNbXTtcbiAgQElucHV0KCkgc2hvd0VkaXRPcHRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dEZWxldGVPcHRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJvd3NQZXJQYWdlID0gNTtcbiAgQE91dHB1dCgpIHNlbGVjdGVkUm93RGF0YTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkYXRhVG9FZGl0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRhdGFUb0RlbGV0ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHNvcnREaXJlY3Rpb24gPSAnQVNDJztcbiAgc2VsZWN0ZWRIZWFkZXIgPSBudWxsO1xuICBudW1iZXJPZlJvd3NUb0Rpc3BsYXkgPSBbNSwgMTAsIDE1LCAyMCwgMjVdO1xuICBpc1NlbGVjdEFsbCA9IGZhbHNlO1xuICBzZWxlY3RlZFJvd3M6IGFueVtdID0gW107XG4gIHNlbGVjdGVkUm93SW5kZXg6IG51bWJlcltdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdpbmF0b3JTZXJ2aWNlOiBQYWdpbmF0b3JQdWJTdWJTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IG9yaWdpbmFsU3RhdGUgPSB0aGlzLnRhYmxlRGF0YS5zbGljZSgwLCB0aGlzLnJvd3NQZXJQYWdlKTtcbiAgICBjb25zdCB0YWJsZURhdGFDb3B5ID0gdGhpcy50YWJsZURhdGE7XG4gICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLnRhYmxlRGF0YS5zbGljZSgwLCB0aGlzLnJvd3NQZXJQYWdlKTtcbiAgICB0aGlzLmhhbmRsZVBhZ2luYXRvclNlcnZpY2Uob3JpZ2luYWxTdGF0ZSwgdGFibGVEYXRhQ29weSk7XG4gIH1cblxuICBoYW5kbGVQYWdpbmF0b3JTZXJ2aWNlKG9yaWdpbmFsU3RhdGU6IGFueVtdLCB0YWJsZURhdGFDb3B5OiBhbnlbXSkge1xuICAgIHRoaXMucGFnaW5hdG9yU2VydmljZS5jaGFuZ2VTdGF0ZSh7XG4gICAgICByb3dzUGVyUGFnZTogdGhpcy5yb3dzUGVyUGFnZSxcbiAgICAgIHRhYmxlRGF0YTogdGhpcy50YWJsZURhdGEsXG4gICAgICBkYXRhOiB0YWJsZURhdGFDb3B5LFxuICAgICAgcGFnZTogMSxcbiAgICAgIHRhYmxlRGF0YU9yaWdpbmFsU3RhdGU6IG9yaWdpbmFsU3RhdGVcbiAgICB9KTtcbiAgICB0aGlzLnBhZ2luYXRvclNlcnZpY2Uuc3RhdGUuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgKHRoaXMucm93c1BlclBhZ2UgPSBkYXRhLnJvd3NQZXJQYWdlKSwgKHRoaXMudGFibGVEYXRhID0gZGF0YS50YWJsZURhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0U29ydERpcmVjdGlvbigpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnNvcnREaXJlY3Rpb24gPT09ICdBU0MnKSB7XG4gICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSAnREVTQyc7XG4gICAgICByZXR1cm4gdGhpcy5zb3J0RGlyZWN0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5zb3J0RGlyZWN0aW9uID09PSAnREVTQycpIHtcbiAgICAgIHRoaXMuc29ydERpcmVjdGlvbiA9ICdBU0MnO1xuICAgICAgcmV0dXJuIHRoaXMuc29ydERpcmVjdGlvbjtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVTb3J0KGhlYWRlcjogc3RyaW5nKTogYW55W10ge1xuICAgIHRoaXMuc2V0U29ydERpcmVjdGlvbigpO1xuICAgIHRoaXMuc2VsZWN0ZWRIZWFkZXIgPSBoZWFkZXI7XG4gICAgc3dpdGNoICh0aGlzLnNvcnREaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgQVNDOlxuICAgICAgICByZXR1cm4gKHRoaXMudGFibGVEYXRhID0gaGFuZGxlQXNjU29ydCh0aGlzLnRhYmxlRGF0YSwgaGVhZGVyKSk7XG4gICAgICBjYXNlIERFU0M6XG4gICAgICAgIHJldHVybiAodGhpcy50YWJsZURhdGEgPSBoYW5kbGVEZXNjU29ydCh0aGlzLnRhYmxlRGF0YSwgaGVhZGVyKSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy50YWJsZURhdGE7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tJZlNlbGVjdGVkSXRlbXNBcmVJbkFycmF5KGRhdGE6IGFueSk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkUm93cy5maWx0ZXIoaXRlbSA9PiBpdGVtW3RoaXMuZGF0YUtleV0gPT09IGRhdGFbdGhpcy5kYXRhS2V5XSkubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICghKHRoaXMuc2VsZWN0ZWRSb3dzLmZpbHRlcihpdGVtID0+IGl0ZW1bdGhpcy5kYXRhS2V5XSA9PT0gZGF0YVt0aGlzLmRhdGFLZXldKS5sZW5ndGggPiAwKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGdldFJvd0RhdGEoZGF0YTogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuY2hlY2tJZlNlbGVjdGVkSXRlbXNBcmVJbkFycmF5KGRhdGEpKSB7XG4gICAgICB0aGlzLnJlbW92ZVNlbGVjdGVkVmFsdWVzKGRhdGEsIGluZGV4KTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmNoZWNrSWZTZWxlY3RlZEl0ZW1zQXJlSW5BcnJheShkYXRhKSkge1xuICAgICAgdGhpcy5hZGRTZWxlY3RlZFZhbHVlcyhkYXRhLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgYWRkU2VsZWN0ZWRWYWx1ZXMoZGF0YTogYW55LCBpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5zZWxlY3RlZFJvd0luZGV4LnB1c2goaW5kZXgpO1xuICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnB1c2goZGF0YSk7XG4gICAgdGhpcy5zZWxlY3RlZFJvd0RhdGEuZW1pdChkYXRhKTtcbiAgfVxuXG4gIHJlbW92ZVNlbGVjdGVkVmFsdWVzKGRhdGE6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRSb3dzID0gdGhpcy5zZWxlY3RlZFJvd3MuZmlsdGVyKGl0ZW0gPT4gaXRlbVt0aGlzLmRhdGFLZXldICE9PSBkYXRhW3RoaXMuZGF0YUtleV0pO1xuICAgIHRoaXMuc2VsZWN0ZWRSb3dJbmRleCA9IHRoaXMuc2VsZWN0ZWRSb3dJbmRleC5maWx0ZXIoaSA9PiBpICE9PSBpbmRleCk7XG4gICAgdGhpcy5zZWxlY3RlZFJvd0RhdGEuZW1pdChkYXRhKTtcbiAgfVxuXG4gIGdldERhdGFUb0VkaXQoZGF0YTogYW55KSB7XG4gICAgdGhpcy5kYXRhVG9FZGl0LmVtaXQoZGF0YSk7XG4gIH1cblxuICBnZXREYXRhVG9EZWxldGUoZGF0YTogYW55KSB7XG4gICAgdGhpcy5kYXRhVG9EZWxldGUuZW1pdChkYXRhKTtcbiAgfVxuXG4gIHRvZ2dsZVNlbGVjdEFsbCgpIHtcbiAgICB0aGlzLmlzU2VsZWN0QWxsID0gIXRoaXMuaXNTZWxlY3RBbGw7XG4gICAgaWYgKHRoaXMuaXNTZWxlY3RBbGwpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzID0gdGhpcy50YWJsZURhdGE7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRSb3dzID0gW107XG4gIH1cbn1cbiJdfQ==
