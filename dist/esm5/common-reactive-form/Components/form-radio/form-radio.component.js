import { __decorate } from 'tslib';
import { Component } from '@angular/core';
var FormRadioComponent = /** @class */ (function() {
  function FormRadioComponent() {}
  FormRadioComponent = __decorate(
    [
      Component({
        selector: 'app-form-input',
        template:
          '\n    <div class="dynamic-field form-input" [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <input\n        [type]="config.inputType"\n        [placeholder]="config.placeholder"\n        [formControlName]="config.name"\n      />\n      <ng-container *ngFor="let validation of config.validations">\n      <div *ngIf="group.get(config.name).hasError(validation.name)">\n        {{ validation.message }}\n      </div>\n    </ng-container>\n    </div>\n  '
      })
    ],
    FormRadioComponent
  );
  return FormRadioComponent;
})();
export { FormRadioComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1yYWRpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXJlYWN0aXZlLWZvcm0vQ29tcG9uZW50cy9mb3JtLXJhZGlvL2Zvcm0tcmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBdUIxQztJQUFBO0lBR0EsQ0FBQztJQUhZLGtCQUFrQjtRQWxCOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsd2VBY1Q7U0FDRixDQUFDO09BQ1csa0JBQWtCLENBRzlCO0lBQUQseUJBQUM7Q0FBQSxBQUhELElBR0M7U0FIWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vTW9kZWxzIC9maWVsZC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi9Nb2RlbHMgL2ZpZWxkQ29uZmlnLmludGVyZmFjZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1mb3JtLWlucHV0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZHluYW1pYy1maWVsZCBmb3JtLWlucHV0XCIgW2Zvcm1Hcm91cF09XCJncm91cFwiPlxuICAgICAgPGxhYmVsPnt7IGNvbmZpZy5sYWJlbCB9fTwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgW3R5cGVdPVwiY29uZmlnLmlucHV0VHlwZVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJjb25maWcucGxhY2Vob2xkZXJcIlxuICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImNvbmZpZy5uYW1lXCJcbiAgICAgIC8+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCB2YWxpZGF0aW9uIG9mIGNvbmZpZy52YWxpZGF0aW9uc1wiPlxuICAgICAgPGRpdiAqbmdJZj1cImdyb3VwLmdldChjb25maWcubmFtZSkuaGFzRXJyb3IodmFsaWRhdGlvbi5uYW1lKVwiPlxuICAgICAgICB7eyB2YWxpZGF0aW9uLm1lc3NhZ2UgfX1cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtUmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBGaWVsZCB7XG4gIGNvbmZpZzogRmllbGRDb25maWc7XG4gIGdyb3VwOiBGb3JtR3JvdXA7XG59XG4iXX0=
