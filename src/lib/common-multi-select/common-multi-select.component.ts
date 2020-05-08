import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
  HostListener
} from '@angular/core';

@Component({
  selector: 'common-multi-select',
  templateUrl: './common-multi-select.component.html',
  styleUrls: ['./common-multi-select.component.scss']
})
export class CommonMultiSelectComponent implements OnInit, AfterViewChecked {
  @ViewChild('searchBox') searchBox: ElementRef;
  @Input() options: [{ label: string; value: string }];
  @Input() preSelectedOption: string[];
  @Output() selectedValue: EventEmitter<string> = new EventEmitter();
  listOfValues: any[] = [];
  isListDisplayed = false;
  selectedItems: any[] = [];
  searchText = '';
  currentIndex = [];
  listOfItemNames: string[] = [];
  onEnter = false;
  onClick = false;

  @HostListener('click')
  preventClose() {
    if (!this.onEnter) {
      this.isListDisplayed = false;
    }
    this.onClick = true;
    this.isListDisplayed = true;
  }

  @HostListener('window:click')
  onDocumentClick() {
    if (this.onEnter === false) {
      this.onClick = false;
      this.listOfItemNames = [];
      this.selectedItems = [];
      this.searchText = '';
      this.isListDisplayed = false;
      this.searchBox.nativeElement.blur();
    }
  }

  @HostListener('mouseover')
  onMouseEnter() {
    this.onEnter = true;
  }

  @HostListener('mouseout')
  onMouseLeave() {
    this.onEnter = false;
  }

  ngOnInit() {
    this.listOfValues = this.options;
  }

  ngAfterViewChecked() {
    if (this.isListDisplayed) {
      this.searchBox.nativeElement.focus();
    }
  }

  toggleList(isListShown: boolean) {
    this.isListDisplayed = isListShown;
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

  addRemoveData(data, index: number) {
    if (!this.selectedItems.includes(data)) {
      this.selectedItems.push(data);
      this.currentIndex.push(index);
      this.listOfItemNames.push(data.label);
    } else if (this.selectedItems.includes(data)) {
      this.selectedItems = this.selectedItems.filter(item => item.label !== data.label);
      this.currentIndex = this.currentIndex.filter(i => i !== index);
      this.listOfItemNames = this.listOfItemNames.filter(item => item !== data.label);
    }
  }
}
// <p-multiSelect (onChange)="selectedValue.emit($event.value)" [options]="options" [(ngModel)]="preSelectedOption"></p-multiSelect>
