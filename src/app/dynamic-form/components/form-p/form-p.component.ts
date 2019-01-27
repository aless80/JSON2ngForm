import { Component, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'app-form-p',
  styleUrls: ['./form-p.component.css'],
  template: `
    <p>{{config.value}}</p>
  `
})
export class FormPComponent implements Field {
  config: FieldConfig;
  group: FormGroup;

  constructor() { }
  
}