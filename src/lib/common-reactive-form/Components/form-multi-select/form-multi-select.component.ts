import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../Models /field.interface';
import { FieldConfig } from '../../Models /fieldConfig.interface';

@Component({
  selector: 'app-form-multi-select',
  template: `
    <div [formGroup]="group">
      <label>{{ config.label }}</label>
      <p-multiSelect
        [formControlName]="config.name"
        [options]="config.options"
      ></p-multiSelect>
      <ng-container
        *ngIf="
          group.controls[this.config.name].touched &&
          group.controls[this.config.name].invalid
        "
      >
        <ng-container *ngFor="let validation of config.validations">
          <div *ngIf="group.get(config.name).hasError(validation.name)">
            {{ validation.message }}
          </div>
        </ng-container>
      </ng-container>
    </div>
  `,
})
export class FormMultiSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
