import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../Models /field.interface';
import { FieldConfig } from '../../Models /fieldConfig.interface';

@Component({
  selector: 'app-form-slider',
  template: `
    <div style="display: 'flex'; align-items: 'center';" [formGroup]="group">
      <label>{{ config.label }}</label>
      <p-slider [style]="{ width: '300px' }" [formControlName]="config.name"></p-slider>
    </div>
  `
})
export class FormSliderComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
