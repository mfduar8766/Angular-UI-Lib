import { __decorate } from 'tslib';
import { Component } from '@angular/core';
var FormCheckboxComponent = /** @class */ (function() {
  function FormCheckboxComponent() {}
  FormCheckboxComponent = __decorate(
    [
      Component({
        selector: 'app-form-input',
        template:
          '\n    <div class="dynamic-field form-input" [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <input\n        [type]="config.inputType"\n        [placeholder]="config.placeholder"\n        [formControlName]="config.name"\n        [checked]="config.value"\n      />\n      <ng-container\n        *ngIf="\n          group.controls[this.config.name].touched &&\n          group.controls[this.config.name].invalid\n        "\n      >\n        <ng-container *ngFor="let validation of config.validations">\n          <div *ngIf="group.get(config.name).hasError(validation.name)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  '
      })
    ],
    FormCheckboxComponent
  );
  return FormCheckboxComponent;
})();
export { FormCheckboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jaGVja2JveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXJlYWN0aXZlLWZvcm0vQ29tcG9uZW50cy9mb3JtLWNoZWNrYm94L2Zvcm0tY2hlY2tib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBK0IxQztJQUFBO0lBR0EsQ0FBQztJQUhZLHFCQUFxQjtRQTFCakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsNHRCQXNCVDtTQUNGLENBQUM7T0FDVyxxQkFBcUIsQ0FHakM7SUFBRCw0QkFBQztDQUFBLEFBSEQsSUFHQztTQUhZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi9Nb2RlbHMgL2ZpZWxkLmludGVyZmFjZSc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uL01vZGVscyAvZmllbGRDb25maWcuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvcm0taW5wdXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJkeW5hbWljLWZpZWxkIGZvcm0taW5wdXRcIiBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XG4gICAgICA8bGFiZWw+e3sgY29uZmlnLmxhYmVsIH19PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBbdHlwZV09XCJjb25maWcuaW5wdXRUeXBlXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cImNvbmZpZy5wbGFjZWhvbGRlclwiXG4gICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiY29uZmlnLm5hbWVcIlxuICAgICAgICBbY2hlY2tlZF09XCJjb25maWcudmFsdWVcIlxuICAgICAgLz5cbiAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICBncm91cC5jb250cm9sc1t0aGlzLmNvbmZpZy5uYW1lXS50b3VjaGVkICYmXG4gICAgICAgICAgZ3JvdXAuY29udHJvbHNbdGhpcy5jb25maWcubmFtZV0uaW52YWxpZFxuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCB2YWxpZGF0aW9uIG9mIGNvbmZpZy52YWxpZGF0aW9uc1wiPlxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmhhc0Vycm9yKHZhbGlkYXRpb24ubmFtZSlcIj5cbiAgICAgICAgICAgIHt7IHZhbGlkYXRpb24ubWVzc2FnZSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtQ2hlY2tib3hDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XG4gIGNvbmZpZzogRmllbGRDb25maWc7XG4gIGdyb3VwOiBGb3JtR3JvdXA7XG59XG4iXX0=
