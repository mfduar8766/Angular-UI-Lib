import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'common-button',
  template: `
    <ng-container>
      <button
        [ngStyle]="{ 'background-color': backgroundColor }"
        [type]="buttonType"
        (click)="handleClick.emit($event)"
        [disabled]="isDisabled"
      >
        {{ buttonText }}
      </button>
    </ng-container>
  `,
  styleUrls: ['./common-button.component.scss']
})
export class CommonButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() buttonType = 'button';
  @Input() isDisabled = false;
  @Input() backgroundColor: string;
  @Output() handleClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
