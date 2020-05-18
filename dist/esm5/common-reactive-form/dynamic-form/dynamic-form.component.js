import { __decorate } from 'tslib';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
var DynamicFormComponent = /** @class */ (function() {
  function DynamicFormComponent(fb) {
    this.fb = fb;
    this.config = [];
    this.formSubmittedValues = new EventEmitter();
  }
  Object.defineProperty(DynamicFormComponent.prototype, 'controls', {
    get: function() {
      return this.config.filter(function(_a) {
        var type = _a.type;
        return type !== 'button';
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DynamicFormComponent.prototype, 'changes', {
    get: function() {
      return this.form.valueChanges;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DynamicFormComponent.prototype, 'valid', {
    get: function() {
      return this.form.valid;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DynamicFormComponent.prototype, 'value', {
    get: function() {
      return this.form.value;
    },
    enumerable: true,
    configurable: true
  });
  DynamicFormComponent.prototype.ngOnInit = function() {
    this.form = this.createGroup();
  };
  DynamicFormComponent.prototype.createGroup = function() {
    var _this = this;
    var group = this.fb.group({});
    this.config.forEach(function(field) {
      if (field.type === 'button') {
        return;
      }
      var control = _this.fb.control(field.value, _this.bindValidations(field.validations || []));
      group.addControl(field.name, control);
    });
    return group;
  };
  DynamicFormComponent.prototype.bindValidations = function(validations) {
    if (validations.length > 0) {
      var validList_1 = [];
      validations.forEach(function(valid) {
        validList_1.push(valid.validator);
      });
      return Validators.compose(validList_1);
    }
    return null;
  };
  DynamicFormComponent.prototype.handleSubmit = function(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.form.valid) {
      this.formSubmittedValues.emit(this.value);
    } else {
      this.validateAllFormFields(this.form);
    }
  };
  DynamicFormComponent.prototype.setDisabled = function(name, disable) {
    if (this.form.controls[name]) {
      var method = disable ? 'disable' : 'enable';
      this.form.controls[name][method]();
      return;
    }
    this.config = this.config.map(function(item) {
      if (item.name === name) {
        item.disabled = disable;
      }
      return item;
    });
  };
  DynamicFormComponent.prototype.validateAllFormFields = function(formGroup) {
    Object.keys(formGroup.controls).forEach(function(field) {
      var control = formGroup.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  };
  DynamicFormComponent.ctorParameters = function() {
    return [{ type: FormBuilder }];
  };
  __decorate([Input()], DynamicFormComponent.prototype, 'config', void 0);
  __decorate([Output()], DynamicFormComponent.prototype, 'formSubmittedValues', void 0);
  DynamicFormComponent = __decorate(
    [
      Component({
        exportAs: 'dynamicForm',
        selector: 'app-dynamic-form',
        template:
          '\n    <form\n      class="dynamic-form"\n      [formGroup]="form"\n      (ngSubmit)="handleSubmit($event)"\n    >\n      <ng-container\n        *ngFor="let field of config"\n        appDynamicField\n        [config]="field"\n        [group]="form"\n      >\n      </ng-container>\n    </form>\n  '
      })
    ],
    DynamicFormComponent
  );
  return DynamicFormComponent;
})();
export { DynamicFormComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY29tbW9uLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJjb21tb24tcmVhY3RpdmUtZm9ybS9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQXNCcEU7SUFrQkUsOEJBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBakIxQixXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUMxQix3QkFBbUIsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQWdCaEMsQ0FBQztJQWJ2QyxzQkFBSSwwQ0FBUTthQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQVE7b0JBQU4sY0FBSTtnQkFBTyxPQUFBLElBQUksS0FBSyxRQUFRO1lBQWpCLENBQWlCLENBQUMsQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHlDQUFPO2FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksdUNBQUs7YUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSx1Q0FBSzthQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUlELHVDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFX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QkFBb0I7UUFuQmhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLHNUQWNUO1NBQ0YsQ0FBQztPQUNXLG9CQUFvQixDQThFaEM7SUFBRCwyQkFBQztDQUFBLEFBOUVELElBOEVDO1NBOUVZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQnVpbGRlciwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vTW9kZWxzIC9maWVsZENvbmZpZy5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICdkeW5hbWljRm9ybScsXG4gIHNlbGVjdG9yOiAnYXBwLWR5bmFtaWMtZm9ybScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGZvcm1cbiAgICAgIGNsYXNzPVwiZHluYW1pYy1mb3JtXCJcbiAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybVwiXG4gICAgICAobmdTdWJtaXQpPVwiaGFuZGxlU3VibWl0KCRldmVudClcIlxuICAgID5cbiAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGNvbmZpZ1wiXG4gICAgICAgIGFwcER5bmFtaWNGaWVsZFxuICAgICAgICBbY29uZmlnXT1cImZpZWxkXCJcbiAgICAgICAgW2dyb3VwXT1cImZvcm1cIlxuICAgICAgPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9mb3JtPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbmZpZzogRmllbGRDb25maWdbXSA9IFtdO1xuICBAT3V0cHV0KCkgZm9ybVN1Ym1pdHRlZFZhbHVlczogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGZvcm06IEZvcm1Hcm91cDtcblxuICBnZXQgY29udHJvbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmZpbHRlcigoeyB0eXBlIH0pID0+IHR5cGUgIT09ICdidXR0b24nKTtcbiAgfVxuICBnZXQgY2hhbmdlcygpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcztcbiAgfVxuICBnZXQgdmFsaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS52YWxpZDtcbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuY3JlYXRlR3JvdXAoKTtcbiAgfVxuXG4gIGNyZWF0ZUdyb3VwKCkge1xuICAgIGNvbnN0IGdyb3VwID0gdGhpcy5mYi5ncm91cCh7fSk7XG4gICAgdGhpcy5jb25maWcuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBpZiAoZmllbGQudHlwZSA9PT0gJ2J1dHRvbicpIHsgcmV0dXJuOyB9XG4gICAgICBjb25zdCBjb250cm9sID0gdGhpcy5mYi5jb250cm9sKFxuICAgICAgICBmaWVsZC52YWx1ZSxcbiAgICAgICAgdGhpcy5iaW5kVmFsaWRhdGlvbnMoZmllbGQudmFsaWRhdGlvbnMgfHwgW10pXG4gICAgICApO1xuICAgICAgZ3JvdXAuYWRkQ29udHJvbChmaWVsZC5uYW1lLCBjb250cm9sKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZ3JvdXA7XG4gIH1cblxuICBiaW5kVmFsaWRhdGlvbnModmFsaWRhdGlvbnM6IGFueSkge1xuICAgIGlmICh2YWxpZGF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB2YWxpZExpc3QgPSBbXTtcbiAgICAgIHZhbGlkYXRpb25zLmZvckVhY2godmFsaWQgPT4ge1xuICAgICAgICB2YWxpZExpc3QucHVzaCh2YWxpZC52YWxpZGF0b3IpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gVmFsaWRhdG9ycy5jb21wb3NlKHZhbGlkTGlzdCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50OiBFdmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgdGhpcy5mb3JtU3VibWl0dGVkVmFsdWVzLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsaWRhdGVBbGxGb3JtRmllbGRzKHRoaXMuZm9ybSk7XG4gICAgfVxuICB9XG5cbiAgc2V0RGlzYWJsZWQobmFtZTogc3RyaW5nLCBkaXNhYmxlOiBib29sZWFuKSB7XG4gICAgaWYgKHRoaXMuZm9ybS5jb250cm9sc1tuYW1lXSkge1xuICAgICAgY29uc3QgbWV0aG9kID0gZGlzYWJsZSA/ICdkaXNhYmxlJyA6ICdlbmFibGUnO1xuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzW25hbWVdW21ldGhvZF0oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmNvbmZpZy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgaXRlbS5kaXNhYmxlZCA9IGRpc2FibGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhbGlkYXRlQWxsRm9ybUZpZWxkcyhmb3JtR3JvdXA6IEZvcm1Hcm91cCkge1xuICAgIE9iamVjdC5rZXlzKGZvcm1Hcm91cC5jb250cm9scykuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICBjb25zdCBjb250cm9sID0gZm9ybUdyb3VwLmdldChmaWVsZCk7XG4gICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoeyBvbmx5U2VsZjogdHJ1ZSB9KTtcbiAgICB9KTtcbiAgfVxufVxuIl19
