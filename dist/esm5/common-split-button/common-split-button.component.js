import { __decorate } from 'tslib';
import { Component, Input } from '@angular/core';
var CommonSplitButtonComponent = /** @class */ (function() {
  function CommonSplitButtonComponent() {
    this.showIcon = true;
    this.icon = 'fa fa-times';
    this.buttonType = 'button';
    this.isListDisplayed = false;
  }
  CommonSplitButtonComponent.prototype.toggleList = function() {
    this.isListDisplayed = !this.isListDisplayed;
  };
  __decorate([Input()], CommonSplitButtonComponent.prototype, 'buttonText', void 0);
  __decorate([Input()], CommonSplitButtonComponent.prototype, 'showIcon', void 0);
  __decorate([Input()], CommonSplitButtonComponent.prototype, 'icon', void 0);
  __decorate([Input()], CommonSplitButtonComponent.prototype, 'buttonType', void 0);
  __decorate([Input()], CommonSplitButtonComponent.prototype, 'backgroundColor', void 0);
  __decorate([Input()], CommonSplitButtonComponent.prototype, 'listItems', void 0);
  CommonSplitButtonComponent = __decorate(
    [
      Component({
        selector: 'common-split-button',
        template:
          '\n    <div (click)="toggleList()" appCommonHoverDirective (closeList)="toggleList()">\n      <div style="width: \'fit-content\';">\n        <i *ngIf="showIcon" [class]="icon" style="color: \'white\'; position: \'relative\'; left: \'30px\';"></i>\n        <button [ngStyle]="{ \'background-color\': backgroundColor }" [type]="buttonType">\n          {{ buttonText }}\n        </button>\n        <i\n          (click)="toggleList()"\n          style="color: \'white\'; position: \'relative\'; right: \'30px\';"\n          class="cursor-pointer fa fa-chevron-down"\n        ></i>\n        <ul *ngIf="isListDisplayed; else showNothing" class="list-container">\n          <ng-container *ngFor="let item of listItems">\n            <li class="list-disabled" *ngIf="item.disabled; else addClick">{{ item.label }}</li>\n            <ng-template #addClick>\n              <li (click)="item.command()" class="list">{{ item.label }}</li>\n            </ng-template>\n          </ng-container>\n        </ul>\n        <ng-template #showNothing></ng-template>\n      </div>\n    </div>\n  ',
        styles: [
          'button{padding:.5rem 2rem;margin:.5rem;font-size:1rem;color:#fff;border:.1rem solid;border-radius:.5rem;text-transform:uppercase;-webkit-transition:.3s ease-out;transition:.3s ease-out;background-color:#00f}button:active,button:focus{outline:0}.divider{width:100%;height:100%}.list-container{position:absolute;width:15%;height:auto;background:#fff;left:30px;padding:0;margin:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s}.list{list-style:none;padding:.5rem;text-align:left}.list-disabled{color:gray;padding:.5rem;text-align:left;list-style:none}.list:hover{background-color:#dddD;cursor:pointer}.primary{border-color:var(--primary);color:var(--primary)}.primary:active,.primary:hover{background-color:var(--primary);color:#fff}.clear{border:none;color:#000}'
        ]
      })
    ],
    CommonSplitButtonComponent
  );
  return CommonSplitButtonComponent;
})();
export { CommonSplitButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNwbGl0LWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXNwbGl0LWJ1dHRvbi9jb21tb24tc3BsaXQtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxQ2pEO0lBQUE7UUFFVyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLFNBQUksR0FBRyxhQUFhLENBQUM7UUFDckIsZUFBVSxHQUFHLFFBQVEsQ0FBQztRQUcvQixvQkFBZSxHQUFHLEtBQUssQ0FBQztJQUsxQixDQUFDO0lBSEMsK0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQy9DLENBQUM7SUFWUTtRQUFSLEtBQUssRUFBRTtrRUFBb0I7SUFDbkI7UUFBUixLQUFLLEVBQUU7Z0VBQWlCO0lBQ2hCO1FBQVIsS0FBSyxFQUFFOzREQUFzQjtJQUNyQjtRQUFSLEtBQUssRUFBRTtrRUFBdUI7SUFDdEI7UUFBUixLQUFLLEVBQUU7dUVBQXlCO0lBQ3hCO1FBQVIsS0FBSyxFQUFFO2lFQUFtQztJQU5oQywwQkFBMEI7UUE1QnRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsUUFBUSxFQUFFLDBrQ0F1QlQ7O1NBRUYsQ0FBQztPQUNXLDBCQUEwQixDQVl0QztJQUFELGlDQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbnRlcmZhY2UgU3BsaXRCdXR0b25JbnRlcmZhY2Uge1xuICBsYWJlbDogc3RyaW5nO1xuICBjb21tYW5kPzogKCkgPT4gdm9pZDtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICByb3V0ZXJMaW5rOiBzdHJpbmdbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tbW9uLXNwbGl0LWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAoY2xpY2spPVwidG9nZ2xlTGlzdCgpXCIgYXBwQ29tbW9uSG92ZXJEaXJlY3RpdmUgKGNsb3NlTGlzdCk9XCJ0b2dnbGVMaXN0KClcIj5cbiAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogJ2ZpdC1jb250ZW50JztcIj5cbiAgICAgICAgPGkgKm5nSWY9XCJzaG93SWNvblwiIFtjbGFzc109XCJpY29uXCIgc3R5bGU9XCJjb2xvcjogJ3doaXRlJzsgcG9zaXRpb246ICdyZWxhdGl2ZSc7IGxlZnQ6ICczMHB4JztcIj48L2k+XG4gICAgICAgIDxidXR0b24gW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZC1jb2xvcic6IGJhY2tncm91bmRDb2xvciB9XCIgW3R5cGVdPVwiYnV0dG9uVHlwZVwiPlxuICAgICAgICAgIHt7IGJ1dHRvblRleHQgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxpXG4gICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZUxpc3QoKVwiXG4gICAgICAgICAgc3R5bGU9XCJjb2xvcjogJ3doaXRlJzsgcG9zaXRpb246ICdyZWxhdGl2ZSc7IHJpZ2h0OiAnMzBweCc7XCJcbiAgICAgICAgICBjbGFzcz1cImN1cnNvci1wb2ludGVyIGZhIGZhLWNoZXZyb24tZG93blwiXG4gICAgICAgID48L2k+XG4gICAgICAgIDx1bCAqbmdJZj1cImlzTGlzdERpc3BsYXllZDsgZWxzZSBzaG93Tm90aGluZ1wiIGNsYXNzPVwibGlzdC1jb250YWluZXJcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIGxpc3RJdGVtc1wiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1kaXNhYmxlZFwiICpuZ0lmPVwiaXRlbS5kaXNhYmxlZDsgZWxzZSBhZGRDbGlja1wiPnt7IGl0ZW0ubGFiZWwgfX08L2xpPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNhZGRDbGljaz5cbiAgICAgICAgICAgICAgPGxpIChjbGljayk9XCJpdGVtLmNvbW1hbmQoKVwiIGNsYXNzPVwibGlzdFwiPnt7IGl0ZW0ubGFiZWwgfX08L2xpPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPG5nLXRlbXBsYXRlICNzaG93Tm90aGluZz48L25nLXRlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2NvbW1vbi1zcGxpdC1idXR0b24uc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vblNwbGl0QnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYnV0dG9uVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93SWNvbiA9IHRydWU7XG4gIEBJbnB1dCgpIGljb24gPSAnZmEgZmEtdGltZXMnO1xuICBASW5wdXQoKSBidXR0b25UeXBlID0gJ2J1dHRvbic7XG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBsaXN0SXRlbXM6IFNwbGl0QnV0dG9uSW50ZXJmYWNlW107XG4gIGlzTGlzdERpc3BsYXllZCA9IGZhbHNlO1xuXG4gIHRvZ2dsZUxpc3QoKSB7XG4gICAgdGhpcy5pc0xpc3REaXNwbGF5ZWQgPSAhdGhpcy5pc0xpc3REaXNwbGF5ZWQ7XG4gIH1cbn1cbiJdfQ==
