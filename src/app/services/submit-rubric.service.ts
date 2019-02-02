import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmitRubricService {
  uri: string = '';
  constructor(private http: HttpClient) { }

  postJSON(json) {
    this.http.post(`${this.uri}/submitJSON`,json);
  }
}
