import { Component, Input } from '@angular/core';

interface SplitButtonInterface {
  label: string;
  command?: () => void;
  disabled?: boolean;
  routerLink: string[];
}

@Component({
  selector: 'common-split-button',
  template: `
    <div (click)="isListDisplayed=!isListDisplayed" appCommonHoverDirective (closeList)="toggleList($event)">
      <div style="width: 'fit-content';">
        <i *ngIf="showIcon" [class]="icon" style="color: 'white'; position: 'relative'; left: '30px';"></i>
        <button [ngStyle]="{ 'background-color': backgroundColor }" [type]="buttonType">
          {{ buttonText }}
        </button>
        <i
          (click)="isListDisplayed=!isListDisplayed"
          style="color: 'white'; position: 'relative'; right: '30px';"
          class="cursor-pointer fa fa-chevron-down"
        ></i>
        <ul *ngIf="isListDisplayed; else showNothing" class="list-container">
          <ng-container *ngFor="let item of listItems">
            <li class="list-disabled" *ngIf="item.disabled; else addClick">{{ item.label }}</li>
            <ng-template #addClick>
              <li (click)="item.command()" class="list">{{ item.label }}</li>
            </ng-template>
          </ng-container>
        </ul>
        <ng-template #showNothing></ng-template>
      </div>
    </div>
  `,
  styleUrls: ['./common-split-button.scss']
})
export class CommonSplitButtonComponent {
  @Input() buttonText: string;
  @Input() showIcon = true;
  @Input() icon = 'fa fa-times';
  @Input() buttonType = 'button';
  @Input() backgroundColor: string;
  @Input() listItems: SplitButtonInterface[];
  isListDisplayed = false;

  toggleList(isListShown: boolean) {
    this.isListDisplayed = isListShown;
  }
}
