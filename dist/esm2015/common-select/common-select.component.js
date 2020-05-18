var CommonSelectComponent_1;
import { __decorate } from 'tslib';
import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
let CommonSelectComponent = (CommonSelectComponent_1 = class CommonSelectComponent {
  constructor() {
    this.selectedOption = '';
    this.selectedItem = new EventEmitter();
    this.isListDisplayed = false;
    this.disabled = false;
    this.onTouched = () => {};
    this.propagateChange = _ => {};
  }
  writeValue(value) {
    if (value !== undefined) {
      this.selectedOption = value;
    }
  }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  setOption(option) {
    this.selectedOption = option;
    this.selectedItem.emit(option);
    this.isListDisplayed = !this.isListDisplayed;
    this.propagateChange(this.selectedOption);
  }
  toggleList() {
    this.isListDisplayed = !this.isListDisplayed;
  }
});
__decorate([Input()], CommonSelectComponent.prototype, 'options', void 0);
__decorate([Input()], CommonSelectComponent.prototype, 'selectedOption', void 0);
__decorate([Output()], CommonSelectComponent.prototype, 'selectedItem', void 0);
CommonSelectComponent = CommonSelectComponent_1 = __decorate(
  [
    Component({
      selector: 'common-select',
      template:
        '<div class="select-container">\n  <div (click)="toggleList()" class="dropdown">\n    <div *ngIf="selectedOption; else showDefault">{{ selectedOption }}</div>\n    <ng-template #showDefault>\n      <div>Choose</div>\n    </ng-template>\n    <i style="color: gray; z-index: 99;" class="cursor-pointer fa fa-chevron-down"></i>\n  </div>\n  <div style="border: 1px solid rgb(224, 210, 210); width: 200px; border-width: thin;"></div>\n  <ul *ngIf="isListDisplayed" class="list-container">\n    <li (click)="setOption(option)" class="list" *ngFor="let option of options">\n      {{ option }}\n    </li>\n  </ul>\n</div>\n',
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => CommonSelectComponent_1),
          multi: true
        }
      ],
      styles: [
        '.select-container{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;width:200px;height:100%;box-sizing:border-box}.dropdown{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;padding:.5rem 2rem;margin:.5rem;font-size:1rem;color:gray;border:none;outline:0;text-transform:uppercase;-webkit-transition:.3s ease-out;transition:.3s ease-out;background-color:transparent;width:200px}.dropdown:hover{cursor:pointer}.dropdown:active,.dropdown:focus{outline:0}.list-container{position:absolute;background:#fff;padding:0;margin:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;overflow-y:scroll;height:200px;width:200px;z-index:99}.list{list-style:none;padding:.5rem;text-align:left;width:200px}.list-disabled{color:gray;text-align:left}.list:hover{background-color:#dddd;cursor:pointer}'
      ]
    })
  ],
  CommonSelectComponent
);
export { CommonSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXNlbGVjdC9jb21tb24tc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBd0IsTUFBTSxnQkFBZ0IsQ0FBQztBQWN6RSxJQUFhLHFCQUFxQiw2QkFBbEMsTUFBYSxxQkFBcUI7SUFBbEM7UUFFVyxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNuQixpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xFLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsY0FBUyxHQUFRLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztRQUUxQixvQkFBZSxHQUFHLENBQUMsQ0FBTSxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7SUE4Qm5DLENBQUM7SUE1QkMsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQU87UUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdCQUFnQixDQUFFLFVBQW1CO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM3QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQy9DLENBQUM7Q0FDRixDQUFBO0FBdENVO0lBQVIsS0FBSyxFQUFFO3NEQUE4QjtBQUM3QjtJQUFSLEtBQUssRUFBRTs2REFBcUI7QUFDbkI7SUFBVCxNQUFNLEVBQUU7MkRBQXlEO0FBSHZELHFCQUFxQjtJQVpqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6Qiwyb0JBQTZDO1FBRTdDLFNBQVMsRUFBRTtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQXFCLENBQUM7Z0JBQ3BELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjs7S0FDRixDQUFDO0dBQ1cscUJBQXFCLENBdUNqQztTQXZDWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21tb24tc2VsZWN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbW1vbi1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb21tb24tc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29tbW9uU2VsZWN0Q29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vblNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgQElucHV0KCkgb3B0aW9uczogc3RyaW5nW10gfCBudW1iZXJbXTtcbiAgQElucHV0KCkgc2VsZWN0ZWRPcHRpb24gPSAnJztcbiAgQE91dHB1dCgpIHNlbGVjdGVkSXRlbTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGlzTGlzdERpc3BsYXllZCA9IGZhbHNlO1xuICBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIG9uVG91Y2hlZDogYW55ID0gKCkgPT4ge307XG5cbiAgcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBzZXRPcHRpb24ob3B0aW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gb3B0aW9uO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtLmVtaXQob3B0aW9uKTtcbiAgICB0aGlzLmlzTGlzdERpc3BsYXllZCA9ICF0aGlzLmlzTGlzdERpc3BsYXllZDtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLnNlbGVjdGVkT3B0aW9uKTtcbiAgfVxuXG4gIHRvZ2dsZUxpc3QoKSB7XG4gICAgdGhpcy5pc0xpc3REaXNwbGF5ZWQgPSAhdGhpcy5pc0xpc3REaXNwbGF5ZWQ7XG4gIH1cbn1cbiJdfQ==
