import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-rubricbuilder",
  templateUrl: "./rubricbuilder.component.html",
  styleUrls: ["./rubricbuilder.component.css"]
})
export class RubricbuilderComponent implements OnInit {
  constructor() {}

  rubrics: any = [];

  /*radio_unit: object = {
    score: 0,
    feedback: ""
  };

  rubric_unit: object = {
    name: "default",
    criterion: "",
    radio: [ ]
  };
  */

  ngOnInit() {
    this.addRubricUnit2json(this.rubrics.length);
  }

  clickAppendRubricUnit() {
    this.addRubricUnit2json(this.rubrics.length);
  }

  clickAppendPoint(event) {
    console.log("clickAddPoint event.srcElement.id",event.srcElement.id);
    //Get the rubric index (i in html)
    let rubric_ind = parseInt(event.srcElement.id.split('_')[1]);
    let radio_ind = this.rubrics[rubric_ind].radio.length;
    this.addRadio2json(rubric_ind, radio_ind);
  }

  addRubricUnit2json(rubric_ind) {    
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

  addRadio2json(rubric_ind, radio_ind) {
    console.log('addPoint to rubric_ind:',rubric_ind)
    this.rubrics[rubric_ind]['radio'].splice(radio_ind, 0, {
      score: 0,
      feedback: ""
    });
  }

  clickMoveUp(){

  }

  clickMoveDown(){

  }
  clickRemove(){
    
  }
  test(){
    console.log(this.rubrics)
  }
}
