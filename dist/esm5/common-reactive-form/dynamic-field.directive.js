import { __decorate } from 'tslib';
import {
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
  Type,
  OnChanges,
  ComponentRef
} from '@angular/core';
import { FormButtonComponent } from './Components/form-button/form-button.component';
import { FormInputComponent } from './Components/form-input/form-input.component';
import { FormSelectComponent } from './Components/form-select/form-select.component';
import { FormDatePickerComponent } from './Components/form-date-picker/form-date-picker.component';
import { FormCheckboxComponent } from './Components/form-checkbox/form-checkbox.component';
import { FormRadioComponent } from './Components/form-radio/form-radio.component';
import { FormMultiSelectComponent } from './Components/form-multi-select/form-multi-select.component';
import { FormSliderComponent } from './Components/form-slider/form-slider.component';
var components = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent,
  date: FormDatePickerComponent,
  radiobutton: FormRadioComponent,
  checkbox: FormCheckboxComponent,
  multiSelect: FormMultiSelectComponent,
  slider: FormSliderComponent
};
var DynamicFieldDirective = /** @class */ (function() {
  function DynamicFieldDirective(resolver, container) {
    this.resolver = resolver;
    this.container = container;
  }
  DynamicFieldDirective.prototype.ngOnChanges = function() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  };
  DynamicFieldDirective.prototype.ngOnInit = function() {
    if (!components[this.config.type]) {
      var supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        'Trying to use an unsupported type (' + this.config.type + ').\n        Supported types: ' + supportedTypes
      );
    }
    var component = this.resolver.resolveComponentFactory(components[this.config.type]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  };
  DynamicFieldDirective.ctorParameters = function() {
    return [{ type: ComponentFactoryResolver }, { type: ViewContainerRef }];
  };
  __decorate([Input()], DynamicFieldDirective.prototype, 'config', void 0);
  __decorate([Input()], DynamicFieldDirective.prototype, 'group', void 0);
  DynamicFieldDirective = __decorate(
    [
      Directive({
        selector: '[appDynamicField]'
      })
    ],
    DynamicFieldDirective
  );
  return DynamicFieldDirective;
})();
export { DynamicFieldDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1maWVsZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNvbW1vbi1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsiY29tbW9uLXJlYWN0aXZlLWZvcm0vZHluYW1pYy1maWVsZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sZ0JBQWdCLEVBQ2hCLElBQUksRUFDSixTQUFTLEVBQ1QsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBR3JGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRXJGLElBQU0sVUFBVSxHQUFvQztJQUNsRCxNQUFNLEVBQUUsbUJBQW1CO0lBQzNCLEtBQUssRUFBRSxrQkFBa0I7SUFDekIsTUFBTSxFQUFFLG1CQUFtQjtJQUMzQixJQUFJLEVBQUUsdUJBQXVCO0lBQzdCLFdBQVcsRUFBRSxrQkFBa0I7SUFDL0IsUUFBUSxFQUFFLHFCQUFxQjtJQUMvQixXQUFXLEVBQUUsd0JBQXdCO0lBQ3JDLE1BQU0sRUFBRSxtQkFBbUI7Q0FDNUIsQ0FBQztBQUtGO0lBS0UsK0JBQ1UsUUFBa0MsRUFDbEMsU0FBMkI7UUFEM0IsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFDbEMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDbEMsQ0FBQztJQUVKLDJDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRUQsd0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqQyxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxRCxNQUFNLElBQUksS0FBSyxDQUNiLHdDQUFzQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUkscUNBQ25DLGNBQWdCLENBQ3BDLENBQUM7U0FDSDtRQUNELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQ3JELFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUM3QixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUM3QyxDQUFDOztnQkF6Qm1CLHdCQUF3QjtnQkFDdkIsZ0JBQWdCOztJQU41QjtRQUFSLEtBQUssRUFBRTt5REFBcUI7SUFDcEI7UUFBUixLQUFLLEVBQUU7d0RBQWtCO0lBRmYscUJBQXFCO1FBSGpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7U0FDOUIsQ0FBQztPQUNXLHFCQUFxQixDQWdDakM7SUFBRCw0QkFBQztDQUFBLEFBaENELElBZ0NDO1NBaENZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBUeXBlLFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGb3JtQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL2Zvcm0tYnV0dG9uL2Zvcm0tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvZm9ybS1pbnB1dC9mb3JtLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL2Zvcm0tc2VsZWN0L2Zvcm0tc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vTW9kZWxzIC9maWVsZC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuL01vZGVscyAvZmllbGRDb25maWcuaW50ZXJmYWNlJztcbmltcG9ydCB7IEZvcm1EYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL2Zvcm0tZGF0ZS1waWNrZXIvZm9ybS1kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL2Zvcm0tY2hlY2tib3gvZm9ybS1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybVJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL2Zvcm0tcmFkaW8vZm9ybS1yYWRpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybU11bHRpU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL2Zvcm0tbXVsdGktc2VsZWN0L2Zvcm0tbXVsdGktc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtU2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL2Zvcm0tc2xpZGVyL2Zvcm0tc2xpZGVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHM6IHsgW3R5cGU6IHN0cmluZ106IFR5cGU8RmllbGQ+IH0gPSB7XG4gIGJ1dHRvbjogRm9ybUJ1dHRvbkNvbXBvbmVudCxcbiAgaW5wdXQ6IEZvcm1JbnB1dENvbXBvbmVudCxcbiAgc2VsZWN0OiBGb3JtU2VsZWN0Q29tcG9uZW50LFxuICBkYXRlOiBGb3JtRGF0ZVBpY2tlckNvbXBvbmVudCxcbiAgcmFkaW9idXR0b246IEZvcm1SYWRpb0NvbXBvbmVudCxcbiAgY2hlY2tib3g6IEZvcm1DaGVja2JveENvbXBvbmVudCxcbiAgbXVsdGlTZWxlY3Q6IEZvcm1NdWx0aVNlbGVjdENvbXBvbmVudCxcbiAgc2xpZGVyOiBGb3JtU2xpZGVyQ29tcG9uZW50XG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYXBwRHluYW1pY0ZpZWxkXScsXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGaWVsZERpcmVjdGl2ZSBpbXBsZW1lbnRzIEZpZWxkLCBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbmZpZzogRmllbGRDb25maWc7XG4gIEBJbnB1dCgpIGdyb3VwOiBGb3JtR3JvdXA7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50UmVmPEZpZWxkPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xuICAgICAgdGhpcy5jb21wb25lbnQuaW5zdGFuY2UuY29uZmlnID0gdGhpcy5jb25maWc7XG4gICAgICB0aGlzLmNvbXBvbmVudC5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCFjb21wb25lbnRzW3RoaXMuY29uZmlnLnR5cGVdKSB7XG4gICAgICBjb25zdCBzdXBwb3J0ZWRUeXBlcyA9IE9iamVjdC5rZXlzKGNvbXBvbmVudHMpLmpvaW4oJywgJyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUcnlpbmcgdG8gdXNlIGFuIHVuc3VwcG9ydGVkIHR5cGUgKCR7dGhpcy5jb25maWcudHlwZX0pLlxuICAgICAgICBTdXBwb3J0ZWQgdHlwZXM6ICR7c3VwcG9ydGVkVHlwZXN9YFxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxGaWVsZD4oXG4gICAgICBjb21wb25lbnRzW3RoaXMuY29uZmlnLnR5cGVdXG4gICAgKTtcbiAgICB0aGlzLmNvbXBvbmVudCA9IHRoaXMuY29udGFpbmVyLmNyZWF0ZUNvbXBvbmVudChjb21wb25lbnQpO1xuICAgIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICAgIHRoaXMuY29tcG9uZW50Lmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcbiAgfVxufVxuIl19
