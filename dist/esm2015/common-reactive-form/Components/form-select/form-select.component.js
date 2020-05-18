import { __decorate } from 'tslib';
import { Component } from '@angular/core';
let FormSelectComponent = class FormSelectComponent {};
FormSelectComponent = __decorate(
  [
    Component({
      selector: 'app-form-select',
      template: `
    <div class="dynamic-field form-select" [formGroup]="group">
      <label>{{ config.label }}</label>
      <p-dropdown [formControlName]="config.name" [options]="config.options"></p-dropdown>
      <ng-container *ngIf="group.controls[this.config.name].touched && group.controls[this.config.name].invalid">
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
  FormSelectComponent
);
export { FormSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbW1vbi1yZWFjdGl2ZS1mb3JtL0NvbXBvbmVudHMvZm9ybS1zZWxlY3QvZm9ybS1zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBcUIxQyxJQUFhLG1CQUFtQixHQUFoQyxNQUFhLG1CQUFtQjtDQUcvQixDQUFBO0FBSFksbUJBQW1CO0lBaEIvQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0dBWVQ7S0FDRixDQUFDO0dBQ1csbUJBQW1CLENBRy9CO1NBSFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uL01vZGVscyAvZmllbGQuaW50ZXJmYWNlJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vTW9kZWxzIC9maWVsZENvbmZpZy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZm9ybS1zZWxlY3QnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJkeW5hbWljLWZpZWxkIGZvcm0tc2VsZWN0XCIgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxuICAgICAgPGxhYmVsPnt7IGNvbmZpZy5sYWJlbCB9fTwvbGFiZWw+XG4gICAgICA8cC1kcm9wZG93biBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCIgW29wdGlvbnNdPVwiY29uZmlnLm9wdGlvbnNcIj48L3AtZHJvcGRvd24+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JvdXAuY29udHJvbHNbdGhpcy5jb25maWcubmFtZV0udG91Y2hlZCAmJiBncm91cC5jb250cm9sc1t0aGlzLmNvbmZpZy5uYW1lXS5pbnZhbGlkXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHZhbGlkYXRpb24gb2YgY29uZmlnLnZhbGlkYXRpb25zXCI+XG4gICAgICAgICAgPGRpdiAqbmdJZj1cImdyb3VwLmdldChjb25maWcubmFtZSkuaGFzRXJyb3IodmFsaWRhdGlvbi5uYW1lKVwiPlxuICAgICAgICAgICAge3sgdmFsaWRhdGlvbi5tZXNzYWdlIH19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRm9ybVNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIEZpZWxkIHtcbiAgY29uZmlnOiBGaWVsZENvbmZpZztcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcbn1cbiJdfQ==
