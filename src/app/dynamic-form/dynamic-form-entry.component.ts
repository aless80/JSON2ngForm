import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { FieldConfig } from './models/field-config.interface';
import { DynamicFormComponent } from '../dynamic-form/containers/dynamic-form/dynamic-form.component';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ReadjsonService } from '../services/readjson.service';
@Component({
  selector: 'app-dynamic-form-entry',
  templateUrl: './dynamic-form-entry.component.html',
  styleUrls: ['./dynamic-form-entry.component.scss']
})
export class DynamicFormEntryComponent implements OnInit, AfterViewInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  constructor(
    private http: HttpClient,
    private readjson: ReadjsonService) { }

  ngOnInit () {
    //console.log('app.component ngOnInit')
    this.readjson.getJSON('../../assets/dynamicform.json').subscribe(data => {
      this.config.forEach(element => {
        data.push(element) //as FieldConfig[];  
      });
      this.config = data      
      //console.log('app.component readjson.getJSON this.config:',this.config)
    });
    /*this.http.get('../../assets/dynamicform.json').subscribe(
      data => {
        this.config2 = data as FieldConfig[];
        console.log('app.component http.get this.config:',this.config);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );*/
  }

  config: FieldConfig[] = [
    {
      "label": "Submit",
      "name": "submit",
      "element": "button",
    }
  ];
  
  ngAfterViewInit() {
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    //this.form.setDisabled('submit', true);
    //this.form.setValue('name', 'Todd Motto');
  }

  submit(value: {[name: string]: any}) {
    console.log("submit:",value);
  }
}
