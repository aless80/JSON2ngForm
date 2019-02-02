import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
@Component({
  selector: "app-rubricbuilder",
  templateUrl: "./rubricbuilder.component.html",
  styleUrls: ["./rubricbuilder.component.css"]
})
export class RubricbuilderComponent implements OnInit {
  constructor() {}
  showImportArea:boolean = false;
  rubrics: any = [];
  parsedJSON:string;

  ngOnInit() {
    this.addRubricUnit2json(this.rubrics.length);
  }

  clickAppendRubricUnit() {
    this.addRubricUnit2json(this.rubrics.length);
  }

  clickAppendPoint(event) {
    console.log("clickAppendPoint event.srcElement.id",event.srcElement.id);
    //Get the rubric index (i in html)
    let rubric_ind = parseInt(event.srcElement.id.split('_')[1]);
    let radio_ind = this.rubrics[rubric_ind].radio.length;
    this.addRadio2json(rubric_ind, radio_ind);
  }

  addRubricUnit2json(rubric_ind:number) {    
    var name = "rubric_"+rubric_ind
    const radio = {
      score: 0,
      feedback: ""
    }
    this.rubrics.splice(rubric_ind, 0, {
      name: name,
      criterion: "",
      radio: [ radio ]
    });
  }
  
  addRadio2json(rubric_ind:number, radio_ind:number, radio_obj:any='') {
    console.log('addRadio2json to rubric_ind:',rubric_ind)
    if (radio_obj == '') {
      radio_obj = {
        score: 0,
        feedback: ""
      }
    }
    this.rubrics[rubric_ind]['radio'].splice(radio_ind, 0, radio_obj);
  }
  removeRadioFromjson(rubric_ind:number, radio_ind:number) {
    this.rubrics[rubric_ind]['radio'].splice(radio_ind, 1);
  }
  clickMoveUpRadio(event){
    let [i,j] = this.getIndicesFromIDs(event);
    if (j == 0) return
    const radio_obj = this.rubrics[i].radio[j];
    this.removeRadioFromjson(i,j);
    this.addRadio2json(i, j-1, radio_obj);
  }
  clickMoveDownRadio(event){
    let [i,j] = this.getIndicesFromIDs(event);
    if (j == this.rubrics.length) return
    const radio_obj = this.rubrics[i].radio[j];
    this.removeRadioFromjson(i,j)
    this.addRadio2json(i, j+1, radio_obj)
  }
  clickRemoveRadio(event){
    let [i,j] = this.getIndicesFromIDs(event);
    this.removeRadioFromjson(i,j);
  }
  //Retrieves rubric and radio indices from event and ID in markup
  private getIndicesFromIDs(event) {
    //IDs are formatted as string_i_j
    return event.srcElement.id.split('_').slice(1)
  }

  exportJSON() {
    of(this.rubrics).subscribe((res) => {
      const element = document.getElementById('download');
      element.setAttribute('href', `data:'text/json';charset=utf-8,${encodeURIComponent(JSON.stringify(res))}`);
      var event = new MouseEvent("click");
      element.dispatchEvent(event);
    }
  )}

  importJSON2Rubric() {
    console.log(this.parsedJSON)
    try {
      this.rubrics =  JSON.parse(this.parsedJSON);
    } catch (error) {
      console.log("error:",error)
      if (error instanceof SyntaxError) {
          alert("There was a syntax error. Please correct it and try again:\n" + error.message);
      } else {
          throw error;
      }
    }
    this.showImportArea = false;
  }

  test(){
    console.log(this.rubrics)
  }
}