import { __decorate } from 'tslib';
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var CommonCounterComponent = /** @class */ (function() {
  function CommonCounterComponent() {
    // tslint:disable-next-line: variable-name
    this._counterValue = 0; // notice the '_'
    this.propagateChange = function(_) {};
  }
  CommonCounterComponent_1 = CommonCounterComponent;
  Object.defineProperty(CommonCounterComponent.prototype, 'counterValue', {
    get: function() {
      return this._counterValue;
    },
    set: function(val) {
      this._counterValue = val;
      this.propagateChange(this._counterValue);
    },
    enumerable: true,
    configurable: true
  });
  CommonCounterComponent.prototype.writeValue = function(value) {
    if (value !== undefined) {
      this.counterValue = value;
    }
  };
  CommonCounterComponent.prototype.registerOnChange = function(fn) {
    this.propagateChange = fn;
  };
  CommonCounterComponent.prototype.registerOnTouched = function(fn) {};
  CommonCounterComponent.prototype.increment = function() {
    this.counterValue++;
  };
  CommonCounterComponent.prototype.decrement = function() {
    this.counterValue--;
  };
  var CommonCounterComponent_1;
  __decorate([Input()], CommonCounterComponent.prototype, '_counterValue', void 0);
  CommonCounterComponent = CommonCounterComponent_1 = __decorate(
    [
      Component({
        selector: 'common-counter',
        template:
          '\n    <button (click)="increment()">+</button>\n    {{ counterValue }}\n    <button (click)="decrement()">-</button>\n  ',
        providers: [
          {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(function() {
              return CommonCounterComponent_1;
            }),
            multi: true
          }
        ]
      })
    ],
    CommonCounterComponent
  );
  return CommonCounterComponent;
})();
export { CommonCounterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNvdW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvdW50ZXItY29tcG9uZW5ldC9jb21tb24tY291bnRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFpQnpFO0lBQUE7UUFDRSwwQ0FBMEM7UUFDakMsa0JBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7UUFXN0Msb0JBQWUsR0FBRyxVQUFDLENBQU0sSUFBTSxDQUFDLENBQUM7SUFxQm5DLENBQUM7K0JBbENZLHNCQUFzQjtJQUlqQyxzQkFBSSxnREFBWTthQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDO2FBRUQsVUFBaUIsR0FBRztZQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztZQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQyxDQUFDOzs7T0FMQTtJQVNELDJDQUFVLEdBQVYsVUFBVyxLQUFVO1FBQ25CLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFRCxpREFBZ0IsR0FBaEIsVUFBaUIsRUFBTztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsa0RBQWlCLEdBQWpCLFVBQWtCLEVBQU8sSUFBUyxDQUFDO0lBRW5DLDBDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDBDQUFTLEdBQVQ7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7SUEvQlE7UUFBUixLQUFLLEVBQUU7aUVBQW1CO0lBRmhCLHNCQUFzQjtRQWZsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSw4SEFJVDtZQUNELFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx3QkFBc0IsRUFBdEIsQ0FBc0IsQ0FBQztvQkFDckQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7T0FDVyxzQkFBc0IsQ0FrQ2xDO0lBQUQsNkJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWxDWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbW1vbi1jb3VudGVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uIChjbGljayk9XCJpbmNyZW1lbnQoKVwiPis8L2J1dHRvbj5cbiAgICB7eyBjb3VudGVyVmFsdWUgfX1cbiAgICA8YnV0dG9uIChjbGljayk9XCJkZWNyZW1lbnQoKVwiPi08L2J1dHRvbj5cbiAgYCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDb21tb25Db3VudGVyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vbkNvdW50ZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBASW5wdXQoKSBfY291bnRlclZhbHVlID0gMDsgLy8gbm90aWNlIHRoZSAnXydcblxuICBnZXQgY291bnRlclZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9jb3VudGVyVmFsdWU7XG4gIH1cblxuICBzZXQgY291bnRlclZhbHVlKHZhbCkge1xuICAgIHRoaXMuX2NvdW50ZXJWYWx1ZSA9IHZhbDtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLl9jb3VudGVyVmFsdWUpO1xuICB9XG5cbiAgcHJvcGFnYXRlQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY291bnRlclZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHt9XG5cbiAgaW5jcmVtZW50KCkge1xuICAgIHRoaXMuY291bnRlclZhbHVlKys7XG4gIH1cblxuICBkZWNyZW1lbnQoKSB7XG4gICAgdGhpcy5jb3VudGVyVmFsdWUtLTtcbiAgfVxufVxuIl19
