import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var CommonModalComponent = /** @class */ (function () {
    function CommonModalComponent() {
        this.isModalOpen = false;
        this.headerText = 'Header Text';
        this.showHeader = true;
        this.showFooter = true;
        this.classProp = {};
        this.closeModal = new EventEmitter();
    }
    CommonModalComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input()
    ], CommonModalComponent.prototype, "isModalOpen", void 0);
    __decorate([
        Input()
    ], CommonModalComponent.prototype, "headerText", void 0);
    __decorate([
        Input()
    ], CommonModalComponent.prototype, "showHeader", void 0);
    __decorate([
        Input()
    ], CommonModalComponent.prototype, "showFooter", void 0);
    __decorate([
        Input()
    ], CommonModalComponent.prototype, "classProp", void 0);
    __decorate([
        Output()
    ], CommonModalComponent.prototype, "closeModal", void 0);
    CommonModalComponent = __decorate([
        Component({
            selector: 'common-modal',
            template: "\n    <div *ngIf=\"isModalOpen\" [ngStyle]=\"classProp\" class=\"modal-container\">\n      <div modal-inner-container>\n        <div *ngIf=\"showHeader\" class=\"modal-header\">\n          <div style=\"margin-left: 0.5rem;\">{{ headerText }}</div>\n          <div class=\"icon-container\">\n            <i (click)=\"closeModal.emit($event)\" class=\"times-icon fa fa-times\"></i>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-content\">\n        <ng-content select=\"div[role=content]\"></ng-content>\n      </div>\n      <footer *ngIf=\"showFooter\" class=\"modal-footer\">\n        <ng-content select=\"div[role=footer]\"></ng-content>\n      </footer>\n    </div>\n  ",
            styles: [".modal-container{position:absolute;top:30%;left:40%;box-shadow:0 8px 8px 8px rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;-webkit-transform:translate(-30%,-40%);transform:translate(-30%,-40%);z-index:999;box-sizing:border-box;overflow-y:scroll;height:30%;width:50%;background-color:#fff}.modal-inner-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%}.modal-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem;box-shadow:0 0 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s}.icon-container{display:-webkit-box;display:flex;justify-content:space-around;-webkit-box-align:center;align-items:center;height:100%;width:5%}.times-icon{color:red;cursor:pointer}.expand-icon{font-size:1.2rem;font-weight:bolder;color:#000;cursor:pointer;margin-right:.5rem}.modal-content{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%;color:#000;box-shadow:0 0 8px 0 rgba(0,0,0,.2)}.modal-footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem}"]
        })
    ], CommonModalComponent);
    return CommonModalComponent;
}());
export { CommonModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb21tb24tbW9kYWwvY29tbW9uLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXdCL0U7SUFRRTtRQVBTLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxhQUFhLENBQUM7UUFDM0IsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZCxlQUFVLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFbEQsQ0FBQztJQUVoQix1Q0FBUSxHQUFSLGNBQVksQ0FBQztJQVRKO1FBQVIsS0FBSyxFQUFFOzZEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTs0REFBNEI7SUFDM0I7UUFBUixLQUFLLEVBQUU7NERBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFOzREQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTsyREFBZ0I7SUFDZDtRQUFULE1BQU0sRUFBRTs0REFBd0Q7SUFOdEQsb0JBQW9CO1FBdEJoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsNHJCQWlCVDs7U0FFRixDQUFDO09BQ1csb0JBQW9CLENBV2hDO0lBQUQsMkJBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbW1vbi1tb2RhbCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAqbmdJZj1cImlzTW9kYWxPcGVuXCIgW25nU3R5bGVdPVwiY2xhc3NQcm9wXCIgY2xhc3M9XCJtb2RhbC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgbW9kYWwtaW5uZXItY29udGFpbmVyPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwic2hvd0hlYWRlclwiIGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAwLjVyZW07XCI+e3sgaGVhZGVyVGV4dCB9fTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpY29uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGkgKGNsaWNrKT1cImNsb3NlTW9kYWwuZW1pdCgkZXZlbnQpXCIgY2xhc3M9XCJ0aW1lcy1pY29uIGZhIGZhLXRpbWVzXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZGl2W3JvbGU9Y29udGVudF1cIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXIgKm5nSWY9XCJzaG93Rm9vdGVyXCIgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZGl2W3JvbGU9Zm9vdGVyXVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9jb21tb24tbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbk1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgaXNNb2RhbE9wZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaGVhZGVyVGV4dCA9ICdIZWFkZXIgVGV4dCc7XG4gIEBJbnB1dCgpIHNob3dIZWFkZXIgPSB0cnVlO1xuICBASW5wdXQoKSBzaG93Rm9vdGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgY2xhc3NQcm9wID0ge307XG4gIEBPdXRwdXQoKSBjbG9zZU1vZGFsOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==