import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let CommonModalComponent = class CommonModalComponent {
    constructor() {
        this.isModalOpen = false;
        this.headerText = 'Header Text';
        this.showHeader = true;
        this.showFooter = true;
        this.classProp = {};
        this.closeModal = new EventEmitter();
    }
    ngOnInit() { }
};
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
        template: `
    <div *ngIf="isModalOpen" [ngStyle]="classProp" class="modal-container">
      <div modal-inner-container>
        <div *ngIf="showHeader" class="modal-header">
          <div style="margin-left: 0.5rem;">{{ headerText }}</div>
          <div class="icon-container">
            <i (click)="closeModal.emit($event)" class="times-icon fa fa-times"></i>
          </div>
        </div>
      </div>
      <div class="modal-content">
        <ng-content select="div[role=content]"></ng-content>
      </div>
      <footer *ngIf="showFooter" class="modal-footer">
        <ng-content select="div[role=footer]"></ng-content>
      </footer>
    </div>
  `,
        styles: [".modal-container{position:absolute;top:30%;left:40%;box-shadow:0 8px 8px 8px rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;-webkit-transform:translate(-30%,-40%);transform:translate(-30%,-40%);z-index:999;box-sizing:border-box;overflow-y:scroll;height:30%;width:50%;background-color:#fff}.modal-inner-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%}.modal-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem;box-shadow:0 0 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s}.icon-container{display:-webkit-box;display:flex;justify-content:space-around;-webkit-box-align:center;align-items:center;height:100%;width:5%}.times-icon{color:red;cursor:pointer}.expand-icon{font-size:1.2rem;font-weight:bolder;color:#000;cursor:pointer;margin-right:.5rem}.modal-content{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%;color:#000;box-shadow:0 0 8px 0 rgba(0,0,0,.2)}.modal-footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem}"]
    })
], CommonModalComponent);
export { CommonModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb21tb24tbW9kYWwvY29tbW9uLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXdCL0UsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFRL0I7UUFQUyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFVLEdBQUcsYUFBYSxDQUFDO1FBQzNCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZUFBVSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRWxELENBQUM7SUFFaEIsUUFBUSxLQUFJLENBQUM7Q0FDZCxDQUFBO0FBVlU7SUFBUixLQUFLLEVBQUU7eURBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFO3dEQUE0QjtBQUMzQjtJQUFSLEtBQUssRUFBRTt3REFBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7d0RBQW1CO0FBQ2xCO0lBQVIsS0FBSyxFQUFFO3VEQUFnQjtBQUNkO0lBQVQsTUFBTSxFQUFFO3dEQUF3RDtBQU50RCxvQkFBb0I7SUF0QmhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQ7O0tBRUYsQ0FBQztHQUNXLG9CQUFvQixDQVdoQztTQVhZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tbW9uLW1vZGFsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICpuZ0lmPVwiaXNNb2RhbE9wZW5cIiBbbmdTdHlsZV09XCJjbGFzc1Byb3BcIiBjbGFzcz1cIm1vZGFsLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBtb2RhbC1pbm5lci1jb250YWluZXI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJzaG93SGVhZGVyXCIgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLWxlZnQ6IDAuNXJlbTtcIj57eyBoZWFkZXJUZXh0IH19PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImljb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aSAoY2xpY2spPVwiY2xvc2VNb2RhbC5lbWl0KCRldmVudClcIiBjbGFzcz1cInRpbWVzLWljb24gZmEgZmEtdGltZXNcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJkaXZbcm9sZT1jb250ZW50XVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciAqbmdJZj1cInNob3dGb290ZXJcIiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJkaXZbcm9sZT1mb290ZXJdXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2NvbW1vbi1tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBpc01vZGFsT3BlbiA9IGZhbHNlO1xuICBASW5wdXQoKSBoZWFkZXJUZXh0ID0gJ0hlYWRlciBUZXh0JztcbiAgQElucHV0KCkgc2hvd0hlYWRlciA9IHRydWU7XG4gIEBJbnB1dCgpIHNob3dGb290ZXIgPSB0cnVlO1xuICBASW5wdXQoKSBjbGFzc1Byb3AgPSB7fTtcbiAgQE91dHB1dCgpIGNsb3NlTW9kYWw6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19