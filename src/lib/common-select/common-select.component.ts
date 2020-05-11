import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { State } from 'src/assets/testData';

@Component({
  selector: 'common-select',
  templateUrl: './common-select.component.html',
  styleUrls: ['./common-select.component.scss'],
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
  @Input() selectedState = '';
  isListDisplayed = false;
  disabled = false;

  onTouched: any = () => {};

  propagateChange = (_: any) => {};

  writeValue(value: any): void {
    if (value !== undefined) {
      this.selectedState = value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  setSelectedState(state: string) {
    this.selectedState = state;
    this.propagateChange(this.selectedState);
  }

  toggleList() {
    this.isListDisplayed = !this.isListDisplayed;
  }
}
