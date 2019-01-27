import { ValidatorFn } from '@angular/forms';
import { element } from '@angular/core/src/render3';

export interface FieldConfig {
  disabled?: boolean,
  label?: string,
  name: string,
  id?: string,
  options?: string[],
  placeholder?: string,
  element: string,
  type?: string,
  validation?: ValidatorFn[],
  value?: any
}
