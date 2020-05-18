import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class CommonSelectComponent implements ControlValueAccessor {
  options: string[] | number[];
  selectedOption: string;
  selectedItem: EventEmitter<string>;
  isListDisplayed: boolean;
  disabled: boolean;
  onTouched: any;
  propagateChange: (_: any) => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  setDisabledState?(isDisabled: boolean): void;
  setOption(option: string): void;
  toggleList(): void;
}
