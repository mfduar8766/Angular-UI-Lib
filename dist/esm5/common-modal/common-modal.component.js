import { __decorate } from 'tslib';
import { Component, Input, Output, EventEmitter } from '@angular/core';
var CommonModalComponent = /** @class */ (function() {
  function CommonModalComponent() {
    this.isModalOpen = false;
    this.headerText = 'Header Text';
    this.showHeader = true;
    this.showFooter = true;
    this.classProp = {};
    this.closeModal = new EventEmitter();
  }
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
        template:
          '\n    <div *ngIf="isModalOpen" [ngStyle]="classProp" class="modal-container">\n      <div modal-inner-container>\n        <div *ngIf="showHeader" class="modal-header">\n          <div style="margin-left: 0.5rem;">{{ headerText }}</div>\n          <div class="icon-container">\n            <i (click)="closeModal.emit($event)" class="times-icon fa fa-times"></i>\n          </div>\n        </div>\n      </div>\n      <div class="modal-content">\n        <ng-content select="div[role=content]"></ng-content>\n      </div>\n      <footer *ngIf="showFooter" class="modal-footer">\n        <ng-content select="div[role=footer]"></ng-content>\n      </footer>\n    </div>\n    <div [class.is-overlay]="isModalOpen"></div>\n  ',
        styles: [
          '.modal-container{position:absolute;top:30%;left:40%;box-shadow:0 8px 8px 8px rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;-webkit-transform:translate(-30%,-40%);transform:translate(-30%,-40%);z-index:3;box-sizing:border-box;overflow-y:scroll;height:50%;width:50%;background-color:#fff}.is-overlay{position:fixed;top:0;right:0;bottom:0;height:100vh;width:100vw;left:0;background-color:rgba(0,0,0,.6);z-index:2}.modal-inner-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%}.modal-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem;box-shadow:0 0 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s}.icon-container{display:-webkit-box;display:flex;justify-content:space-around;-webkit-box-align:center;align-items:center;height:100%;width:5%}.times-icon{color:red;cursor:pointer}.expand-icon{font-size:1.2rem;font-weight:bolder;color:#000;cursor:pointer;margin-right:.5rem}.modal-content{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%;color:#000;box-shadow:0 0 8px 0 rgba(0,0,0,.2)}.modal-footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:2.5rem}'
        ]
      })
    ],
    CommonModalComponent
  );
  return CommonModalComponent;
})();
export { CommonModalComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb21tb24tbW9kYWwvY29tbW9uLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQXlCdkU7SUFBQTtRQUNXLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxhQUFhLENBQUM7UUFDM0IsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZCxlQUFVLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUM7SUFDbkUsQ0FBQztJQU5VO1FBQVIsS0FBSyxFQUFFOzZEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTs0REFBNEI7SUFDM0I7UUFBUixLQUFLLEVBQUU7NERBQW1CO0lBQ2xCO1FBQVIsS0FBSyxFQUFFOzREQUFtQjtJQUNsQjtRQUFSLEtBQUssRUFBRTsyREFBZ0I7SUFDZDtRQUFULE1BQU0sRUFBRTs0REFBd0Q7SUFOdEQsb0JBQW9CO1FBdkJoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsZ3ZCQWtCVDs7U0FFRixDQUFDO09BQ1csb0JBQW9CLENBT2hDO0lBQUQsMkJBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21tb24tbW9kYWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKm5nSWY9XCJpc01vZGFsT3BlblwiIFtuZ1N0eWxlXT1cImNsYXNzUHJvcFwiIGNsYXNzPVwibW9kYWwtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IG1vZGFsLWlubmVyLWNvbnRhaW5lcj5cbiAgICAgICAgPGRpdiAqbmdJZj1cInNob3dIZWFkZXJcIiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tbGVmdDogMC41cmVtO1wiPnt7IGhlYWRlclRleHQgfX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpIChjbGljayk9XCJjbG9zZU1vZGFsLmVtaXQoJGV2ZW50KVwiIGNsYXNzPVwidGltZXMtaWNvbiBmYSBmYS10aW1lc1wiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImRpdltyb2xlPWNvbnRlbnRdXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgICA8Zm9vdGVyICpuZ0lmPVwic2hvd0Zvb3RlclwiIGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImRpdltyb2xlPWZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IFtjbGFzcy5pcy1vdmVybGF5XT1cImlzTW9kYWxPcGVuXCI+PC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2NvbW1vbi1tb2RhbC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbk1vZGFsQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXNNb2RhbE9wZW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaGVhZGVyVGV4dCA9ICdIZWFkZXIgVGV4dCc7XG4gIEBJbnB1dCgpIHNob3dIZWFkZXIgPSB0cnVlO1xuICBASW5wdXQoKSBzaG93Rm9vdGVyID0gdHJ1ZTtcbiAgQElucHV0KCkgY2xhc3NQcm9wID0ge307XG4gIEBPdXRwdXQoKSBjbG9zZU1vZGFsOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG59XG4iXX0=
