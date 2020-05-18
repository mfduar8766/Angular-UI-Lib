import { __decorate } from 'tslib';
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
};
__decorate([Input()], CommonModalComponent.prototype, 'isModalOpen', void 0);
__decorate([Input()], CommonModalComponent.prototype, 'headerText', void 0);
__decorate([Input()], CommonModalComponent.prototype, 'showHeader', void 0);
__decorate([Input()], CommonModalComponent.prototype, 'showFooter', void 0);
__decorate([Input()], CommonModalComponent.prototype, 'classProp', void 0);
__decorate([Output()], CommonModalComponent.prototype, 'closeModal', void 0);
CommonModalComponent = __decorate(
  [
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
    <div [class.is-overlay]="isModalOpen"></div>
  `,
      styles: [
        '.modal-container{position:absolute;top:30%;left:40%;box-shadow:0 8px 8px 8px rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;-webkit-transform:translate(-30%,-40%);transform:translate(-30%,-40%);z-index:3;box-sizing:border-box;overflow-y:scroll;height:50%;width:50%;background-color:#fff}.is-overlay{position:fixed;top:0;right:0;bottom:0;height:100vh;width:100vw;left:0;background-color:rgba(0,0,0,.6);z-index:2}.modal-inner-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%}.modal-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem;box-shadow:0 0 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s}.icon-container{display:-webkit-box;display:flex;justify-content:space-around;-webkit-box-align:center;align-items:center;height:100%;width:5%}.times-icon{color:red;cursor:pointer}.expand-icon{font-size:1.2rem;font-weight:bolder;color:#000;cursor:pointer;margin-right:.5rem}.modal-content{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%;color:#000;box-shadow:0 0 8px 0 rgba(0,0,0,.2)}.modal-footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem}'
      ]
    })
  ],
  CommonModalComponent
);
export { CommonModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb21tb24tbW9kYWwvY29tbW9uLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXlCdkUsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFBakM7UUFDVyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixlQUFVLEdBQUcsYUFBYSxDQUFDO1FBQzNCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2QsZUFBVSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ25FLENBQUM7Q0FBQSxDQUFBO0FBTlU7SUFBUixLQUFLLEVBQUU7eURBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFO3dEQUE0QjtBQUMzQjtJQUFSLEtBQUssRUFBRTt3REFBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7d0RBQW1CO0FBQ2xCO0lBQVIsS0FBSyxFQUFFO3VEQUFnQjtBQUNkO0lBQVQsTUFBTSxFQUFFO3dEQUF3RDtBQU50RCxvQkFBb0I7SUF2QmhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JUOztLQUVGLENBQUM7R0FDVyxvQkFBb0IsQ0FPaEM7U0FQWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21tb24tbW9kYWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJpc01vZGFsT3BlblwiIFtuZ1N0eWxlXT1cImNsYXNzUHJvcFwiIGNsYXNzPVwibW9kYWwtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IG1vZGFsLWlubmVyLWNvbnRhaW5lcj5cbiAgICAgICAgPGRpdiAqbmdJZj1cInNob3dIZWFkZXJcIiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tbGVmdDogMC41cmVtO1wiPnt7IGhlYWRlclRleHQgfX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpIChjbGljayk9XCJjbG9zZU1vZGFsLmVtaXQoJGV2ZW50KVwiIGNsYXNzPVwidGltZXMtaWNvbiBmYSBmYS10aW1lc1wiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImRpdltyb2xlPWNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyICpuZ0lmPVwic2hvd0Zvb3RlclwiIGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImRpdltyb2xlPWZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IFtjbGFzcy5pcy1vdmVybGF5XT1cImlzTW9kYWxPcGVuXCI+PC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2NvbW1vbi1tb2RhbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbk1vZGFsQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXNNb2RhbE9wZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaGVhZGVyVGV4dCA9ICdIZWFkZXIgVGV4dCc7XG4gIEBJbnB1dCgpIHNob3dIZWFkZXIgPSB0cnVlO1xuICBASW5wdXQoKSBzaG93Rm9vdGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgY2xhc3NQcm9wID0ge307XG4gIEBPdXRwdXQoKSBjbG9zZU1vZGFsOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iXX0=
