import { __decorate } from 'tslib';
import { Component } from '@angular/core';
let FormSliderComponent = class FormSliderComponent {};
FormSliderComponent = __decorate(
  [
    Component({
      selector: 'app-form-slider',
      template: `
    <div style="display: 'flex'; align-items: 'center';" [formGroup]="group">
      <label>{{ config.label }}</label>
      <p-slider [style]="{ width: '300px' }" [formControlName]="config.name"></p-slider>
    </div>
  `
    })
  ],
  FormSliderComponent
);
export { FormSliderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1zbGlkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbW1vbi1yZWFjdGl2ZS1mb3JtL0NvbXBvbmVudHMvZm9ybS1zbGlkZXIvZm9ybS1zbGlkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBYzFDLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0NBRy9CLENBQUE7QUFIWSxtQkFBbUI7SUFUL0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUU7Ozs7O0dBS1Q7S0FDRixDQUFDO0dBQ1csbUJBQW1CLENBRy9CO1NBSFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uL01vZGVscyAvZmllbGQuaW50ZXJmYWNlJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vTW9kZWxzIC9maWVsZENvbmZpZy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZm9ybS1zbGlkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiAnZmxleCc7IGFsaWduLWl0ZW1zOiAnY2VudGVyJztcIiBbZm9ybUdyb3VwXT1cImdyb3VwXCI+XG4gICAgICA8bGFiZWw+e3sgY29uZmlnLmxhYmVsIH19PC9sYWJlbD5cbiAgICAgIDxwLXNsaWRlciBbc3R5bGVdPVwieyB3aWR0aDogJzMwMHB4JyB9XCIgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiPjwvcC1zbGlkZXI+XG4gICAgPC9kaXY+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgRm9ybVNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIEZpZWxkIHtcbiAgY29uZmlnOiBGaWVsZENvbmZpZztcbiAgZ3JvdXA6IEZvcm1Hcm91cDtcbn1cbiJdfQ==
