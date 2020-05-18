import { __decorate } from 'tslib';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './dynamic-field.directive';
import { FormButtonComponent } from './Components/form-button/form-button.component';
import { FormInputComponent } from './Components/form-input/form-input.component';
import { FormSelectComponent } from './Components/form-select/form-select.component';
import { FormDatePickerComponent } from './Components/form-date-picker/form-date-picker.component';
import { FormCheckboxComponent } from './Components/form-checkbox/form-checkbox.component';
import { FormRadioComponent } from './Components/form-radio/form-radio.component';
import { FormSliderComponent } from './Components/form-slider/form-slider.component';
import { FormMultiSelectComponent } from './Components/form-multi-select/form-multi-select.component';
// PrimeNG Modules
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
var DynamicFormModule = /** @class */ (function() {
  function DynamicFormModule() {}
  DynamicFormModule = __decorate(
    [
      NgModule({
        imports: [
          BrowserAnimationsModule,
          CommonModule,
          ReactiveFormsModule,
          FormsModule,
          MultiSelectModule,
          CalendarModule,
          DropdownModule,
          SliderModule
        ],
        declarations: [
          DynamicFieldDirective,
          DynamicFormComponent,
          FormButtonComponent,
          FormInputComponent,
          FormSelectComponent,
          FormDatePickerComponent,
          FormCheckboxComponent,
          FormRadioComponent,
          FormMultiSelectComponent,
          FormSliderComponent
        ],
        exports: [DynamicFormComponent],
        entryComponents: [
          FormButtonComponent,
          FormInputComponent,
          FormSelectComponent,
          FormDatePickerComponent,
          FormCheckboxComponent,
          FormRadioComponent,
          FormMultiSelectComponent,
          FormSliderComponent
        ]
      })
    ],
    DynamicFormModule
  );
  return DynamicFormModule;
})();
export { DynamicFormModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXJlYWN0aXZlLWZvcm0ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1jb21tb24tY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImNvbW1vbi1yZWFjdGl2ZS1mb3JtL2NvbW1vbi1yZWFjdGl2ZS1mb3JtLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRXRHLGtCQUFrQjtBQUNsQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQXFDOUM7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQW5DN0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHVCQUF1QjtnQkFDdkIsWUFBWTtnQkFDWixtQkFBbUI7Z0JBQ25CLFdBQVc7Z0JBQ1gsaUJBQWlCO2dCQUNqQixjQUFjO2dCQUNkLGNBQWM7Z0JBQ2QsWUFBWTthQUNiO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLHFCQUFxQjtnQkFDckIsb0JBQW9CO2dCQUNwQixtQkFBbUI7Z0JBQ25CLGtCQUFrQjtnQkFDbEIsbUJBQW1CO2dCQUNuQix1QkFBdUI7Z0JBQ3ZCLHFCQUFxQjtnQkFDckIsa0JBQWtCO2dCQUNsQix3QkFBd0I7Z0JBQ3hCLG1CQUFtQjthQUNwQjtZQUNELE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDO1lBQy9CLGVBQWUsRUFBRTtnQkFDZixtQkFBbUI7Z0JBQ25CLGtCQUFrQjtnQkFDbEIsbUJBQW1CO2dCQUNuQix1QkFBdUI7Z0JBQ3ZCLHFCQUFxQjtnQkFDckIsa0JBQWtCO2dCQUNsQix3QkFBd0I7Z0JBQ3hCLG1CQUFtQjthQUNwQjtTQUNGLENBQUM7T0FDVyxpQkFBaUIsQ0FBSTtJQUFELHdCQUFDO0NBQUEsQUFBbEMsSUFBa0M7U0FBckIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IER5bmFtaWNGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEeW5hbWljRmllbGREaXJlY3RpdmUgfSBmcm9tICcuL2R5bmFtaWMtZmllbGQuZGlyZWN0aXZlJztcbmltcG9ydCB7IEZvcm1CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvZm9ybS1idXR0b24vZm9ybS1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1JbnB1dENvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9mb3JtLWlucHV0L2Zvcm0taW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1TZWxlY3RDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvZm9ybS1zZWxlY3QvZm9ybS1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IEZvcm1EYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL2Zvcm0tZGF0ZS1waWNrZXIvZm9ybS1kYXRlLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybUNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL2Zvcm0tY2hlY2tib3gvZm9ybS1jaGVja2JveC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybVJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL2Zvcm0tcmFkaW8vZm9ybS1yYWRpby5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybVNsaWRlckNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9mb3JtLXNsaWRlci9mb3JtLXNsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRm9ybU11bHRpU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL2Zvcm0tbXVsdGktc2VsZWN0L2Zvcm0tbXVsdGktc2VsZWN0LmNvbXBvbmVudCc7XG5cbi8vIFByaW1lTkcgTW9kdWxlc1xuaW1wb3J0IHsgTXVsdGlTZWxlY3RNb2R1bGUgfSBmcm9tICdwcmltZW5nL211bHRpc2VsZWN0JztcbmltcG9ydCB7IENhbGVuZGFyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jYWxlbmRhcic7XG5pbXBvcnQgeyBEcm9wZG93bk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvZHJvcGRvd24nO1xuaW1wb3J0IHsgU2xpZGVyTW9kdWxlIH0gZnJvbSAncHJpbWVuZy9zbGlkZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTXVsdGlTZWxlY3RNb2R1bGUsXG4gICAgQ2FsZW5kYXJNb2R1bGUsXG4gICAgRHJvcGRvd25Nb2R1bGUsXG4gICAgU2xpZGVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIER5bmFtaWNGaWVsZERpcmVjdGl2ZSxcbiAgICBEeW5hbWljRm9ybUNvbXBvbmVudCxcbiAgICBGb3JtQnV0dG9uQ29tcG9uZW50LFxuICAgIEZvcm1JbnB1dENvbXBvbmVudCxcbiAgICBGb3JtU2VsZWN0Q29tcG9uZW50LFxuICAgIEZvcm1EYXRlUGlja2VyQ29tcG9uZW50LFxuICAgIEZvcm1DaGVja2JveENvbXBvbmVudCxcbiAgICBGb3JtUmFkaW9Db21wb25lbnQsXG4gICAgRm9ybU11bHRpU2VsZWN0Q29tcG9uZW50LFxuICAgIEZvcm1TbGlkZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW0R5bmFtaWNGb3JtQ29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgRm9ybUJ1dHRvbkNvbXBvbmVudCxcbiAgICBGb3JtSW5wdXRDb21wb25lbnQsXG4gICAgRm9ybVNlbGVjdENvbXBvbmVudCxcbiAgICBGb3JtRGF0ZVBpY2tlckNvbXBvbmVudCxcbiAgICBGb3JtQ2hlY2tib3hDb21wb25lbnQsXG4gICAgRm9ybVJhZGlvQ29tcG9uZW50LFxuICAgIEZvcm1NdWx0aVNlbGVjdENvbXBvbmVudCxcbiAgICBGb3JtU2xpZGVyQ29tcG9uZW50XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNGb3JtTW9kdWxlIHsgfVxuIl19
