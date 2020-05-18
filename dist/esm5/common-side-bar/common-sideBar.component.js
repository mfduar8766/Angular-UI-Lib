import { __decorate } from 'tslib';
import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
var CommonSideBarComponent = /** @class */ (function() {
  function CommonSideBarComponent() {
    this.position = 'left';
  }
  CommonSideBarComponent.prototype.toggleSideBar = function() {
    this.isSideBarOpen = !this.isSideBarOpen;
  };
  __decorate([Input()], CommonSideBarComponent.prototype, 'isSideBarOpen', void 0);
  __decorate([Input()], CommonSideBarComponent.prototype, 'position', void 0);
  CommonSideBarComponent = __decorate(
    [
      Component({
        selector: 'common-side-bar',
        template:
          '\n    <div\n      *ngIf="isSideBarOpen"\n      [@slideInOut]\n      [ngStyle]="{ right: position === \'right\' ? 0 : \'\', left: position === \'left\' ? 0 : \'\' }"\n      class="side-bar"\n    >\n      <div class="icon">\n        <div (click)="toggleSideBar()" class="times-icon fa fa-times cursor-pointer"></div>\n      </div>\n      <ng-content></ng-content>\n    </div>\n    <div [class.is-overlay]="isSideBarOpen"></div>\n  ',
        animations: [
          trigger('slideInOut', [
            transition('void => *', [style({ transform: 'translateX(-100%)' }), animate('200ms')]),
            transition('* => void', [animate('200ms', style({ transform: 'translateX(-500px)' }))])
          ])
        ],
        styles: [
          '.side-bar{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;position:fixed;top:0;bottom:0;background:#fff;padding:0;margin:0;box-shadow:0 4px 8px 0 rgba(0,0,0,.2);-webkit-transition:.3s;transition:.3s;overflow-y:scroll;width:500px;z-index:2}.icon{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;margin-right:1rem;padding:1rem;z-index:3}.times-icon{color:red;z-index:4;cursor:pointer}.is-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.6);z-index:1}'
        ]
      })
    ],
    CommonSideBarComponent
  );
  return CommonSideBarComponent;
})();
export { CommonSideBarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXNpZGVCYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbW1vbi1zaWRlLWJhci9jb21tb24tc2lkZUJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQTBCMUU7SUFBQTtRQUVXLGFBQVEsR0FBRyxNQUFNLENBQUM7SUFJN0IsQ0FBQztJQUhDLDhDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQyxDQUFDO0lBSlE7UUFBUixLQUFLLEVBQUU7aUVBQXdCO0lBQ3ZCO1FBQVIsS0FBSyxFQUFFOzREQUFtQjtJQUZoQixzQkFBc0I7UUF4QmxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLHFiQWFUO1lBRUQsVUFBVSxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxZQUFZLEVBQUU7b0JBQ3BCLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUN0RixVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDeEYsQ0FBQzthQUNIOztTQUNGLENBQUM7T0FDVyxzQkFBc0IsQ0FNbEM7SUFBRCw2QkFBQztDQUFBLEFBTkQsSUFNQztTQU5ZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbW1vbi1zaWRlLWJhcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdlxuICAgICAgKm5nSWY9XCJpc1NpZGVCYXJPcGVuXCJcbiAgICAgIFtAc2xpZGVJbk91dF1cbiAgICAgIFtuZ1N0eWxlXT1cInsgcmlnaHQ6IHBvc2l0aW9uID09PSAncmlnaHQnID8gMCA6ICcnLCBsZWZ0OiBwb3NpdGlvbiA9PT0gJ2xlZnQnID8gMCA6ICcnIH1cIlxuICAgICAgY2xhc3M9XCJzaWRlLWJhclwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgPGRpdiAoY2xpY2spPVwidG9nZ2xlU2lkZUJhcigpXCIgY2xhc3M9XCJ0aW1lcy1pY29uIGZhIGZhLXRpbWVzIGN1cnNvci1wb2ludGVyXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IFtjbGFzcy5pcy1vdmVybGF5XT1cImlzU2lkZUJhck9wZW5cIj48L2Rpdj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vY29tbW9uLXNpZGUtYmFyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdzbGlkZUluT3V0JywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW3N0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtMTAwJSknIH0pLCBhbmltYXRlKCcyMDBtcycpXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbYW5pbWF0ZSgnMjAwbXMnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwMHB4KScgfSkpXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvbW1vblNpZGVCYXJDb21wb25lbnQge1xuICBASW5wdXQoKSBpc1NpZGVCYXJPcGVuOiBib29sZWFuO1xuICBASW5wdXQoKSBwb3NpdGlvbiA9ICdsZWZ0JztcbiAgdG9nZ2xlU2lkZUJhcigpIHtcbiAgICB0aGlzLmlzU2lkZUJhck9wZW4gPSAhdGhpcy5pc1NpZGVCYXJPcGVuO1xuICB9XG59XG4iXX0=
