import { OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FieldConfig } from '../Models /fieldConfig.interface';
export declare class DynamicFormComponent implements OnInit {
  private fb;
  config: FieldConfig[];
  formSubmittedValues: EventEmitter<any>;
  form: FormGroup;
  get controls(): FieldConfig[];
  get changes(): import('rxjs').Observable<any>;
  get valid(): boolean;
  get value(): any;
  constructor(fb: FormBuilder);
  ngOnInit(): void;
  createGroup(): FormGroup;
  bindValidations(validations: any): import('@angular/forms').ValidatorFn;
  handleSubmit(event: Event): void;
  setDisabled(name: string, disable: boolean): void;
  validateAllFormFields(formGroup: FormGroup): void;
}
