import { FormGroup } from '@angular/forms';
import { Field } from '../../Models /field.interface';
import { FieldConfig } from '../../Models /fieldConfig.interface';
export declare class FormMultiSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
