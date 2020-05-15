import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

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
  @Input() options: string[] | number[];
  @Input() selectedOption = '';
  isListDisplayed = false;
  disabled = false;

  onTouched: any = () => {};

  propagateChange = (_: any) => {};

  writeValue(value: any): void {
    if (value !== undefined) {
      this.selectedOption = value;
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

  setOption(option: string) {
    this.selectedOption = option;
    this.propagateChange(this.selectedOption);
  }

  toggleList() {
    this.isListDisplayed = !this.isListDisplayed;
  }
}
