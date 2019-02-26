import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ReadjsonService } from "../services/readjson.service";
import { SubmitRubricService } from '../services/submit-rubric.service';
import { environment } from '../../environments/environment';

@Component({
  selector: "app-rubric",
  templateUrl: "./rubric.component.html",
  styleUrls: ["./rubric.component.css"]
})
export class RubricComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private readjson: ReadjsonService,
    private route: ActivatedRoute,
    private submitRubricService: SubmitRubricService
  ) {}
  
  prod = environment.production;
  json = [];
  keys = [];
  values = [];
  rubricForm = new FormGroup({
    /* Example:
      spelling: new FormControl(),
      comprehension: new FormControl(),
    */
  });

  //Populate the FormGroup
  createForm(group) {
    return this.fb.group(group);
  }

  ngOnInit() {
    /// Read the json file, populate the form group
    // The json file is given by its name. Its path is the /assets folder
    var jsonfile: string;
    if (typeof this.route.snapshot.params.json !== 'undefined') {
      jsonfile = this.route.snapshot.params.json;
    } else {
      //Use a demo json file in /assets
      jsonfile = "formspec";
    }
    if (!jsonfile.endsWith(".json")) {
      jsonfile += '.json';
    }
    // Read the json, populate variables
    var localrubric = localStorage.getItem('rubric');
    if (localrubric !== null) {
      console.log("JSON rubric from localStorage: ");
      this.populateVarsAndForm(JSON.parse(localrubric))
    } else {
      let path = "../../assets/";
      this.readjson.getJSON(path + jsonfile).subscribe(data => {
        console.log("JSON rubric from "+path+jsonfile+" : ");
        this.populateVarsAndForm(data)
      });
    }
  }

  populateVarsAndForm(json){
    this.json = json;
    console.log(this.json)
    this.json.forEach((value, i) => {
      this.keys[i] = value["name"];
      this.values[i] = value["radio"][0].score;
    });
    let group = {};
    this.keys.forEach((key, i) => {
      group[key] = this.values[i];
    });
    this.rubricForm = this.createForm(group);
  }

  onSubmit() {
    console.log("onSubmit():", this.rubricForm.value);
    var name_score = this.rubricForm.value;
    var jsonout = [];
    Object.keys(this.rubricForm.value).forEach((key, i) => {
      let res = {};
      res["name"] = key;
      res["criterion"] = this.json[i]["criterion"];
      res["score"] = parseInt(this.rubricForm.value[key]);
      for (var j in this.json[i]["radio"]) {
        if (this.json[i]["radio"][j]["score"] == this.rubricForm.value[key]) {
          res["feedback"] = this.json[i]["radio"][j]["feedback"];
          break;
        }
      }
      jsonout.push(res);
    });
    console.log("jsonout:", jsonout);
    this.submitRubricService.postJSON(jsonout);
  }
}
