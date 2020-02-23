import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
var CommonCardComponent = /** @class */ (function () {
    function CommonCardComponent() {
    }
    CommonCardComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input()
    ], CommonCardComponent.prototype, "showHeader", void 0);
    __decorate([
        Input()
    ], CommonCardComponent.prototype, "showFooter", void 0);
    CommonCardComponent = __decorate([
        Component({
            selector: 'common-card',
            template: "\n    <div class=\"card-container height-width\">\n      <div class=\"card\">\n        <div *ngIf=\"showHeader\" class=\"card-header\">\n          <ng-content select=\"div[role=header]\"></ng-content>\n        </div>\n        <div class=\"card-body height-width\">\n          <ng-content></ng-content>\n        </div>\n        <div class=\"card-footer\" *ngIf=\"showFooter\">\n          <ng-content select=\"div[role=footer]\"></ng-content>\n        </div>\n      </div>\n    </div>\n  ",
            styles: [".card-container{height:50%;width:50%;padding:1rem;box-shadow:8px 8px 8px 8px rgba(0,0,0,.2)}.card-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem}.card-body{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%}.card-footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem}"]
        })
    ], CommonCardComponent);
    return CommonCardComponent;
}());
export { CommonCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbW1vbi1jYXJkL2NvbW1vbi1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxQnpEO0lBSUU7SUFBZSxDQUFDO0lBRWhCLHNDQUFRLEdBQVIsY0FBWSxDQUFDO0lBTEo7UUFBUixLQUFLLEVBQUU7MkRBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFOzJEQUFxQjtJQUZsQixtQkFBbUI7UUFuQi9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSx3ZUFjVDs7U0FFRixDQUFDO09BQ1csbUJBQW1CLENBTy9CO0lBQUQsMEJBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tbW9uLWNhcmQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lciBoZWlnaHQtd2lkdGhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJzaG93SGVhZGVyXCIgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImRpdltyb2xlPWhlYWRlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGhlaWdodC13aWR0aFwiPlxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiICpuZ0lmPVwic2hvd0Zvb3RlclwiPlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImRpdltyb2xlPWZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2NvbW1vbi1jYXJkLWNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25DYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2hvd0hlYWRlcjogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvd0Zvb3RlcjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19