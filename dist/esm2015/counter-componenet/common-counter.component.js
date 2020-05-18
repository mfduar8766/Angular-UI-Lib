var CommonCounterComponent_1;
import { __decorate } from 'tslib';
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
let CommonCounterComponent = (CommonCounterComponent_1 = class CommonCounterComponent {
  constructor() {
    // tslint:disable-next-line: variable-name
    this._counterValue = 0; // notice the '_'
    this.propagateChange = _ => {};
  }
  get counterValue() {
    return this._counterValue;
  }
  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(this._counterValue);
  }
  writeValue(value) {
    if (value !== undefined) {
      this.counterValue = value;
    }
  }
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn) {}
  increment() {
    this.counterValue++;
  }
  decrement() {
    this.counterValue--;
  }
});
__decorate([Input()], CommonCounterComponent.prototype, '_counterValue', void 0);
CommonCounterComponent = CommonCounterComponent_1 = __decorate(
  [
    Component({
      selector: 'common-counter',
      template: `
    <button (click)="increment()">+</button>
    {{ counterValue }}
    <button (click)="decrement()">-</button>
  `,
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => CommonCounterComponent_1),
          multi: true
        }
      ]
    })
  ],
  CommonCounterComponent
);
export { CommonCounterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWNvdW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvdW50ZXItY29tcG9uZW5ldC9jb21tb24tY291bnRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBaUJ6RSxJQUFhLHNCQUFzQiw4QkFBbkMsTUFBYSxzQkFBc0I7SUFBbkM7UUFDRSwwQ0FBMEM7UUFDakMsa0JBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7UUFXN0Msb0JBQWUsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBcUJuQyxDQUFDO0lBOUJDLElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxZQUFZLENBQUMsR0FBRztRQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQztRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBSUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQU87UUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQU8sSUFBUyxDQUFDO0lBRW5DLFNBQVM7UUFDUCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztDQUNGLENBQUE7QUFoQ1U7SUFBUixLQUFLLEVBQUU7NkRBQW1CO0FBRmhCLHNCQUFzQjtJQWZsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRTs7OztHQUlUO1FBQ0QsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBc0IsQ0FBQztnQkFDckQsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGO0tBQ0YsQ0FBQztHQUNXLHNCQUFzQixDQWtDbEM7U0FsQ1ksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21tb24tY291bnRlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiaW5jcmVtZW50KClcIj4rPC9idXR0b24+XG4gICAge3sgY291bnRlclZhbHVlIH19XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwiZGVjcmVtZW50KClcIj4tPC9idXR0b24+XG4gIGAsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ29tbW9uQ291bnRlckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Db3VudGVyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHZhcmlhYmxlLW5hbWVcbiAgQElucHV0KCkgX2NvdW50ZXJWYWx1ZSA9IDA7IC8vIG5vdGljZSB0aGUgJ18nXG5cbiAgZ2V0IGNvdW50ZXJWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fY291bnRlclZhbHVlO1xuICB9XG5cbiAgc2V0IGNvdW50ZXJWYWx1ZSh2YWwpIHtcbiAgICB0aGlzLl9jb3VudGVyVmFsdWUgPSB2YWw7XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5fY291bnRlclZhbHVlKTtcbiAgfVxuXG4gIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNvdW50ZXJWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7fVxuXG4gIGluY3JlbWVudCgpIHtcbiAgICB0aGlzLmNvdW50ZXJWYWx1ZSsrO1xuICB9XG5cbiAgZGVjcmVtZW50KCkge1xuICAgIHRoaXMuY291bnRlclZhbHVlLS07XG4gIH1cbn1cbiJdfQ==
