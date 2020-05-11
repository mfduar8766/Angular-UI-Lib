import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  HostListener,
  forwardRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

interface IOptions {
  label: string;
  value: string;
}

@Component({
  selector: 'common-multi-select',
  templateUrl: './common-multi-select.component.html',
  styleUrls: ['./common-multi-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CommonMultiSelectComponent),
      multi: true
    }
  ]
})
export class CommonMultiSelectComponent implements OnInit, AfterViewChecked, ControlValueAccessor {
  @ViewChild('searchBox', { read: ElementRef }) searchBox: ElementRef;
  @Input() options: IOptions[];
  @Input() preSelectedOption: string[] = [];
  listOfValues: IOptions[] = [];
  isListDisplayed = false;
  selectedItems: IOptions[] = [];
  searchText = '';
  currentIndex = [];
  selectAll = false;

  constructor(private eRef: ElementRef) {}

  propagateChange = (_: any) => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    if (value !== undefined || value !== null) {
      this.preSelectedOption = value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      return;
    } else {
      this.isListDisplayed = false;
    }
  }

  ngOnInit() {
    this.listOfValues = this.options;
  }

  checkForPrePopulatedValues() {
    const matchedItems = [];
    if (this.preSelectedOption && this.preSelectedOption.length) {
      this.preSelectedOption.forEach(option => {
        this.options.forEach(item => {
          if (item.label === option) {
            matchedItems.push({ label: option, value: item.value });
          }
        });
      });
      this.selectedItems = matchedItems;
    }
  }

  ngAfterViewChecked() {
    this.checkForPrePopulatedValues();
    if (this.isListDisplayed) {
      this.searchBox.nativeElement.focus();
    }
  }

  toggleList() {
    this.isListDisplayed = !this.isListDisplayed;
  }

  clearSelectedItemsOnXclick() {
    this.isListDisplayed = false;
    this.selectedItems = [];
    this.preSelectedOption = [];
    this.propagateChange(this.preSelectedOption);
  }

  onSearchFilter(value) {
    if (value === '' || value.length === 0) {
      this.searchText = '';
      this.listOfValues = this.options;
    } else if (value && value.length > 0) {
      this.listOfValues = this.listOfValues.filter(item =>
        item.value
          .toLowerCase()
          .trim()
          .includes(value)
      );
    }
  }

  callPropagateMethod(selectedItemsArray: any[] | IOptions[]) {
    this.selectedItems = selectedItemsArray;
    const listOfItems = this.selectedItems.map(item => item.label);
    this.preSelectedOption = listOfItems;
    this.propagateChange(this.preSelectedOption);
  }

  onSelectAll(event) {
    const isChecked = event;
    if (isChecked) {
      this.selectAll = true;
      this.callPropagateMethod(this.options);
    } else {
      this.selectAll = false;
      this.callPropagateMethod([]);
    }
  }

  addSelectedValues(data: IOptions, index: number) {
    this.selectedItems.push(data);
    this.currentIndex.push(index);
    this.preSelectedOption = this.selectedItems.map(item => item.label);
    this.propagateChange(this.preSelectedOption);
  }

  removeSelectedValues(data: IOptions, index: number) {
    this.selectedItems = this.selectedItems.filter(item => item.value !== data.value);
    this.currentIndex = this.currentIndex.filter(i => i !== index);
    this.preSelectedOption = this.selectedItems.map(item => item.label);
    this.propagateChange(this.preSelectedOption);
  }

  addRemoveData(data: IOptions, index: number) {
    if (
      this.selectedItems.filter(item => item.value === data.value).length > 0 ||
      this.selectedItems.filter(item => item.label === data.label).length > 0
    ) {
      this.removeSelectedValues(data, index);
    } else if (
      !(this.selectedItems.filter(item => item.value === data.value).length > 0) ||
      !(this.selectedItems.filter(item => item.label === data.label).length > 0)
    ) {
      this.addSelectedValues(data, index);
    }
  }
}
