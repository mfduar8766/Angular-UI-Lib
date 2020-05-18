import { __decorate } from 'tslib';
import { Component } from '@angular/core';
let FormButtonComponent = class FormButtonComponent {};
FormButtonComponent = __decorate(
  [
    Component({
      selector: 'app-form-button',
      template: `
    <div class="dynamic-field form-button" [formGroup]="group">
      <button [disabled]="config.disabled" type="submit">
        {{ config.label }}
      </button>
    </div>
  `
    })
  ],
  FormButtonComponent
);
export { FormButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbW1vbi1yZWFjdGl2ZS1mb3JtL0NvbXBvbmVudHMvZm9ybS1idXR0b24vZm9ybS1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBZTFDLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0NBRy9CLENBQUE7QUFIWSxtQkFBbUI7SUFWL0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUU7Ozs7OztHQU1UO0tBQ0YsQ0FBQztHQUNXLG1CQUFtQixDQUcvQjtTQUhZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi9Nb2RlbHMgL2ZpZWxkLmludGVyZmFjZSc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uL01vZGVscyAvZmllbGRDb25maWcuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvcm0tYnV0dG9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZHluYW1pYy1maWVsZCBmb3JtLWJ1dHRvblwiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cbiAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImNvbmZpZy5kaXNhYmxlZFwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAge3sgY29uZmlnLmxhYmVsIH19XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEZpZWxkIHtcbiAgY29uZmlnOiBGaWVsZENvbmZpZztcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcbn1cbiJdfQ==
