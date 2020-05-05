import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'common-multi-select',
  template: `
  <p-multiSelect (onChange)="selectedValue.emit($event.value)" [options]="options" [(ngModel)]="preSelectedOption"></p-multiSelect>
  `
})
export class CommonMultiSelectComponent {
  @Input() options: [{ label: string; value: string; }];
  @Input() preSelectedOption: string[];
  @Output() selectedValue: EventEmitter<string> = new EventEmitter();
}
