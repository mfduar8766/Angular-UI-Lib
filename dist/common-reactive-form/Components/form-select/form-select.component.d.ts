import { FormGroup } from '@angular/forms';
import { Field } from '../../Models /field.interface';
import { FieldConfig } from '../../Models /fieldConfig.interface';
export declare class FormSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
