import { __decorate } from 'tslib';
import { Component } from '@angular/core';
var FormInputComponent = /** @class */ (function() {
  function FormInputComponent() {}
  FormInputComponent = __decorate(
    [
      Component({
        selector: 'app-form-input',
        template:
          '\n    <div class="dynamic-field form-input" [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <input\n        pInputText\n        [type]="config.inputType"\n        [placeholder]="config.placeholder"\n        [formControlName]="config.name"\n      />\n      <ng-container *ngIf="group.controls[this.config.name].touched && group.controls[this.config.name].invalid">\n        <ng-container *ngFor="let validation of config.validations">\n          <div *ngIf="group.get(config.name).hasError(validation.name)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  '
      })
    ],
    FormInputComponent
  );
  return FormInputComponent;
})();
export { FormInputComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXJlYWN0aXZlLWZvcm0vQ29tcG9uZW50cy9mb3JtLWlucHV0L2Zvcm0taW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBMEIxQztJQUFBO0lBR0EsQ0FBQztJQUhZLGtCQUFrQjtRQXJCOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsMHBCQWlCVDtTQUNGLENBQUM7T0FDVyxrQkFBa0IsQ0FHOUI7SUFBRCx5QkFBQztDQUFBLEFBSEQsSUFHQztTQUhZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi9Nb2RlbHMgL2ZpZWxkLmludGVyZmFjZSc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uL01vZGVscyAvZmllbGRDb25maWcuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvcm0taW5wdXQnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJkeW5hbWljLWZpZWxkIGZvcm0taW5wdXRcIiBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XG4gICAgICA8bGFiZWw+e3sgY29uZmlnLmxhYmVsIH19PC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBwSW5wdXRUZXh0XG4gICAgICAgIFt0eXBlXT1cImNvbmZpZy5pbnB1dFR5cGVcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiXG4gICAgICAvPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImdyb3VwLmNvbnRyb2xzW3RoaXMuY29uZmlnLm5hbWVdLnRvdWNoZWQgJiYgZ3JvdXAuY29udHJvbHNbdGhpcy5jb25maWcubmFtZV0uaW52YWxpZFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCB2YWxpZGF0aW9uIG9mIGNvbmZpZy52YWxpZGF0aW9uc1wiPlxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJncm91cC5nZXQoY29uZmlnLm5hbWUpLmhhc0Vycm9yKHZhbGlkYXRpb24ubmFtZSlcIj5cbiAgICAgICAgICAgIHt7IHZhbGlkYXRpb24ubWVzc2FnZSB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XG4gIGNvbmZpZzogRmllbGRDb25maWc7XG4gIGdyb3VwOiBGb3JtR3JvdXA7XG59XG4iXX0=
