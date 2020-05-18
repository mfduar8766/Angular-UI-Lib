import { __decorate } from 'tslib';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
let CommonTableComponent = class CommonTableComponent {
  constructor(confirmationService, messageService) {
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
  ngOnInit() {
    if (this.tableData && this.tableData.length) {
      this.totalRecords = this.tableData.length;
    }
  }
  nextPage() {
    this.first = this.first + this.rowsperPage;
  }
  previousPage() {
    this.first = this.first - this.rowsperPage;
  }
  reset() {
    this.first = 0;
  }
  isLastPage() {
    return this.first === this.tableData.length - this.rowsperPage;
  }
  isFirstPage() {
    return this.first === 0;
  }
  setRowsPerPage(event) {
    this.rowsperPage = event.value;
  }
  deleteData(data) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Record',
      icon: 'fa fa-info-circle',
      accept: () => {
        this.tableData = this.tableData.filter(dataValue => dataValue.agencyId !== data.agencyId);
        this.messageService.add({ severity: 'success', key: 'deleteSuccess', summary: 'Record deleted.' });
      },
      reject: () => {
        return;
      }
    });
  }
};
CommonTableComponent.ctorParameters = () => [{ type: ConfirmationService }, { type: MessageService }];
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
export { CommonTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb21tb24tdGFibGUvY29tbW9uLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU83QyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQW9CL0IsWUFBb0IsbUJBQXdDLEVBQVUsY0FBOEI7UUFBaEYsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWhCM0YsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsdUJBQWtCLEdBQWEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFbkQsa0JBQWEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUloRSxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YseUJBQW9CLEdBQUc7WUFDckIsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDdEIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDeEIsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDeEIsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7U0FDM0IsQ0FBQztJQUVxRyxDQUFDO0lBRXhHLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDN0MsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM3QyxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDakUsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBSztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFJO1FBQ2IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztZQUMvQixPQUFPLEVBQUUsb0NBQW9DO1lBQzdDLE1BQU0sRUFBRSxlQUFlO1lBQ3ZCLElBQUksRUFBRSxtQkFBbUI7WUFDekIsTUFBTSxFQUFFLEdBQUcsRUFBRTtnQkFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFGLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFDckcsQ0FBQztZQUNELE1BQU0sRUFBRSxHQUFHLEVBQUU7Z0JBQ1gsT0FBTztZQUNULENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTs7WUE5QzBDLG1CQUFtQjtZQUEwQixjQUFjOztBQW5CM0Y7SUFBUixLQUFLLEVBQUU7cURBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFO3VEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTtxREFBZ0I7QUFDZjtJQUFSLEtBQUssRUFBRTt5REFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7NERBQXVCO0FBQ3RCO0lBQVIsS0FBSyxFQUFFO2dFQUFxRDtBQUNwRDtJQUFSLEtBQUssRUFBRTt3REFBb0I7QUFDbEI7SUFBVCxNQUFNLEVBQUU7MkRBQXVEO0FBUnJELG9CQUFvQjtJQUxoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4Qix5eUZBQTRDOztLQUU3QyxDQUFDO0dBQ1csb0JBQW9CLENBa0VoQztTQWxFWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAncHJpbWVuZy9hcGknO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICdwcmltZW5nL2FwaSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbW1vbi10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tb24tdGFibGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21tb24tdGFibGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25UYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGFLZXk6IHN0cmluZztcbiAgQElucHV0KCkgdGFibGVEYXRhOiBhbnlbXTtcbiAgQElucHV0KCkgY29sdW1uczogYW55W107XG4gIEBJbnB1dCgpIHJvd3NwZXJQYWdlID0gNTtcbiAgQElucHV0KCkgc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xuICBASW5wdXQoKSByb3dzUGVyUGFnZU9wdGlvbnM6IG51bWJlcltdID0gWzUsIDEwLCAyNSwgNTAsIDEwMF07XG4gIEBJbnB1dCgpIHN0eWxlQ2xhc3M6IHN0cmluZztcbiAgQE91dHB1dCgpIGVkaXRUYWJsZURhdGE6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBzaG93RGVsZXRlTWVzc2FnZTogYm9vbGVhbjtcbiAgc2VsZWN0ZWREYXRhOiBhbnlbXTtcbiAgdG90YWxSZWNvcmRzOiBudW1iZXI7XG4gIGZpcnN0ID0gMDtcbiAgcm93c1BlclBhZ2VTZWxlY3Rpb24gPSBbXG4gICAgeyBsYWJlbDogNSwgdmFsdWU6IDUgfSxcbiAgICB7IGxhYmVsOiAxMCwgdmFsdWU6IDEwIH0sXG4gICAgeyBsYWJlbDogMjUsIHZhbHVlOiAyNSB9LFxuICAgIHsgbGFiZWw6IDEwMCwgdmFsdWU6IDEwMCB9XG4gIF07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maXJtYXRpb25TZXJ2aWNlOiBDb25maXJtYXRpb25TZXJ2aWNlLCBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YWJsZURhdGEgJiYgdGhpcy50YWJsZURhdGEubGVuZ3RoKSB7XG4gICAgICB0aGlzLnRvdGFsUmVjb3JkcyA9IHRoaXMudGFibGVEYXRhLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICBuZXh0UGFnZSgpIHtcbiAgICB0aGlzLmZpcnN0ID0gdGhpcy5maXJzdCArIHRoaXMucm93c3BlclBhZ2U7XG4gIH1cblxuICBwcmV2aW91c1BhZ2UoKSB7XG4gICAgdGhpcy5maXJzdCA9IHRoaXMuZmlyc3QgLSB0aGlzLnJvd3NwZXJQYWdlO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5maXJzdCA9IDA7XG4gIH1cblxuICBpc0xhc3RQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZpcnN0ID09PSB0aGlzLnRhYmxlRGF0YS5sZW5ndGggLSB0aGlzLnJvd3NwZXJQYWdlO1xuICB9XG5cbiAgaXNGaXJzdFBhZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmlyc3QgPT09IDA7XG4gIH1cblxuICBzZXRSb3dzUGVyUGFnZShldmVudCkge1xuICAgIHRoaXMucm93c3BlclBhZ2UgPSBldmVudC52YWx1ZTtcbiAgfVxuXG4gIGRlbGV0ZURhdGEoZGF0YSkge1xuICAgIHRoaXMuY29uZmlybWF0aW9uU2VydmljZS5jb25maXJtKHtcbiAgICAgIG1lc3NhZ2U6ICdEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyByZWNvcmQ/JyxcbiAgICAgIGhlYWRlcjogJ0RlbGV0ZSBSZWNvcmQnLFxuICAgICAgaWNvbjogJ2ZhIGZhLWluZm8tY2lyY2xlJyxcbiAgICAgIGFjY2VwdDogKCkgPT4ge1xuICAgICAgICB0aGlzLnRhYmxlRGF0YSA9IHRoaXMudGFibGVEYXRhLmZpbHRlcihkYXRhVmFsdWUgPT4gZGF0YVZhbHVlLmFnZW5jeUlkICE9PSBkYXRhLmFnZW5jeUlkKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoeyBzZXZlcml0eTogJ3N1Y2Nlc3MnLCBrZXk6ICdkZWxldGVTdWNjZXNzJywgc3VtbWFyeTogJ1JlY29yZCBkZWxldGVkLicgfSk7XG4gICAgICB9LFxuICAgICAgcmVqZWN0OiAoKSA9PiB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19
