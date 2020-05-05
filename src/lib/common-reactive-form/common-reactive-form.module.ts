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

@NgModule({
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
  ],
})
export class DynamicFormModule { }
