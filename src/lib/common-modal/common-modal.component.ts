import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'common-modal',
  template: `
    <div *ngIf="isModalOpen" [ngStyle]="classProp" class="modal-container">
      <div modal-inner-container>
        <div *ngIf="showHeader" class="modal-header">
          <div style="margin-left: 0.5rem;">{{ headerText }}</div>
          <div class="icon-container">
            <i (click)="closeModal.emit($event)" class="times-icon fa fa-times"></i>
          </div>
        </div>
      </div>
      <div class="modal-content">
        <ng-content select="div[role=content]"></ng-content>
      </div>
      <footer *ngIf="showFooter" class="modal-footer">
        <ng-content select="div[role=footer]"></ng-content>
      </footer>
    </div>
  `,
  styleUrls: ['./common-modal.component.css']
})
export class CommonModalComponent implements OnInit {
  @Input() isModalOpen = false;
  @Input() headerText = 'Header Text';
  @Input() showHeader = true;
  @Input() showFooter = true;
  @Input() classProp = {};
  @Output() closeModal: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
