import { EventEmitter } from '@angular/core';
export declare class CommonModalComponent {
  isModalOpen: boolean;
  headerText: string;
  showHeader: boolean;
  showFooter: boolean;
  classProp: {};
  closeModal: EventEmitter<boolean>;
}
