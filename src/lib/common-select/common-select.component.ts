import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { State } from 'src/assets/testData';

@Component({
  selector: 'common-select',
  template: `
    <ng-container>
      <select [name]="name" [(ngModel)]="value">
        <option *ngFor="let state of stateList" [value]="state.abbreviation">
          {{ state.name }}
        </option>
      </select>
    </ng-container>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CommonSelectComponent),
      multi: true
    }
  ]
})
export class CommonSelectComponent implements ControlValueAccessor {
  @Input() stateList: State[];
  @Input() name: string;
  @Input('value') val: string;

  onChange: any = () => {};
  onTouched: any = () => {};

  get value() {
    return this.val;
  }

  set value(val) {
    this.val = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }
}
