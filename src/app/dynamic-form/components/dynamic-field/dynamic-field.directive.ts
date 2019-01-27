import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormButtonComponent } from '../form-button/form-button.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormSelectComponent } from '../form-select/form-select.component';
import { FormPComponent } from '../form-p/form-p.component';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

const components: {[type: string]: Type<Field>} = {
  button: FormButtonComponent,
  input: FormInputComponent,
  select: FormSelectComponent,
  p: FormPComponent
};

@Directive({
  selector: '[dynamicField]'
})
export class DynamicFieldDirective implements Field, OnChanges, OnInit {
  @Input() config: FieldConfig;
  @Input() group: FormGroup;

  component: ComponentRef<Field>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.component) {
      this.component.instance.config = this.config;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    //console.log('dynamic-field.directive')
    if (!components[this.config.element]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.config.element}).
        Supported types: ${supportedTypes}`
      );
    }
    const component = this.resolver.resolveComponentFactory<Field>(components[this.config.element]);
    this.component = this.container.createComponent(component);
    this.component.instance.config = this.config;
    this.component.instance.group = this.group;
  }
}
