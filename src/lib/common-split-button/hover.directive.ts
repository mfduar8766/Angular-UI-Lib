import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({ selector: '[appCommonHoverDirective]' })
export class HoverDirective {
  ismouseLeave = false;
  isClickEvent = false;
  @Output() closeList: EventEmitter<any> = new EventEmitter();

  constructor() {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.ismouseLeave = false;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.ismouseLeave = true;
  }

  @HostListener('document:click')
  onClick() {
    if (this.ismouseLeave) {
      this.closeList.emit();
    }
  }
}
