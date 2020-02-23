import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let CommonTableComponent = class CommonTableComponent {
    constructor() {
        this.rowsperPage = 5;
        this.showPagination = true;
        this.rowsPerPageOptions = [5, 10, 25, 50, 100];
    }
    ngOnInit() { }
};
__decorate([
    Input()
], CommonTableComponent.prototype, "tableData", void 0);
__decorate([
    Input()
], CommonTableComponent.prototype, "columns", void 0);
__decorate([
    Input()
], CommonTableComponent.prototype, "rowsperPage", void 0);
__decorate([
    Input()
], CommonTableComponent.prototype, "showPagination", void 0);
__decorate([
    Input()
], CommonTableComponent.prototype, "rowsPerPageOptions", void 0);
CommonTableComponent = __decorate([
    Component({
        selector: 'common-table',
        template: "<p-table\n  *ngIf=\"tableData && tableData.length\"\n  [columns]=\"columns\"\n  [value]=\"tableData\"\n  dataKey=\"agencyId\"\n  [responsive]=\"true\"\n  [resizableColumns]=\"true\"\n  [rowHover]=\"true\"\n  [rows]=\"rowsperPage\"\n  [scrollable]=\"true\"\n>\n  <ng-template pTemplate=\"header\" let-columns>\n    <tr>\n      <th *ngFor=\"let col of columns\">\n        {{ col.header }}\n      </th>\n    </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-data let-columns=\"columns\">\n    <tr>\n      <td *ngFor=\"let col of columns\">\n        {{ data[col.field] }}\n      </td>\n    </tr>\n  </ng-template>\n</p-table>\n",
        styles: [".tableStyleClass{height:100%;width:100%;border:1px solid #000}"]
    })
], CommonTableComponent);
export { CommonTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb21tb24tdGFibGUvY29tbW9uLXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFPL0I7UUFKUyxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixtQkFBYyxHQUFHLElBQUksQ0FBQztRQUN0Qix1QkFBa0IsR0FBYSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUU5QyxDQUFDO0lBRWhCLFFBQVEsS0FBVSxDQUFDO0NBQ3BCLENBQUE7QUFUVTtJQUFSLEtBQUssRUFBRTt1REFBVztBQUNWO0lBQVIsS0FBSyxFQUFFO3FEQUFTO0FBQ1I7SUFBUixLQUFLLEVBQUU7eURBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFOzREQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTtnRUFBcUQ7QUFMbEQsb0JBQW9CO0lBTGhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLHdvQkFBNEM7O0tBRTdDLENBQUM7R0FDVyxvQkFBb0IsQ0FVaEM7U0FWWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tbW9uLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbW1vbi10YWJsZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvbW1vbi10YWJsZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0YWJsZURhdGE7XG4gIEBJbnB1dCgpIGNvbHVtbnM7XG4gIEBJbnB1dCgpIHJvd3NwZXJQYWdlID0gNTtcbiAgQElucHV0KCkgc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xuICBASW5wdXQoKSByb3dzUGVyUGFnZU9wdGlvbnM6IG51bWJlcltdID0gWzUsIDEwLCAyNSwgNTAsIDEwMF07XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cbn1cbiJdfQ==