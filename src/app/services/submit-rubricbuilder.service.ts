import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmitRubricbuilderService {
  uri: string = '';
  constructor(private http: HttpClient) { }

  submitRubricbuilder(rubrics) {
    console.log(`/submitrubricbuilder`);
    this.http.post(`/submitrubricbuilder`, rubrics)
      .subscribe()
  }
}