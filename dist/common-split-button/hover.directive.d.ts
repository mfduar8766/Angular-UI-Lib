import { EventEmitter } from '@angular/core';
export declare class HoverDirective {
  ismouseLeave: boolean;
  isClickEvent: boolean;
  closeList: EventEmitter<any>;
  constructor();
  onMouseEnter(): void;
  onMouseLeave(): void;
  onClick(): void;
}
