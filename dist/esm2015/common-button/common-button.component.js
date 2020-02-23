import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let CommonButtonComponent = class CommonButtonComponent {
    constructor() {
        this.buttonType = 'button';
        this.isDisabled = false;
        this.handleClick = new EventEmitter();
    }
    ngOnInit() { }
};
__decorate([
    Input()
], CommonButtonComponent.prototype, "buttonText", void 0);
__decorate([
    Input()
], CommonButtonComponent.prototype, "buttonType", void 0);
__decorate([
    Input()
], CommonButtonComponent.prototype, "isDisabled", void 0);
__decorate([
    Input()
], CommonButtonComponent.prototype, "backgroundColor", void 0);
__decorate([
    Output()
], CommonButtonComponent.prototype, "handleClick", void 0);
CommonButtonComponent = __decorate([
    Component({
        selector: 'common-button',
        template: `
    <ng-container>
      <button
        [ngStyle]="{ 'background-color': backgroundColor }"
        [type]="buttonType"
        (click)="handleClick.emit($event)"
        [disabled]="isDisabled"
      >
        {{ buttonText }}
      </button>
    </ng-container>
  `,
        styles: ["button{padding:.5rem 2rem;margin:.5rem;font-size:1rem;color:#fff;border:.1rem solid;border-radius:.5rem;text-transform:uppercase;-webkit-transition:.3s ease-out;transition:.3s ease-out;cursor:pointer;background-color:green}button:active,button:focus{outline:0}.primary{border-color:var(--primary);color:var(--primary)}.primary:active,.primary:hover{background-color:var(--primary);color:#fff}.clear{border:none;color:#000}"]
    })
], CommonButtonComponent);
export { CommonButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLWJ1dHRvbi9jb21tb24tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWtCL0UsSUFBYSxxQkFBcUIsR0FBbEMsTUFBYSxxQkFBcUI7SUFPaEM7UUFMUyxlQUFVLEdBQUcsUUFBUSxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbEIsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUvQyxDQUFDO0lBRWhCLFFBQVEsS0FBSSxDQUFDO0NBQ2QsQ0FBQTtBQVRVO0lBQVIsS0FBSyxFQUFFO3lEQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTt5REFBdUI7QUFDdEI7SUFBUixLQUFLLEVBQUU7eURBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOzhEQUF5QjtBQUN2QjtJQUFULE1BQU0sRUFBRTswREFBcUQ7QUFMbkQscUJBQXFCO0lBaEJqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0dBV1Q7O0tBRUYsQ0FBQztHQUNXLHFCQUFxQixDQVVqQztTQVZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29tbW9uLWJ1dHRvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZC1jb2xvcic6IGJhY2tncm91bmRDb2xvciB9XCJcbiAgICAgICAgW3R5cGVdPVwiYnV0dG9uVHlwZVwiXG4gICAgICAgIChjbGljayk9XCJoYW5kbGVDbGljay5lbWl0KCRldmVudClcIlxuICAgICAgICBbZGlzYWJsZWRdPVwiaXNEaXNhYmxlZFwiXG4gICAgICA+XG4gICAgICAgIHt7IGJ1dHRvblRleHQgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9jb21tb24tYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYnV0dG9uVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBidXR0b25UeXBlID0gJ2J1dHRvbic7XG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBoYW5kbGVDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==