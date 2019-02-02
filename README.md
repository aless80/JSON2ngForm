# JSON2ngForm

Work in progress

## Project description
My aim was to create a website with a rubric, i.e. a form with checkboxes (actually radio buttons) and text. The main structure for each textbox should be the same. 

For example the following rubric has two "components" (by component I just mean two repeated elements, not Angular components). Each component consists in a line of text (a criterion by which to judge some assignment), and a variable number of radio buttons with associated number of points and feedback text: 

&nbsp;&nbsp;&nbsp;**Criterion: Spelling, punctuation, grammar**
&nbsp;&nbsp;&nbsp;- [ ] 0 points  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Feedback: Needs improvement!
&nbsp;&nbsp;&nbsp;- [x] 3 points  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feedback: Satisfactory
&nbsp;&nbsp;&nbsp;- [ ] 5 points  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feedback: Excellent

&nbsp;&nbsp;&nbsp;**Criterion: Text comprehension**
&nbsp;&nbsp;&nbsp;- [ ] 0 points  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Feedback: Several required elements are missing
&nbsp;&nbsp;&nbsp;- [x] 5 points   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Feedback: The text content is clearly identified and reproduced

I wanted to make this process dynamic. In particular I needed two webpages: 
1. A page allowing users to generate a rubric with any number of components. The user should add each component (criterion, checkboxes with associated points and feedback) and type in text, number points, feedback. The specifications for the resulting rubric should be importable/exportable as json;
2. A page showing the rubric as a form from a json specification as the one in the previous point:


## Progress:
Point 1 and 2 above are implemented and work. Check them at the [/rubric/formspec.json](http://localhost:4200/rubric/formspec.json) and [/rubricbuilder](http://localhost:4200/rubricbuilder.json) endpoints

Instead of reading from a local json file for the feature in point 2 (/rubric/formspec.json), I am going to store the json from point 1 in LocalStorage and use that one. In reality one could store the json in a database. 

/rubricbuilder             |  /rubric
:-------------------------:|:-------------------------:
<a href="url"><img src="https://github.com/aless80/JSON2ngForm/blob/master/img/01_rubricbuilder.png" height="400" ></a>  | <a href="url"><img src="https://github.com/aless80/JSON2ngForm/blob/master/img/02_rubric.png" height="400" ></a>











## Generated README:
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
