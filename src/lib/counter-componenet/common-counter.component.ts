import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

@Component({
  selector: 'common-counter',
  template: `
    <button (click)="increment()">+</button>
    {{ counterValue }}
    <button (click)="decrement()">-</button>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CommonCounterComponent),
      multi: true
    }
  ]
})
export class CommonCounterComponent implements ControlValueAccessor {
  // tslint:disable-next-line: variable-name
  @Input() _counterValue = 0; // notice the '_'

  get counterValue() {
    return this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(this._counterValue);
  }

  propagateChange = (_: any) => {};

  writeValue(value: any) {
    if (value !== undefined) {
      this.counterValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  increment() {
    this.counterValue++;
  }

  decrement() {
    this.counterValue--;
  }
}
