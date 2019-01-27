import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { FormGroup, FormBuilder } from "@angular/forms";
import { FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { ReadjsonService } from "../services/readjson.service";

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
    private route: ActivatedRoute
  ) {}

  title = "Angular Forms from json";
  jsonfile: string = "formspec";
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
    this.jsonfile = this.route.snapshot.params.json;
    if (!this.jsonfile.endsWith(".json")) {
      this.jsonfile += '.json';
    }
    // Read the json, populate variables
    let path = "../../assets/";
    this.readjson.getJSON(path + this.jsonfile).subscribe(data => {
      this.json = data;
      this.json.forEach((value, i) => {
        this.keys[i] = value["name"];
        this.values[i] = value["radio"][0].score;
      });
      let group = {};
      this.keys.forEach((key, i) => {
        group[key] = this.values[i];
      });
      this.rubricForm = this.createForm(group);
      console.log("this.jsonfile:", this.jsonfile);
      console.log("json:", this.json);
      console.log("keys:", this.keys);
      console.log("values:", this.values);
      console.log("this.rubricForm.value", this.rubricForm.value);
    });
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
  }
}
