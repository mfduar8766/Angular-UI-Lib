import { __decorate } from 'tslib';
import { Directive, HostListener, Output, EventEmitter } from '@angular/core';
var HoverDirective = /** @class */ (function() {
  function HoverDirective() {
    this.ismouseLeave = false;
    this.isClickEvent = false;
    this.closeList = new EventEmitter();
  }
  HoverDirective.prototype.onMouseEnter = function() {
    this.ismouseLeave = false;
  };
  HoverDirective.prototype.onMouseLeave = function() {
    this.ismouseLeave = true;
  };
  HoverDirective.prototype.onClick = function() {
    if (this.ismouseLeave) {
      this.closeList.emit();
    }
  };
  __decorate([Output()], HoverDirective.prototype, 'closeList', void 0);
  __decorate([HostListener('mouseenter')], HoverDirective.prototype, 'onMouseEnter', null);
  __decorate([HostListener('mouseleave')], HoverDirective.prototype, 'onMouseLeave', null);
  __decorate([HostListener('document:click')], HoverDirective.prototype, 'onClick', null);
  HoverDirective = __decorate([Directive({ selector: '[appCommonHoverDirective]' })], HoverDirective);
  return HoverDirective;
})();
export { HoverDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG92ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbW1vbi1zcGxpdC1idXR0b24vaG92ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzlFO0lBS0U7UUFKQSxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNYLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUU3QyxDQUFDO0lBR2hCLHFDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBR0QscUNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFHRCxnQ0FBTyxHQUFQO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBbkJTO1FBQVQsTUFBTSxFQUFFO3FEQUFtRDtJQUs1RDtRQURDLFlBQVksQ0FBQyxZQUFZLENBQUM7c0RBRzFCO0lBR0Q7UUFEQyxZQUFZLENBQUMsWUFBWSxDQUFDO3NEQUcxQjtJQUdEO1FBREMsWUFBWSxDQUFDLGdCQUFnQixDQUFDO2lEQUs5QjtJQXRCVSxjQUFjO1FBRDFCLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSwyQkFBMkIsRUFBRSxDQUFDO09BQ3hDLGNBQWMsQ0F1QjFCO0lBQUQscUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXZCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1thcHBDb21tb25Ib3ZlckRpcmVjdGl2ZV0nIH0pXG5leHBvcnQgY2xhc3MgSG92ZXJEaXJlY3RpdmUge1xuICBpc21vdXNlTGVhdmUgPSBmYWxzZTtcbiAgaXNDbGlja0V2ZW50ID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBjbG9zZUxpc3Q6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWVudGVyJylcbiAgb25Nb3VzZUVudGVyKCkge1xuICAgIHRoaXMuaXNtb3VzZUxlYXZlID0gZmFsc2U7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJylcbiAgb25Nb3VzZUxlYXZlKCkge1xuICAgIHRoaXMuaXNtb3VzZUxlYXZlID0gdHJ1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICBpZiAodGhpcy5pc21vdXNlTGVhdmUpIHtcbiAgICAgIHRoaXMuY2xvc2VMaXN0LmVtaXQoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
