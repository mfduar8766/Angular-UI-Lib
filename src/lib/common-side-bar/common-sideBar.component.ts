import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'common-side-bar',
  template: `
    <div
      *ngIf="isSideBarOpen"
      [@slideInOut]
      [ngStyle]="{ right: position === 'right' ? 0 : '', left: position === 'left' ? 0 : '' }"
      class="side-bar"
    >
      <div class="icon">
        <div (click)="toggleSideBar()" class="times-icon fa fa-times cursor-pointer"></div>
      </div>
      <ng-content></ng-content>
    </div>
    <div [class.is-overlay]="isSideBarOpen"></div>
  `,
  styleUrls: ['./common-side-bar.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition('void => *', [style({ transform: 'translateX(-100%)' }), animate('200ms')]),
      transition('* => void', [animate('200ms', style({ transform: 'translateX(-500px)' }))])
    ])
  ]
})
export class CommonSideBarComponent {
  @Input() isSideBarOpen: boolean;
  @Input() position = 'left';
  toggleSideBar() {
    this.isSideBarOpen = !this.isSideBarOpen;
  }
}
