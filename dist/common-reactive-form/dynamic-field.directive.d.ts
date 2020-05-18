import { ComponentFactoryResolver, OnInit, ViewContainerRef, OnChanges, ComponentRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from './Models /field.interface';
import { FieldConfig } from './Models /fieldConfig.interface';
export declare class DynamicFieldDirective implements Field, OnChanges, OnInit {
  private resolver;
  private container;
  config: FieldConfig;
  group: FormGroup;
  component: ComponentRef<Field>;
  constructor(resolver: ComponentFactoryResolver, container: ViewContainerRef);
  ngOnChanges(): void;
  ngOnInit(): void;
}
