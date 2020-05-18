import { __decorate } from 'tslib';
import { Component } from '@angular/core';
let FormMultiSelectComponent = class FormMultiSelectComponent {};
FormMultiSelectComponent = __decorate(
  [
    Component({
      selector: 'app-form-multi-select',
      template: `
    <div [formGroup]="group">
      <label>{{ config.label }}</label>
      <p-multiSelect
        [formControlName]="config.name"
        [options]="config.options"
      ></p-multiSelect>
      <ng-container
        *ngIf="
          group.controls[this.config.name].touched &&
          group.controls[this.config.name].invalid
        "
      >
        <ng-container *ngFor="let validation of config.validations">
          <div *ngIf="group.get(config.name).hasError(validation.name)">
            {{ validation.message }}
          </div>
        </ng-container>
      </ng-container>
    </div>
  `
    })
  ],
  FormMultiSelectComponent
);
export { FormMultiSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1tdWx0aS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbW1vbi1yZWFjdGl2ZS1mb3JtL0NvbXBvbmVudHMvZm9ybS1tdWx0aS1zZWxlY3QvZm9ybS1tdWx0aS1zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBNkIxQyxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtDQUdwQyxDQUFBO0FBSFksd0JBQXdCO0lBeEJwQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQlQ7S0FDRixDQUFDO0dBQ1csd0JBQXdCLENBR3BDO1NBSFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uL01vZGVscyAvZmllbGQuaW50ZXJmYWNlJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vTW9kZWxzIC9maWVsZENvbmZpZy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZm9ybS1tdWx0aS1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxuICAgICAgPGxhYmVsPnt7IGNvbmZpZy5sYWJlbCB9fTwvbGFiZWw+XG4gICAgICA8cC1tdWx0aVNlbGVjdFxuICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCJcbiAgICAgICAgW29wdGlvbnNdPVwiY29uZmlnLm9wdGlvbnNcIlxuICAgICAgPjwvcC1tdWx0aVNlbGVjdD5cbiAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICBncm91cC5jb250cm9sc1t0aGlzLmNvbmZpZy5uYW1lXS50b3VjaGVkICYmXG4gICAgICAgICAgZ3JvdXAuY29udHJvbHNbdGhpcy5jb25maWcubmFtZV0uaW52YWxpZFxuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCB2YWxpZGF0aW9uIG9mIGNvbmZpZy52YWxpZGF0aW9uc1wiPlxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmhhc0Vycm9yKHZhbGlkYXRpb24ubmFtZSlcIj5cbiAgICAgICAgICAgIHt7IHZhbGlkYXRpb24ubWVzc2FnZSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtTXVsdGlTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XG4gIGNvbmZpZzogRmllbGRDb25maWc7XG4gIGdyb3VwOiBGb3JtR3JvdXA7XG59XG4iXX0=
