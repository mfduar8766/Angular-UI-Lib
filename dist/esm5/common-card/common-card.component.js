import { __decorate } from 'tslib';
import { Component, Input } from '@angular/core';
var CommonCardComponent = /** @class */ (function() {
  function CommonCardComponent() {
    this.heightWidth = '';
    this.headerStyles = '';
  }
  CommonCardComponent.prototype.ngOnInit = function() {};
  __decorate([Input()], CommonCardComponent.prototype, 'showHeader', void 0);
  __decorate([Input()], CommonCardComponent.prototype, 'showFooter', void 0);
  __decorate([Input()], CommonCardComponent.prototype, 'heightWidth', void 0);
  __decorate([Input()], CommonCardComponent.prototype, 'headerStyles', void 0);
  CommonCardComponent = __decorate(
    [
      Component({
        selector: 'common-card',
        template:
          '\n    <div [ngStyle]="heightWidth" class="card-container height-width">\n      <div class="card">\n        <div [ngStyle]="headerStyles" *ngIf="showHeader" class="card-header">\n          <ng-content select="div[role=header]"></ng-content>\n        </div>\n        <div class="card-body height-width">\n          <ng-content></ng-content>\n        </div>\n        <div class="card-footer" *ngIf="showFooter">\n          <ng-content select="div[role=footer]"></ng-content>\n        </div>\n      </div>\n    </div>\n  ',
        styles: [
          '.card-container{height:50%;width:50%;padding:0;margin:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;overflow:hidden;box-sizing:border-box}.card-header{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:100%;box-sizing:border-box;overflow:hidden;box-shadow:0 0 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s}.card-body{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:100%;width:100%;overflow:hidden;box-sizing:border-box;margin:.5rem 0;word-wrap:break-word}.card-footer{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;-webkit-box-align:center;align-items:center;width:100%;height:100%;overflow:hidden;box-sizing:border-box}'
        ]
      })
    ],
    CommonCardComponent
  );
  return CommonCardComponent;
})();
export { CommonCardComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbW1vbi1jYXJkL2NvbW1vbi1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxQnpEO0lBTUU7UUFIUyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztJQUVaLENBQUM7SUFFaEIsc0NBQVEsR0FBUixjQUFZLENBQUM7SUFQSjtRQUFSLEtBQUssRUFBRTsyREFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7MkRBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFOzREQUFrQjtJQUNqQjtRQUFSLEtBQUssRUFBRTs2REFBbUI7SUFKaEIsbUJBQW1CO1FBbkIvQixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsNmhCQWNUOztTQUVGLENBQUM7T0FDVyxtQkFBbUIsQ0FTL0I7SUFBRCwwQkFBQztDQUFBLEFBVEQsSUFTQztTQVRZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21tb24tY2FyZCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbbmdTdHlsZV09XCJoZWlnaHRXaWR0aFwiIGNsYXNzPVwiY2FyZC1jb250YWluZXIgaGVpZ2h0LXdpZHRoXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IFtuZ1N0eWxlXT1cImhlYWRlclN0eWxlc1wiICpuZ0lmPVwic2hvd0hlYWRlclwiIGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJkaXZbcm9sZT1oZWFkZXJdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keSBoZWlnaHQtd2lkdGhcIj5cbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXJcIiAqbmdJZj1cInNob3dGb290ZXJcIj5cbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJkaXZbcm9sZT1mb290ZXJdXCI+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9jb21tb24tY2FyZC1jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbkNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzaG93SGVhZGVyOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93Rm9vdGVyOiBib29sZWFuO1xuICBASW5wdXQoKSBoZWlnaHRXaWR0aCA9ICcnO1xuICBASW5wdXQoKSBoZWFkZXJTdHlsZXMgPSAnJztcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19
