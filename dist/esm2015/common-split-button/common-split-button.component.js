import { __decorate } from 'tslib';
import { Component, Input } from '@angular/core';
let CommonSplitButtonComponent = class CommonSplitButtonComponent {
  constructor() {
    this.showIcon = true;
    this.icon = 'fa fa-times';
    this.buttonType = 'button';
    this.isListDisplayed = false;
  }
  toggleList() {
    this.isListDisplayed = !this.isListDisplayed;
  }
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
      template: `
    <div (click)="toggleList()" appCommonHoverDirective (closeList)="toggleList()">
      <div style="width: 'fit-content';">
        <i *ngIf="showIcon" [class]="icon" style="color: 'white'; position: 'relative'; left: '30px';"></i>
        <button [ngStyle]="{ 'background-color': backgroundColor }" [type]="buttonType">
          {{ buttonText }}
        </button>
        <i
          (click)="toggleList()"
          style="color: 'white'; position: 'relative'; right: '30px';"
          class="cursor-pointer fa fa-chevron-down"
        ></i>
        <ul *ngIf="isListDisplayed; else showNothing" class="list-container">
          <ng-container *ngFor="let item of listItems">
            <li class="list-disabled" *ngIf="item.disabled; else addClick">{{ item.label }}</li>
            <ng-template #addClick>
              <li (click)="item.command()" class="list">{{ item.label }}</li>
            </ng-template>
          </ng-container>
        </ul>
        <ng-template #showNothing></ng-template>
      </div>
    </div>
  `,
      styles: [
        'button{padding:.5rem 2rem;margin:.5rem;font-size:1rem;color:#fff;border:.1rem solid;border-radius:.5rem;text-transform:uppercase;-webkit-transition:.3s ease-out;transition:.3s ease-out;background-color:#00f}button:active,button:focus{outline:0}.divider{width:100%;height:100%}.list-container{position:absolute;width:15%;height:auto;background:#fff;left:30px;padding:0;margin:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s}.list{list-style:none;padding:.5rem;text-align:left}.list-disabled{color:gray;padding:.5rem;text-align:left;list-style:none}.list:hover{background-color:#dddD;cursor:pointer}.primary{border-color:var(--primary);color:var(--primary)}.primary:active,.primary:hover{background-color:var(--primary);color:#fff}.clear{border:none;color:#000}'
      ]
    })
  ],
  CommonSplitButtonComponent
);
export { CommonSplitButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNwbGl0LWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXNwbGl0LWJ1dHRvbi9jb21tb24tc3BsaXQtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFxQ2pELElBQWEsMEJBQTBCLEdBQXZDLE1BQWEsMEJBQTBCO0lBQXZDO1FBRVcsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNoQixTQUFJLEdBQUcsYUFBYSxDQUFDO1FBQ3JCLGVBQVUsR0FBRyxRQUFRLENBQUM7UUFHL0Isb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFLMUIsQ0FBQztJQUhDLFVBQVU7UUFDUixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUMvQyxDQUFDO0NBQ0YsQ0FBQTtBQVhVO0lBQVIsS0FBSyxFQUFFOzhEQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTs0REFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7d0RBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFOzhEQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTttRUFBeUI7QUFDeEI7SUFBUixLQUFLLEVBQUU7NkRBQW1DO0FBTmhDLDBCQUEwQjtJQTVCdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJUOztLQUVGLENBQUM7R0FDVywwQkFBMEIsQ0FZdEM7U0FaWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmludGVyZmFjZSBTcGxpdEJ1dHRvbkludGVyZmFjZSB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNvbW1hbmQ/OiAoKSA9PiB2b2lkO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIHJvdXRlckxpbms6IHN0cmluZ1tdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21tb24tc3BsaXQtYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IChjbGljayk9XCJ0b2dnbGVMaXN0KClcIiBhcHBDb21tb25Ib3ZlckRpcmVjdGl2ZSAoY2xvc2VMaXN0KT1cInRvZ2dsZUxpc3QoKVwiPlxuICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAnZml0LWNvbnRlbnQnO1wiPlxuICAgICAgICA8aSAqbmdJZj1cInNob3dJY29uXCIgW2NsYXNzXT1cImljb25cIiBzdHlsZT1cImNvbG9yOiAnd2hpdGUnOyBwb3NpdGlvbjogJ3JlbGF0aXZlJzsgbGVmdDogJzMwcHgnO1wiPjwvaT5cbiAgICAgICAgPGJ1dHRvbiBbbmdTdHlsZV09XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogYmFja2dyb3VuZENvbG9yIH1cIiBbdHlwZV09XCJidXR0b25UeXBlXCI+XG4gICAgICAgICAge3sgYnV0dG9uVGV4dCB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGlcbiAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlTGlzdCgpXCJcbiAgICAgICAgICBzdHlsZT1cImNvbG9yOiAnd2hpdGUnOyBwb3NpdGlvbjogJ3JlbGF0aXZlJzsgcmlnaHQ6ICczMHB4JztcIlxuICAgICAgICAgIGNsYXNzPVwiY3Vyc29yLXBvaW50ZXIgZmEgZmEtY2hldnJvbi1kb3duXCJcbiAgICAgICAgPjwvaT5cbiAgICAgICAgPHVsICpuZ0lmPVwiaXNMaXN0RGlzcGxheWVkOyBlbHNlIHNob3dOb3RoaW5nXCIgY2xhc3M9XCJsaXN0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbGlzdEl0ZW1zXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LWRpc2FibGVkXCIgKm5nSWY9XCJpdGVtLmRpc2FibGVkOyBlbHNlIGFkZENsaWNrXCI+e3sgaXRlbS5sYWJlbCB9fTwvbGk+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI2FkZENsaWNrPlxuICAgICAgICAgICAgICA8bGkgKGNsaWNrKT1cIml0ZW0uY29tbWFuZCgpXCIgY2xhc3M9XCJsaXN0XCI+e3sgaXRlbS5sYWJlbCB9fTwvbGk+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8bmctdGVtcGxhdGUgI3Nob3dOb3RoaW5nPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vY29tbW9uLXNwbGl0LWJ1dHRvbi5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uU3BsaXRCdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKSBidXR0b25UZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNob3dJY29uID0gdHJ1ZTtcbiAgQElucHV0KCkgaWNvbiA9ICdmYSBmYS10aW1lcyc7XG4gIEBJbnB1dCgpIGJ1dHRvblR5cGUgPSAnYnV0dG9uJztcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxpc3RJdGVtczogU3BsaXRCdXR0b25JbnRlcmZhY2VbXTtcbiAgaXNMaXN0RGlzcGxheWVkID0gZmFsc2U7XG5cbiAgdG9nZ2xlTGlzdCgpIHtcbiAgICB0aGlzLmlzTGlzdERpc3BsYXllZCA9ICF0aGlzLmlzTGlzdERpc3BsYXllZDtcbiAgfVxufVxuIl19
