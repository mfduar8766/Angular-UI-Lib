import { __decorate } from 'tslib';
import { Component } from '@angular/core';
let FormCheckboxComponent = class FormCheckboxComponent {};
FormCheckboxComponent = __decorate(
  [
    Component({
      selector: 'app-form-input',
      template: `
    <div class="dynamic-field form-input" [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        [type]="config.inputType"
        [placeholder]="config.placeholder"
        [formControlName]="config.name"
        [checked]="config.value"
      />
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
  FormCheckboxComponent
);
export { FormCheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXJlYWN0aXZlLWZvcm0vQ29tcG9uZW50cy9mb3JtLWNoZWNrYm94L2Zvcm0tY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBK0IxQyxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtDQUdqQyxDQUFBO0FBSFkscUJBQXFCO0lBMUJqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVDtLQUNGLENBQUM7R0FDVyxxQkFBcUIsQ0FHakM7U0FIWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vTW9kZWxzIC9maWVsZC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi9Nb2RlbHMgL2ZpZWxkQ29uZmlnLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mb3JtLWlucHV0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZHluYW1pYy1maWVsZCBmb3JtLWlucHV0XCIgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxuICAgICAgPGxhYmVsPnt7IGNvbmZpZy5sYWJlbCB9fTwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgW3R5cGVdPVwiY29uZmlnLmlucHV0VHlwZVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb25maWcucGxhY2Vob2xkZXJcIlxuICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCJcbiAgICAgICAgW2NoZWNrZWRdPVwiY29uZmlnLnZhbHVlXCJcbiAgICAgIC8+XG4gICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgZ3JvdXAuY29udHJvbHNbdGhpcy5jb25maWcubmFtZV0udG91Y2hlZCAmJlxuICAgICAgICAgIGdyb3VwLmNvbnRyb2xzW3RoaXMuY29uZmlnLm5hbWVdLmludmFsaWRcbiAgICAgICAgXCJcbiAgICAgID5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgdmFsaWRhdGlvbiBvZiBjb25maWcudmFsaWRhdGlvbnNcIj5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5oYXNFcnJvcih2YWxpZGF0aW9uLm5hbWUpXCI+XG4gICAgICAgICAgICB7eyB2YWxpZGF0aW9uLm1lc3NhZ2UgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUNoZWNrYm94Q29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xuICBjb25maWc6IEZpZWxkQ29uZmlnO1xuICBncm91cDogRm9ybUdyb3VwO1xufVxuIl19
