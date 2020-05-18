import { __decorate } from 'tslib';
import { Component, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var CommonSelectComponent = /** @class */ (function() {
  function CommonSelectComponent() {
    this.selectedOption = '';
    this.selectedItem = new EventEmitter();
    this.isListDisplayed = false;
    this.disabled = false;
    this.onTouched = function() {};
    this.propagateChange = function(_) {};
  }
  CommonSelectComponent_1 = CommonSelectComponent;
  CommonSelectComponent.prototype.writeValue = function(value) {
    if (value !== undefined) {
      this.selectedOption = value;
    }
  };
  CommonSelectComponent.prototype.registerOnChange = function(fn) {
    this.propagateChange = fn;
  };
  CommonSelectComponent.prototype.registerOnTouched = function(fn) {
    this.onTouched = fn;
  };
  CommonSelectComponent.prototype.setDisabledState = function(isDisabled) {
    this.disabled = isDisabled;
  };
  CommonSelectComponent.prototype.setOption = function(option) {
    this.selectedOption = option;
    this.selectedItem.emit(option);
    this.isListDisplayed = !this.isListDisplayed;
    this.propagateChange(this.selectedOption);
  };
  CommonSelectComponent.prototype.toggleList = function() {
    this.isListDisplayed = !this.isListDisplayed;
  };
  var CommonSelectComponent_1;
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
            useExisting: forwardRef(function() {
              return CommonSelectComponent_1;
            }),
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
  return CommonSelectComponent;
})();
export { CommonSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNlbGVjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXNlbGVjdC9jb21tb24tc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBY3pFO0lBQUE7UUFFVyxtQkFBYyxHQUFHLEVBQUUsQ0FBQztRQUNuQixpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2xFLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsY0FBUyxHQUFRLGNBQU8sQ0FBQyxDQUFDO1FBRTFCLG9CQUFlLEdBQUcsVUFBQyxDQUFNLElBQU0sQ0FBQyxDQUFDO0lBOEJuQyxDQUFDOzhCQXZDWSxxQkFBcUI7SUFXaEMsMENBQVUsR0FBVixVQUFXLEtBQVU7UUFDbkIsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVELGdEQUFnQixHQUFoQixVQUFpQixFQUFPO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxpREFBaUIsR0FBakIsVUFBa0IsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0RBQWdCLEdBQWhCLFVBQWtCLFVBQW1CO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7SUFFRCx5Q0FBUyxHQUFULFVBQVUsTUFBYztRQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM3QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsMENBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQy9DLENBQUM7O0lBckNRO1FBQVIsS0FBSyxFQUFFOzBEQUE4QjtJQUM3QjtRQUFSLEtBQUssRUFBRTtpRUFBcUI7SUFDbkI7UUFBVCxNQUFNLEVBQUU7K0RBQXlEO0lBSHZELHFCQUFxQjtRQVpqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6Qiwyb0JBQTZDO1lBRTdDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx1QkFBcUIsRUFBckIsQ0FBcUIsQ0FBQztvQkFDcEQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjs7U0FDRixDQUFDO09BQ1cscUJBQXFCLENBdUNqQztJQUFELDRCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0F2Q1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBmb3J3YXJkUmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tbW9uLXNlbGVjdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tb24tc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tbW9uLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENvbW1vblNlbGVjdENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25TZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IHN0cmluZ1tdIHwgbnVtYmVyW107XG4gIEBJbnB1dCgpIHNlbGVjdGVkT3B0aW9uID0gJyc7XG4gIEBPdXRwdXQoKSBzZWxlY3RlZEl0ZW06IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBpc0xpc3REaXNwbGF5ZWQgPSBmYWxzZTtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBvblRvdWNoZWQ6IGFueSA9ICgpID0+IHt9O1xuXG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9uID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgc2V0T3B0aW9uKG9wdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbiA9IG9wdGlvbjtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbS5lbWl0KG9wdGlvbik7XG4gICAgdGhpcy5pc0xpc3REaXNwbGF5ZWQgPSAhdGhpcy5pc0xpc3REaXNwbGF5ZWQ7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5zZWxlY3RlZE9wdGlvbik7XG4gIH1cblxuICB0b2dnbGVMaXN0KCkge1xuICAgIHRoaXMuaXNMaXN0RGlzcGxheWVkID0gIXRoaXMuaXNMaXN0RGlzcGxheWVkO1xuICB9XG59XG4iXX0=
