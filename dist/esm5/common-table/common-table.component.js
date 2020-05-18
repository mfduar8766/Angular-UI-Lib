import { __decorate } from 'tslib';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
var CommonTableComponent = /** @class */ (function() {
  function CommonTableComponent(confirmationService, messageService) {
    this.confirmationService = confirmationService;
    this.messageService = messageService;
    this.rowsperPage = 5;
    this.showPagination = true;
    this.rowsPerPageOptions = [5, 10, 25, 50, 100];
    this.editTableData = new EventEmitter();
    this.first = 0;
    this.rowsPerPageSelection = [
      { label: 5, value: 5 },
      { label: 10, value: 10 },
      { label: 25, value: 25 },
      { label: 100, value: 100 }
    ];
  }
  CommonTableComponent.prototype.ngOnInit = function() {
    if (this.tableData && this.tableData.length) {
      this.totalRecords = this.tableData.length;
    }
  };
  CommonTableComponent.prototype.nextPage = function() {
    this.first = this.first + this.rowsperPage;
  };
  CommonTableComponent.prototype.previousPage = function() {
    this.first = this.first - this.rowsperPage;
  };
  CommonTableComponent.prototype.reset = function() {
    this.first = 0;
  };
  CommonTableComponent.prototype.isLastPage = function() {
    return this.first === this.tableData.length - this.rowsperPage;
  };
  CommonTableComponent.prototype.isFirstPage = function() {
    return this.first === 0;
  };
  CommonTableComponent.prototype.setRowsPerPage = function(event) {
    this.rowsperPage = event.value;
  };
  CommonTableComponent.prototype.deleteData = function(data) {
    var _this = this;
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Record',
      icon: 'fa fa-info-circle',
      accept: function() {
        _this.tableData = _this.tableData.filter(function(dataValue) {
          return dataValue.agencyId !== data.agencyId;
        });
        _this.messageService.add({ severity: 'success', key: 'deleteSuccess', summary: 'Record deleted.' });
      },
      reject: function() {
        return;
      }
    });
  };
  CommonTableComponent.ctorParameters = function() {
    return [{ type: ConfirmationService }, { type: MessageService }];
  };
  __decorate([Input()], CommonTableComponent.prototype, 'dataKey', void 0);
  __decorate([Input()], CommonTableComponent.prototype, 'tableData', void 0);
  __decorate([Input()], CommonTableComponent.prototype, 'columns', void 0);
  __decorate([Input()], CommonTableComponent.prototype, 'rowsperPage', void 0);
  __decorate([Input()], CommonTableComponent.prototype, 'showPagination', void 0);
  __decorate([Input()], CommonTableComponent.prototype, 'rowsPerPageOptions', void 0);
  __decorate([Input()], CommonTableComponent.prototype, 'styleClass', void 0);
  __decorate([Output()], CommonTableComponent.prototype, 'editTableData', void 0);
  CommonTableComponent = __decorate(
    [
      Component({
        selector: 'common-table',
        template:
          '<ng-container *ngIf="tableData && tableData.length; else showErrorMessage">\n  <p-confirmDialog header="Confirmation" icon="pi pi-exclamation-triangle"></p-confirmDialog>\n  <p-toast key="deleteSuccess"></p-toast>\n  <p-table\n    #dt\n    [columns]="columns"\n    [value]="tableData"\n    [dataKey]="dataKey"\n    [responsive]="true"\n    [resizableColumns]="true"\n    [rowHover]="true"\n    [rows]="rowsperPage"\n    [scrollable]="true"\n    [style]="styleClass"\n    [rowHover]="true"\n    [totalRecords]="totalRecords"\n    [(first)]="first"\n    [paginator]="showPagination"\n    [(selection)]="selectedData"\n  >\n    <ng-template pTemplate="caption">\n      <div style="display: flex; justify-content: flex-start; height: 100%; width: 100%;">\n        <input\n          pInputText\n          type="text"\n          (input)="dt.filterGlobal($event.target.value, \'contains\')"\n          placeholder="Global Search"\n        />\n      </div>\n    </ng-template>\n    <ng-template pTemplate="header" let-columns>\n      <tr>\n        <th style="width: 30%;">\n          <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n        </th>\n        <th style="width: 100%; height: 100%;" *ngFor="let col of columns">\n          {{ col.header }}\n        </th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate="body" let-data let-columns="columns">\n      <tr>\n        <td style="width: 30%;">\n          <p-tableCheckbox [value]="data"></p-tableCheckbox>\n        </td>\n        <td style="width: 50%;">\n          <i (click)="editTableData.emit(data)" style="margin-right: 1rem;" class="cursor-pointer fa fa-pencil"></i>\n          <i (click)="deleteData(data)" class="fa fa-trash cursor-pointer"></i>\n        </td>\n        <td style="width: 100%; height: 100%;" *ngFor="let col of columns">\n          {{ data[col.field] }}\n        </td>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate="paginatorleft">\n      <div style="padding: 1rem;">\n        <button\n          type="button"\n          pButton\n          icon="fa fa-chevron-left"\n          (click)="previousPage()"\n          style="margin-right:.5em"\n          [disabled]="isFirstPage()"\n        ></button>\n        <button type="button" pButton icon="fa fa-refresh" (click)="reset()" style="margin-right:.5em"></button>\n        <button\n          type="button"\n          pButton\n          icon="fa fa-chevron-right"\n          (click)="nextPage()"\n          [disabled]="isLastPage()"\n        ></button>\n        <p-dropdown (onChange)="setRowsPerPage($event)" [options]="rowsPerPageSelection"></p-dropdown>\n      </div>\n    </ng-template>\n  </p-table>\n</ng-container>\n<ng-template #showErrorMessage>No data available.</ng-template>\n',
        styles: ['.tableStyleClass{height:100%;width:100%;border:1px solid #000}']
      })
    ],
    CommonTableComponent
  );
  return CommonTableComponent;
})();
export { CommonTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb21tb24tdGFibGUvY29tbW9uLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU83QztJQW9CRSw4QkFBb0IsbUJBQXdDLEVBQVUsY0FBOEI7UUFBaEYsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWhCM0YsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsdUJBQWtCLEdBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFbkQsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUloRSxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YseUJBQW9CLEdBQUc7WUFDckIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDdEIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDeEIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDeEIsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7U0FDM0IsQ0FBQztJQUVxRyxDQUFDO0lBRXhHLHVDQUFRLEdBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDN0MsQ0FBQztJQUVELDJDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM3QyxDQUFDO0lBRUQsb0NBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRCx5Q0FBVSxHQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDakUsQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCw2Q0FBYyxHQUFkLFVBQWUsS0FBSztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVELHlDQUFVLEdBQVYsVUFBVyxJQUFJO1FBQWYsaUJBYUM7UUFaQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDO1lBQy9CLE9BQU8sRUFBRSxvQ0FBb0M7WUFDN0MsTUFBTSxFQUFFLGVBQWU7WUFDdkIsSUFBSSxFQUFFLG1CQUFtQjtZQUN6QixNQUFNLEVBQUU7Z0JBQ04sS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLFNBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFFBQVEsRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDO2dCQUMxRixLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO1lBQ3JHLENBQUM7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sT0FBTztZQUNULENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkE3Q3dDLG1CQUFtQjtnQkFBMEIsY0FBYzs7SUFuQjNGO1FBQVIsS0FBSyxFQUFFO3lEQUFpQjtJQUNoQjtRQUFSLEtBQUssRUFBRTsyREFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7eURBQWdCO0lBQ2Y7UUFBUixLQUFLLEVBQUU7NkRBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFO2dFQUF1QjtJQUN0QjtRQUFSLEtBQUssRUFBRTtvRUFBcUQ7SUFDcEQ7UUFBUixLQUFLLEVBQUU7NERBQW9CO0lBQ2xCO1FBQVQsTUFBTSxFQUFFOytEQUF1RDtJQVJyRCxvQkFBb0I7UUFMaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIseXlGQUE0Qzs7U0FFN0MsQ0FBQztPQUNXLG9CQUFvQixDQWtFaEM7SUFBRCwyQkFBQztDQUFBLEFBbEVELElBa0VDO1NBbEVZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpcm1hdGlvblNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJ3ByaW1lbmcvYXBpJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tbW9uLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbW1vbi10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbW1vbi10YWJsZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vblRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF0YUtleTogc3RyaW5nO1xuICBASW5wdXQoKSB0YWJsZURhdGE6IGFueVtdO1xuICBASW5wdXQoKSBjb2x1bW5zOiBhbnlbXTtcbiAgQElucHV0KCkgcm93c3BlclBhZ2UgPSA1O1xuICBASW5wdXQoKSBzaG93UGFnaW5hdGlvbiA9IHRydWU7XG4gIEBJbnB1dCgpIHJvd3NQZXJQYWdlT3B0aW9uczogbnVtYmVyW10gPSBbNSwgMTAsIDI1LCA1MCwgMTAwXTtcbiAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuICBAT3V0cHV0KCkgZWRpdFRhYmxlRGF0YTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHNob3dEZWxldGVNZXNzYWdlOiBib29sZWFuO1xuICBzZWxlY3RlZERhdGE6IGFueVtdO1xuICB0b3RhbFJlY29yZHM6IG51bWJlcjtcbiAgZmlyc3QgPSAwO1xuICByb3dzUGVyUGFnZVNlbGVjdGlvbiA9IFtcbiAgICB7IGxhYmVsOiA1LCB2YWx1ZTogNSB9LFxuICAgIHsgbGFiZWw6IDEwLCB2YWx1ZTogMTAgfSxcbiAgICB7IGxhYmVsOiAyNSwgdmFsdWU6IDI1IH0sXG4gICAgeyBsYWJlbDogMTAwLCB2YWx1ZTogMTAwIH1cbiAgXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRhYmxlRGF0YSAmJiB0aGlzLnRhYmxlRGF0YS5sZW5ndGgpIHtcbiAgICAgIHRoaXMudG90YWxSZWNvcmRzID0gdGhpcy50YWJsZURhdGEubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIG5leHRQYWdlKCkge1xuICAgIHRoaXMuZmlyc3QgPSB0aGlzLmZpcnN0ICsgdGhpcy5yb3dzcGVyUGFnZTtcbiAgfVxuXG4gIHByZXZpb3VzUGFnZSgpIHtcbiAgICB0aGlzLmZpcnN0ID0gdGhpcy5maXJzdCAtIHRoaXMucm93c3BlclBhZ2U7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLmZpcnN0ID0gMDtcbiAgfVxuXG4gIGlzTGFzdFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3QgPT09IHRoaXMudGFibGVEYXRhLmxlbmd0aCAtIHRoaXMucm93c3BlclBhZ2U7XG4gIH1cblxuICBpc0ZpcnN0UGFnZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdCA9PT0gMDtcbiAgfVxuXG4gIHNldFJvd3NQZXJQYWdlKGV2ZW50KSB7XG4gICAgdGhpcy5yb3dzcGVyUGFnZSA9IGV2ZW50LnZhbHVlO1xuICB9XG5cbiAgZGVsZXRlRGF0YShkYXRhKSB7XG4gICAgdGhpcy5jb25maXJtYXRpb25TZXJ2aWNlLmNvbmZpcm0oe1xuICAgICAgbWVzc2FnZTogJ0RvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJlY29yZD8nLFxuICAgICAgaGVhZGVyOiAnRGVsZXRlIFJlY29yZCcsXG4gICAgICBpY29uOiAnZmEgZmEtaW5mby1jaXJjbGUnLFxuICAgICAgYWNjZXB0OiAoKSA9PiB7XG4gICAgICAgIHRoaXMudGFibGVEYXRhID0gdGhpcy50YWJsZURhdGEuZmlsdGVyKGRhdGFWYWx1ZSA9PiBkYXRhVmFsdWUuYWdlbmN5SWQgIT09IGRhdGEuYWdlbmN5SWQpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZCh7IHNldmVyaXR5OiAnc3VjY2VzcycsIGtleTogJ2RlbGV0ZVN1Y2Nlc3MnLCBzdW1tYXJ5OiAnUmVjb3JkIGRlbGV0ZWQuJyB9KTtcbiAgICAgIH0sXG4gICAgICByZWplY3Q6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXX0=
