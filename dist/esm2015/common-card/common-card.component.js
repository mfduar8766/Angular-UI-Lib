import { __decorate } from 'tslib';
import { Component, Input } from '@angular/core';
let CommonCardComponent = class CommonCardComponent {
  constructor() {
    this.heightWidth = '';
    this.headerStyles = '';
  }
  ngOnInit() {}
};
__decorate([Input()], CommonCardComponent.prototype, 'showHeader', void 0);
__decorate([Input()], CommonCardComponent.prototype, 'showFooter', void 0);
__decorate([Input()], CommonCardComponent.prototype, 'heightWidth', void 0);
__decorate([Input()], CommonCardComponent.prototype, 'headerStyles', void 0);
CommonCardComponent = __decorate(
  [
    Component({
      selector: 'common-card',
      template: `
    <div [ngStyle]="heightWidth" class="card-container height-width">
      <div class="card">
        <div [ngStyle]="headerStyles" *ngIf="showHeader" class="card-header">
          <ng-content select="div[role=header]"></ng-content>
        </div>
        <div class="card-body height-width">
          <ng-content></ng-content>
        </div>
        <div class="card-footer" *ngIf="showFooter">
          <ng-content select="div[role=footer]"></ng-content>
        </div>
      </div>
    </div>
  `,
      styles: [
        '.card-container{height:50%;width:50%;padding:0;margin:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;overflow:hidden;box-sizing:border-box}.card-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:100%;box-sizing:border-box;overflow:hidden;box-shadow:0 0 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s}.card-body{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%;overflow:hidden;box-sizing:border-box;margin:.5rem 0;word-wrap:break-word}.card-footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:100%;overflow:hidden;box-sizing:border-box}'
      ]
    })
  ],
  CommonCardComponent
);
export { CommonCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbW1vbi1jYXJkL2NvbW1vbi1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxQnpELElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBTTlCO1FBSFMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFFWixDQUFDO0lBRWhCLFFBQVEsS0FBSSxDQUFDO0NBQ2QsQ0FBQTtBQVJVO0lBQVIsS0FBSyxFQUFFO3VEQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTt1REFBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7d0RBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFO3lEQUFtQjtBQUpoQixtQkFBbUI7SUFuQi9CLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7R0FjVDs7S0FFRixDQUFDO0dBQ1csbUJBQW1CLENBUy9CO1NBVFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbW1vbi1jYXJkJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtuZ1N0eWxlXT1cImhlaWdodFdpZHRoXCIgY2xhc3M9XCJjYXJkLWNvbnRhaW5lciBoZWlnaHQtd2lkdGhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgIDxkaXYgW25nU3R5bGVdPVwiaGVhZGVyU3R5bGVzXCIgKm5nSWY9XCJzaG93SGVhZGVyXCIgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImRpdltyb2xlPWhlYWRlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5IGhlaWdodC13aWR0aFwiPlxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiICpuZ0lmPVwic2hvd0Zvb3RlclwiPlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImRpdltyb2xlPWZvb3Rlcl1cIj48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2NvbW1vbi1jYXJkLWNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNob3dIZWFkZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dGb290ZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhlaWdodFdpZHRoID0gJyc7XG4gIEBJbnB1dCgpIGhlYWRlclN0eWxlcyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=
