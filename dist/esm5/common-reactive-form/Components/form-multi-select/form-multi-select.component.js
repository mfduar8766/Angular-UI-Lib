import { __decorate } from 'tslib';
import { Component } from '@angular/core';
var FormMultiSelectComponent = /** @class */ (function() {
  function FormMultiSelectComponent() {}
  FormMultiSelectComponent = __decorate(
    [
      Component({
        selector: 'app-form-multi-select',
        template:
          '\n    <div [formGroup]="group">\n      <label>{{ config.label }}</label>\n      <p-multiSelect\n        [formControlName]="config.name"\n        [options]="config.options"\n      ></p-multiSelect>\n      <ng-container\n        *ngIf="\n          group.controls[this.config.name].touched &&\n          group.controls[this.config.name].invalid\n        "\n      >\n        <ng-container *ngFor="let validation of config.validations">\n          <div *ngIf="group.get(config.name).hasError(validation.name)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </ng-container>\n    </div>\n  '
      })
    ],
    FormMultiSelectComponent
  );
  return FormMultiSelectComponent;
})();
export { FormMultiSelectComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1tdWx0aS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbW1vbi1yZWFjdGl2ZS1mb3JtL0NvbXBvbmVudHMvZm9ybS1tdWx0aS1zZWxlY3QvZm9ybS1tdWx0aS1zZWxlY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBNkIxQztJQUFBO0lBR0EsQ0FBQztJQUhZLHdCQUF3QjtRQXhCcEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxRQUFRLEVBQUUsK25CQW9CVDtTQUNGLENBQUM7T0FDVyx3QkFBd0IsQ0FHcEM7SUFBRCwrQkFBQztDQUFBLEFBSEQsSUFHQztTQUhZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi9Nb2RlbHMgL2ZpZWxkLmludGVyZmFjZSc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4uLy4uL01vZGVscyAvZmllbGRDb25maWcuaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWZvcm0tbXVsdGktc2VsZWN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZ3JvdXBcIj5cbiAgICAgIDxsYWJlbD57eyBjb25maWcubGFiZWwgfX08L2xhYmVsPlxuICAgICAgPHAtbXVsdGlTZWxlY3RcbiAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJjb25maWcubmFtZVwiXG4gICAgICAgIFtvcHRpb25zXT1cImNvbmZpZy5vcHRpb25zXCJcbiAgICAgID48L3AtbXVsdGlTZWxlY3Q+XG4gICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgZ3JvdXAuY29udHJvbHNbdGhpcy5jb25maWcubmFtZV0udG91Y2hlZCAmJlxuICAgICAgICAgIGdyb3VwLmNvbnRyb2xzW3RoaXMuY29uZmlnLm5hbWVdLmludmFsaWRcbiAgICAgICAgXCJcbiAgICAgID5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgdmFsaWRhdGlvbiBvZiBjb25maWcudmFsaWRhdGlvbnNcIj5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZ3JvdXAuZ2V0KGNvbmZpZy5uYW1lKS5oYXNFcnJvcih2YWxpZGF0aW9uLm5hbWUpXCI+XG4gICAgICAgICAgICB7eyB2YWxpZGF0aW9uLm1lc3NhZ2UgfX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybU11bHRpU2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgRmllbGQge1xuICBjb25maWc6IEZpZWxkQ29uZmlnO1xuICBncm91cDogRm9ybUdyb3VwO1xufVxuIl19
