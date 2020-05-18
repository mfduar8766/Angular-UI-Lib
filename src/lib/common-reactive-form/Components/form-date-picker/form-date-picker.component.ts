import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../Models /field.interface';
import { FieldConfig } from '../../Models /fieldConfig.interface';

@Component({
  selector: 'app-form-date-picker',
  template: `
    <div class="demo-full-width margin-top" [formGroup]="group">
      <label>{{ config.label }}</label>
      <input [type]="config.inputType" [placeholder]="config.placeholder" [formControlName]="config.name" />
      <ng-container *ngIf="group.controls[this.config.name].touched && group.controls[this.config.name].invalid">
        <ng-container *ngFor="let validation of config.validations">
          <div *ngIf="group.get(config.name).hasError(validation.name)">
            {{ validation.message }}
          </div>
        </ng-container>
      </ng-container>
    </div>
  `
})
export class FormDatePickerComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
