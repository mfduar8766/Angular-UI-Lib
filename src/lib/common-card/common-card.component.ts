import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'common-card',
  template: `
    <div class="card-container height-width">
      <div class="card">
        <div *ngIf="showHeader" class="card-header">
          <ng-content select="div[role=header]"></ng-content>
        </div>
        <div class="card-body height-width">
          <ng-content></ng-content>
        </div>
        <div class="card-footer" *ngIf="showFooter">
          <ng-content select="div[role=footer]"></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./common-card-component.css']
})
export class CommonCardComponent implements OnInit {
  @Input() showHeader: boolean;
  @Input() showFooter: boolean;

  constructor() {}

  ngOnInit() {}
}
