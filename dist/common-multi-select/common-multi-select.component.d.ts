import { OnInit, ElementRef, AfterViewChecked } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
interface IOptions {
  label: string;
  value: string;
}
export declare class CommonMultiSelectComponent implements OnInit, AfterViewChecked, ControlValueAccessor {
  private eRef;
  searchBox: ElementRef;
  options: IOptions[];
  preSelectedOption: string[];
  listOfValues: IOptions[];
  isListDisplayed: boolean;
  selectedItems: IOptions[];
  searchText: string;
  currentIndex: any[];
  selectAll: boolean;
  constructor(eRef: ElementRef);
  propagateChange: (_: any) => void;
  onTouched: any;
  writeValue(value: any): void;
  registerOnChange(fn: any): void;
  registerOnTouched(fn: any): void;
  clickout(event: any): void;
  ngOnInit(): void;
  checkForPrePopulatedValues(): void;
  ngAfterViewChecked(): void;
  toggleList(): void;
  clearSelectedItemsOnXclick(): void;
  onSearchFilter(value: any): void;
  callPropagateMethod(selectedItemsArray: any[] | IOptions[]): void;
  onSelectAll(event: any): void;
  addSelectedValues(data: IOptions, index: number): void;
  removeSelectedValues(data: IOptions, index: number): void;
  addRemoveData(data: IOptions, index: number): void;
}
export {};
