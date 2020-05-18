import { __decorate } from 'tslib';
import { Component, Input, Output, EventEmitter } from '@angular/core';
var CommonSliderComponent = /** @class */ (function() {
  function CommonSliderComponent() {
    this.sliderLabel = 'Range';
    this.minMaxRange = [2, 22];
    this.rangeValue = 5;
    this.getRange = new EventEmitter();
  }
  __decorate([Input()], CommonSliderComponent.prototype, 'sliderLabel', void 0);
  __decorate([Input()], CommonSliderComponent.prototype, 'minMaxRange', void 0);
  __decorate([Input()], CommonSliderComponent.prototype, 'rangeValue', void 0);
  __decorate([Input()], CommonSliderComponent.prototype, 'isDisabled', void 0);
  __decorate([Output()], CommonSliderComponent.prototype, 'getRange', void 0);
  CommonSliderComponent = __decorate(
    [
      Component({
        selector: 'common-slider',
        template:
          '<div style="display: flex; flex-direction: column; width: 100%; height: 100%;">\n  <div>{{ sliderLabel }}: {{ rangeValue }}</div>\n  <input\n    [disabled]="isDisabled"\n    class="slider"\n    pInputText\n    type="range"\n    [min]="minMaxRange[0]"\n    [max]="minMaxRange[1]"\n    [(ngModel)]="rangeValue"\n    (ngModelChange)="getRange.emit($event)"\n  />\n</div>\n',
        styles: [
          '.slider{-webkit-appearance:none;width:100%;height:15px;border-radius:5px;background:#d3d3d3;outline:0;opacity:.7;-webkit-transition:opacity .2s;transition:opacity .2s}.slider:hover{opacity:1}.slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:25px;height:25px;border-radius:50%;background:#007ad9;cursor:pointer}.slider::-moz-range-thumb{width:25px;height:25px;border-radius:50%;background:#4caf50;cursor:pointer}'
        ]
      })
    ],
    CommonSliderComponent
  );
  return CommonSliderComponent;
})();
export { CommonSliderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNsaWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXNsaWRlci9jb21tb24tc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92RTtJQUFBO1FBQ1csZ0JBQVcsR0FBRyxPQUFPLENBQUM7UUFDdEIsZ0JBQVcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBRWQsYUFBUSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ2hFLENBQUM7SUFMVTtRQUFSLEtBQUssRUFBRTs4REFBdUI7SUFDdEI7UUFBUixLQUFLLEVBQUU7OERBQXVCO0lBQ3RCO1FBQVIsS0FBSyxFQUFFOzZEQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFOzZEQUFxQjtJQUNuQjtRQUFULE1BQU0sRUFBRTsyREFBcUQ7SUFMbkQscUJBQXFCO1FBTGpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLDZZQUE2Qzs7U0FFOUMsQ0FBQztPQUNXLHFCQUFxQixDQU1qQztJQUFELDRCQUFDO0NBQUEsQUFORCxJQU1DO1NBTlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tbW9uLXNsaWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb21tb24tc2xpZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29tbW9uLXNsaWRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vblNsaWRlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNsaWRlckxhYmVsID0gJ1JhbmdlJztcbiAgQElucHV0KCkgbWluTWF4UmFuZ2UgPSBbMiwgMjJdO1xuICBASW5wdXQoKSByYW5nZVZhbHVlID0gNTtcbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgQE91dHB1dCgpIGdldFJhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbn1cbiJdfQ==
