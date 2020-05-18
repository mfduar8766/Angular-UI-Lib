import { ControlValueAccessor } from '@angular/forms';
export declare class CommonCounterComponent implements ControlValueAccessor {
  _counterValue: number;
  get counterValue(): number;
  set counterValue(val: number);
  propagateChange: (_: any) => void;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  increment(): void;
  decrement(): void;
}
