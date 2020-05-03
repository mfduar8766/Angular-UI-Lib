import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../Models /field.interface';
import { FieldConfig } from '../../Models /fieldConfig.interface';

@Component({
  selector: 'app-form-input',
  template: `
    <div class="dynamic-field form-input" [formGroup]="group">
      <label>{{ config.label }}</label>
      <input
        [type]="config.inputType"
        [placeholder]="config.placeholder"
        [formControlName]="config.name"
      />
      <ng-container *ngFor="let validation of config.validations">
      <div *ngIf="group.get(config.name).hasError(validation.name)">
        {{ validation.message }}
      </div>
    </ng-container>
    </div>
  `,
})
export class FormRadioComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
