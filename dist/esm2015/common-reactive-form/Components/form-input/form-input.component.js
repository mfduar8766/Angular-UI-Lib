import { __decorate } from 'tslib';
import { Component } from '@angular/core';
let FormInputComponent = class FormInputComponent {};
FormInputComponent = __decorate(
  [
    Component({
      selector: 'app-form-input',
      template: `
    <div class="dynamic-field form-input" [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        pInputText
        [type]="config.inputType"
        [placeholder]="config.placeholder"
        [formControlName]="config.name"
      />
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
  FormInputComponent
);
export { FormInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXJlYWN0aXZlLWZvcm0vQ29tcG9uZW50cy9mb3JtLWlucHV0L2Zvcm0taW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMEIxQyxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtDQUc5QixDQUFBO0FBSFksa0JBQWtCO0lBckI5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQlQ7S0FDRixDQUFDO0dBQ1csa0JBQWtCLENBRzlCO1NBSFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uL01vZGVscyAvZmllbGQuaW50ZXJmYWNlJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vTW9kZWxzIC9maWVsZENvbmZpZy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZm9ybS1pbnB1dCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImR5bmFtaWMtZmllbGQgZm9ybS1pbnB1dFwiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cbiAgICAgIDxsYWJlbD57eyBjb25maWcubGFiZWwgfX08L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHBJbnB1dFRleHRcbiAgICAgICAgW3R5cGVdPVwiY29uZmlnLmlucHV0VHlwZVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb25maWcucGxhY2Vob2xkZXJcIlxuICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCJcbiAgICAgIC8+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZ3JvdXAuY29udHJvbHNbdGhpcy5jb25maWcubmFtZV0udG91Y2hlZCAmJiBncm91cC5jb250cm9sc1t0aGlzLmNvbmZpZy5uYW1lXS5pbnZhbGlkXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHZhbGlkYXRpb24gb2YgY29uZmlnLnZhbGlkYXRpb25zXCI+XG4gICAgICAgICAgPGRpdiAqbmdJZj1cImdyb3VwLmdldChjb25maWcubmFtZSkuaGFzRXJyb3IodmFsaWRhdGlvbi5uYW1lKVwiPlxuICAgICAgICAgICAge3sgdmFsaWRhdGlvbi5tZXNzYWdlIH19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1JbnB1dENvbXBvbmVudCBpbXBsZW1lbnRzIEZpZWxkIHtcbiAgY29uZmlnOiBGaWVsZENvbmZpZztcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcbn1cbiJdfQ==
