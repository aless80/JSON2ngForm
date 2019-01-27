import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs'; //Observable returned with asynch operation
import { FieldConfig } from '../dynamic-form/models/field-config.interface';

@Injectable({
  providedIn: 'root'
})
export class ReadjsonService {

  constructor(private http: HttpClient) { 

  }

  config: FieldConfig[];

  public getJSON(json): Observable<any> {
    return this.http.get(json)
  }

  readjson_promise(): Promise<any>{
    return Promise.resolve([10, 20, 30]);
    /*this.http.get('../../assets/config.json').subscribe(
      data => {
        this.config = data as FieldConfig[];
        console.log('aaa',this.config);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );*/
  }

  readjson(json) {
    this.http.get(json).subscribe(
      data => {
        this.config = data as FieldConfig[];
        console.log('aaa',this.config);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

}
