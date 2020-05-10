import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  HostListener,
  forwardRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

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
  @ViewChild('searchBox') searchBox: ElementRef;
  @Input() options: [{ label: string; value: string }];
  @Input() preSelectedOption: string[];
  @Input() name;
  @Output() selectedValues: EventEmitter<string[]> = new EventEmitter();
  listOfValues: any[] = [];
  isListDisplayed = false;
  selectedItems: any[] = [];
  listOfSelectedItems: string[] = [];
  searchText = '';
  currentIndex = [];
  selectAll = false;

  constructor(private eRef: ElementRef) {}

  onChange: any = () => {};
  onTouched: any = () => {};

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

  ngAfterViewChecked() {
    if (this.isListDisplayed) {
      this.searchBox.nativeElement.focus();
    }
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.preSelectedOption = value;
    }
  }

  toggleList() {
    this.isListDisplayed = !this.isListDisplayed;
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

  onCheckboxChecked(event) {
    const isChecked = event;
    if (isChecked) {
      this.selectAll = true;
      this.selectedItems = this.options;
    } else {
      this.selectAll = false;
      this.selectedItems = [];
    }
  }

  setOnChangeAndOnTouch(value) {
    this.onChange(value);
    this.onTouched();
  }

  addRemoveData(data, index: number) {
    if (!this.selectedItems.includes(data)) {
      this.selectedItems.push(data);
      this.currentIndex.push(index);
      this.listOfSelectedItems.push(data.value);
      this.preSelectedOption = this.listOfSelectedItems;
      // this.selectedValues.emit(this.listOfSelectedItems);
      this.setOnChangeAndOnTouch(this.preSelectedOption);
    } else if (this.selectedItems.includes(data)) {
      this.selectedItems = this.selectedItems.filter(item => item.label !== data.label);
      this.currentIndex = this.currentIndex.filter(i => i !== index);
      this.listOfSelectedItems = this.listOfSelectedItems.filter(item => item !== data.value);
      this.preSelectedOption = this.listOfSelectedItems;
      this.setOnChangeAndOnTouch(this.preSelectedOption);
      // this.selectedValues.emit(this.listOfSelectedItems);
    }
  }
}
// <p-multiSelect (onChange)="selectedValue.emit($event.value)" [options]="options" [(ngModel)]="preSelectedOption"></p-multiSelect>
