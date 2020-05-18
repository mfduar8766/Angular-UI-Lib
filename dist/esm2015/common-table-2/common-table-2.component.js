import { __decorate } from 'tslib';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ASC, handleAscSort, DESC, handleDescSort } from './table-utils';
import { PaginatorPubSubService } from '../services/paginatorPubSubService/paginatorPubSub.service';
let CommonTableTwoComponent = class CommonTableTwoComponent {
  constructor(paginatorService) {
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
  ngOnInit() {
    const originalState = this.tableData.slice(0, this.rowsPerPage);
    const tableDataCopy = this.tableData;
    this.tableData = this.tableData.slice(0, this.rowsPerPage);
    this.handlePaginatorService(originalState, tableDataCopy);
  }
  handlePaginatorService(originalState, tableDataCopy) {
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
  handleSort(header) {
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
  checkIfSelectedItemsAreInArray(data) {
    if (this.selectedRows.filter(item => item[this.dataKey] === data[this.dataKey]).length > 0) {
      return true;
    } else if (!(this.selectedRows.filter(item => item[this.dataKey] === data[this.dataKey]).length > 0)) {
      return false;
    }
  }
  getRowData(data, index) {
    if (this.checkIfSelectedItemsAreInArray(data)) {
      this.removeSelectedValues(data, index);
    } else if (!this.checkIfSelectedItemsAreInArray(data)) {
      this.addSelectedValues(data, index);
    }
  }
  addSelectedValues(data, index) {
    this.selectedRowIndex.push(index);
    this.selectedRows.push(data);
    this.selectedRowData.emit(data);
  }
  removeSelectedValues(data, index) {
    this.selectedRows = this.selectedRows.filter(item => item[this.dataKey] !== data[this.dataKey]);
    this.selectedRowIndex = this.selectedRowIndex.filter(i => i !== index);
    this.selectedRowData.emit(data);
  }
  getDataToEdit(data) {
    this.dataToEdit.emit(data);
  }
  getDataToDelete(data) {
    this.dataToDelete.emit(data);
  }
  toggleSelectAll() {
    this.isSelectAll = !this.isSelectAll;
    if (this.isSelectAll) {
      this.selectedRows = this.tableData;
    }
    this.selectedRows = [];
  }
};
CommonTableTwoComponent.ctorParameters = () => [{ type: PaginatorPubSubService }];
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
export { CommonTableTwoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXRhYmxlLTIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbW1vbi10YWJsZS0yL2NvbW1vbi10YWJsZS0yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBT3BHLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBaUJsQyxZQUFvQixnQkFBd0M7UUFBeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF3QjtRQVhuRCxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNmLG9CQUFlLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEQsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25ELGlCQUFZLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0Qsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsMEJBQXFCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUMsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsaUJBQVksR0FBVSxFQUFFLENBQUM7UUFDekIscUJBQWdCLEdBQWEsRUFBRSxDQUFDO0lBRStCLENBQUM7SUFFaEUsUUFBUTtRQUNOLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FB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SSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDcEM7UUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBQ0YsQ0FBQTs7WUF6RnVDLHNCQUFzQjs7QUFoQm5EO0lBQVIsS0FBSyxFQUFFOzBEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTt3REFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7NkRBQTBCO0FBQ3pCO0lBQVIsS0FBSyxFQUFFOytEQUF5QjtBQUN4QjtJQUFSLEtBQUssRUFBRTtpRUFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7NERBQWlCO0FBQ2Y7SUFBVCxNQUFNLEVBQUU7Z0VBQXlEO0FBQ3hEO0lBQVQsTUFBTSxFQUFFOzJEQUFvRDtBQUNuRDtJQUFULE1BQU0sRUFBRTs2REFBc0Q7QUFUcEQsdUJBQXVCO0lBTG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsMHNGQUE4Qzs7S0FFL0MsQ0FBQztHQUNXLHVCQUF1QixDQTBHbkM7U0ExR1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQVNDLCBoYW5kbGVBc2NTb3J0LCBERVNDLCBoYW5kbGVEZXNjU29ydCwgSUhlYWRlcnMgfSBmcm9tICcuL3RhYmxlLXV0aWxzJztcbmltcG9ydCB7IFBhZ2luYXRvclB1YlN1YlNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9wYWdpbmF0b3JQdWJTdWJTZXJ2aWNlL3BhZ2luYXRvclB1YlN1Yi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tbW9uLXRhYmxlLTInLFxuICB0ZW1wbGF0ZVVybDogJy4vY29tbW9uLXRhYmxlLTIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21tb24tdGFibGUtMi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vblRhYmxlVHdvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgdGFibGVEYXRhOiBhbnlbXTtcbiAgQElucHV0KCkgZGF0YUtleTogc3RyaW5nO1xuICBASW5wdXQoKSB0YWJsZUhlYWRlcnM6IElIZWFkZXJzW107XG4gIEBJbnB1dCgpIHNob3dFZGl0T3B0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93RGVsZXRlT3B0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKSByb3dzUGVyUGFnZSA9IDU7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZFJvd0RhdGE6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZGF0YVRvRWRpdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBkYXRhVG9EZWxldGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBzb3J0RGlyZWN0aW9uID0gJ0FTQyc7XG4gIHNlbGVjdGVkSGVhZGVyID0gbnVsbDtcbiAgbnVtYmVyT2ZSb3dzVG9EaXNwbGF5ID0gWzUsIDEwLCAxNSwgMjAsIDI1XTtcbiAgaXNTZWxlY3RBbGwgPSBmYWxzZTtcbiAgc2VsZWN0ZWRSb3dzOiBhbnlbXSA9IFtdO1xuICBzZWxlY3RlZFJvd0luZGV4OiBudW1iZXJbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnaW5hdG9yU2VydmljZTogUGFnaW5hdG9yUHViU3ViU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCBvcmlnaW5hbFN0YXRlID0gdGhpcy50YWJsZURhdGEuc2xpY2UoMCwgdGhpcy5yb3dzUGVyUGFnZSk7XG4gICAgY29uc3QgdGFibGVEYXRhQ29weSA9IHRoaXMudGFibGVEYXRhO1xuICAgIHRoaXMudGFibGVEYXRhID0gdGhpcy50YWJsZURhdGEuc2xpY2UoMCwgdGhpcy5yb3dzUGVyUGFnZSk7XG4gICAgdGhpcy5oYW5kbGVQYWdpbmF0b3JTZXJ2aWNlKG9yaWdpbmFsU3RhdGUsIHRhYmxlRGF0YUNvcHkpO1xuICB9XG5cbiAgaGFuZGxlUGFnaW5hdG9yU2VydmljZShvcmlnaW5hbFN0YXRlOiBhbnlbXSwgdGFibGVEYXRhQ29weTogYW55W10pIHtcbiAgICB0aGlzLnBhZ2luYXRvclNlcnZpY2UuY2hhbmdlU3RhdGUoe1xuICAgICAgcm93c1BlclBhZ2U6IHRoaXMucm93c1BlclBhZ2UsXG4gICAgICB0YWJsZURhdGE6IHRoaXMudGFibGVEYXRhLFxuICAgICAgZGF0YTogdGFibGVEYXRhQ29weSxcbiAgICAgIHBhZ2U6IDEsXG4gICAgICB0YWJsZURhdGFPcmlnaW5hbFN0YXRlOiBvcmlnaW5hbFN0YXRlXG4gICAgfSk7XG4gICAgdGhpcy5wYWdpbmF0b3JTZXJ2aWNlLnN0YXRlLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICh0aGlzLnJvd3NQZXJQYWdlID0gZGF0YS5yb3dzUGVyUGFnZSksICh0aGlzLnRhYmxlRGF0YSA9IGRhdGEudGFibGVEYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFNvcnREaXJlY3Rpb24oKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zb3J0RGlyZWN0aW9uID09PSAnQVNDJykge1xuICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gJ0RFU0MnO1xuICAgICAgcmV0dXJuIHRoaXMuc29ydERpcmVjdGlvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc29ydERpcmVjdGlvbiA9PT0gJ0RFU0MnKSB7XG4gICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSAnQVNDJztcbiAgICAgIHJldHVybiB0aGlzLnNvcnREaXJlY3Rpb247XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU29ydChoZWFkZXI6IHN0cmluZyk6IGFueVtdIHtcbiAgICB0aGlzLnNldFNvcnREaXJlY3Rpb24oKTtcbiAgICB0aGlzLnNlbGVjdGVkSGVhZGVyID0gaGVhZGVyO1xuICAgIHN3aXRjaCAodGhpcy5zb3J0RGlyZWN0aW9uKSB7XG4gICAgICBjYXNlIEFTQzpcbiAgICAgICAgcmV0dXJuICh0aGlzLnRhYmxlRGF0YSA9IGhhbmRsZUFzY1NvcnQodGhpcy50YWJsZURhdGEsIGhlYWRlcikpO1xuICAgICAgY2FzZSBERVNDOlxuICAgICAgICByZXR1cm4gKHRoaXMudGFibGVEYXRhID0gaGFuZGxlRGVzY1NvcnQodGhpcy50YWJsZURhdGEsIGhlYWRlcikpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGVEYXRhO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrSWZTZWxlY3RlZEl0ZW1zQXJlSW5BcnJheShkYXRhOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFJvd3MuZmlsdGVyKGl0ZW0gPT4gaXRlbVt0aGlzLmRhdGFLZXldID09PSBkYXRhW3RoaXMuZGF0YUtleV0pLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoISh0aGlzLnNlbGVjdGVkUm93cy5maWx0ZXIoaXRlbSA9PiBpdGVtW3RoaXMuZGF0YUtleV0gPT09IGRhdGFbdGhpcy5kYXRhS2V5XSkubGVuZ3RoID4gMCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBnZXRSb3dEYXRhKGRhdGE6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLmNoZWNrSWZTZWxlY3RlZEl0ZW1zQXJlSW5BcnJheShkYXRhKSkge1xuICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZFZhbHVlcyhkYXRhLCBpbmRleCk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5jaGVja0lmU2VsZWN0ZWRJdGVtc0FyZUluQXJyYXkoZGF0YSkpIHtcbiAgICAgIHRoaXMuYWRkU2VsZWN0ZWRWYWx1ZXMoZGF0YSwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFNlbGVjdGVkVmFsdWVzKGRhdGE6IGFueSwgaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRSb3dJbmRleC5wdXNoKGluZGV4KTtcbiAgICB0aGlzLnNlbGVjdGVkUm93cy5wdXNoKGRhdGEpO1xuICAgIHRoaXMuc2VsZWN0ZWRSb3dEYXRhLmVtaXQoZGF0YSk7XG4gIH1cblxuICByZW1vdmVTZWxlY3RlZFZhbHVlcyhkYXRhOiBhbnksIGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkUm93cyA9IHRoaXMuc2VsZWN0ZWRSb3dzLmZpbHRlcihpdGVtID0+IGl0ZW1bdGhpcy5kYXRhS2V5XSAhPT0gZGF0YVt0aGlzLmRhdGFLZXldKTtcbiAgICB0aGlzLnNlbGVjdGVkUm93SW5kZXggPSB0aGlzLnNlbGVjdGVkUm93SW5kZXguZmlsdGVyKGkgPT4gaSAhPT0gaW5kZXgpO1xuICAgIHRoaXMuc2VsZWN0ZWRSb3dEYXRhLmVtaXQoZGF0YSk7XG4gIH1cblxuICBnZXREYXRhVG9FZGl0KGRhdGE6IGFueSkge1xuICAgIHRoaXMuZGF0YVRvRWRpdC5lbWl0KGRhdGEpO1xuICB9XG5cbiAgZ2V0RGF0YVRvRGVsZXRlKGRhdGE6IGFueSkge1xuICAgIHRoaXMuZGF0YVRvRGVsZXRlLmVtaXQoZGF0YSk7XG4gIH1cblxuICB0b2dnbGVTZWxlY3RBbGwoKSB7XG4gICAgdGhpcy5pc1NlbGVjdEFsbCA9ICF0aGlzLmlzU2VsZWN0QWxsO1xuICAgIGlmICh0aGlzLmlzU2VsZWN0QWxsKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkUm93cyA9IHRoaXMudGFibGVEYXRhO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkUm93cyA9IFtdO1xuICB9XG59XG4iXX0=
