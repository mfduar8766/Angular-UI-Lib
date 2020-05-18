import { __decorate } from 'tslib';
import { Component } from '@angular/core';
var FormDatePickerComponent = /** @class */ (function() {
  function FormDatePickerComponent() {}
  FormDatePickerComponent = __decorate(
    [
      Component({
        selector: 'app-form-date-picker',
        template:
          '\n    <div class="demo-full-width margin-top" [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <input\n        [type]="config.inputType"\n        [placeholder]="config.placeholder"\n        [formControlName]="config.name"\n      />\n      <ng-container\n        *ngIf="\n          group.controls[this.config.name].touched &&\n          group.controls[this.config.name].invalid\n        "\n      >\n        <ng-container *ngFor="let validation of config.validations">\n          <div *ngIf="group.get(config.name).hasError(validation.name)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  '
      })
    ],
    FormDatePickerComponent
  );
  return FormDatePickerComponent;
})();
export { FormDatePickerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1kYXRlLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXJlYWN0aXZlLWZvcm0vQ29tcG9uZW50cy9mb3JtLWRhdGUtcGlja2VyL2Zvcm0tZGF0ZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBOEIxQztJQUFBO0lBR0EsQ0FBQztJQUhZLHVCQUF1QjtRQXpCbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxRQUFRLEVBQUUsMHJCQXFCVDtTQUNGLENBQUM7T0FDVyx1QkFBdUIsQ0FHbkM7SUFBRCw4QkFBQztDQUFBLEFBSEQsSUFHQztTQUhZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi9Nb2RlbHMgL2ZpZWxkLmludGVyZmFjZSc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uL01vZGVscyAvZmllbGRDb25maWcuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvcm0tZGF0ZS1waWNrZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJkZW1vLWZ1bGwtd2lkdGggbWFyZ2luLXRvcFwiIFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cbiAgICAgIDxsYWJlbD57eyBjb25maWcubGFiZWwgfX08L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIFt0eXBlXT1cImNvbmZpZy5pbnB1dFR5cGVcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiY29uZmlnLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiXG4gICAgICAvPlxuICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgIGdyb3VwLmNvbnRyb2xzW3RoaXMuY29uZmlnLm5hbWVdLnRvdWNoZWQgJiZcbiAgICAgICAgICBncm91cC5jb250cm9sc1t0aGlzLmNvbmZpZy5uYW1lXS5pbnZhbGlkXG4gICAgICAgIFwiXG4gICAgICA+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHZhbGlkYXRpb24gb2YgY29uZmlnLnZhbGlkYXRpb25zXCI+XG4gICAgICAgICAgPGRpdiAqbmdJZj1cImdyb3VwLmdldChjb25maWcubmFtZSkuaGFzRXJyb3IodmFsaWRhdGlvbi5uYW1lKVwiPlxuICAgICAgICAgICAge3sgdmFsaWRhdGlvbi5tZXNzYWdlIH19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1EYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xuICBjb25maWc6IEZpZWxkQ29uZmlnO1xuICBncm91cDogRm9ybUdyb3VwO1xufVxuIl19
