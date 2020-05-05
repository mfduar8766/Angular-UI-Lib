import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'common-dropdown',
  template: `
  <p-dropdown (onChange)="selectedValue.emit($event.value)" [options]="options" [(ngModel)]="preSelectedOption"></p-dropdown>
  `
})
export class CommonDropdownComponent {
  @Input() options: [{ label: string; value: string; }];
  @Input() preSelectedOption: string;
  @Output() selectedValue: EventEmitter<string> = new EventEmitter();
}
