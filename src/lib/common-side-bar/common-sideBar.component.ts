import { Component, Input, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'common-side-bar',
  template: `
    <ng-template [ngIf]="position === 'left'">
      <div (mouseleave)="onMouseLeave($event)" *ngIf="isSideBarOpen" [@slideInOut] style="left: 0" class="side-bar">
        <div class="icon">
          <div (click)="toggleSideBar()" class="times-icon fa fa-times cursor-pointer"></div>
        </div>
        <ng-content></ng-content>
      </div>
    </ng-template>
    <ng-template [ngIf]="position === 'right'">
      <div (mouseleave)="onMouseLeave($event)" *ngIf="isSideBarOpen" [@slideRight] style="right: 0" class="side-bar">
        <div class="icon">
          <div (click)="toggleSideBar()" class="times-icon fa fa-times cursor-pointer"></div>
        </div>
        <ng-content></ng-content>
      </div>
    </ng-template>
    <div [class.is-overlay]="isSideBarOpen"></div>
  `,
  styleUrls: ['./common-side-bar.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition('void => *', [style({ transform: 'translateX(-100%)' }), animate('200ms')]),
      transition('* => void', [animate('200ms', style({ transform: 'translateX(-500px)' }))])
    ]),
    trigger('slideRight', [
      transition('void => *', [style({ transform: 'translateX(100%)' }), animate('200ms')]),
      transition('* => void', [animate('200ms', style({ transform: 'translateX(500px)' }))])
    ])
  ]
})
export class CommonSideBarComponent {
  @Input() isSideBarOpen: boolean;
  @Input() position = 'left';
  isOutOfBounds = false;

  @HostListener('document:click')
  closeSideBar() {
    if (this.isSideBarOpen && this.isOutOfBounds) {
      this.isSideBarOpen = false;
      this.isOutOfBounds = false;
    }
  }

  onMouseLeave(event) {
    this.isOutOfBounds = true;
  }

  toggleSideBar() {
    this.isSideBarOpen = !this.isSideBarOpen;
  }
}
