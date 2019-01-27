# JSON2ngForm

Work in progress

## Project description
My aim was to create a website with a rubric, i.e. a form with checkboxes (actually radio buttons) and text. The main structure for each textbox should be the same. 

For example the following rubric has two components, each consisting in text for criterion, a variable number of radio buttons with associated number of points and feedback text: 

**Criterion: Spelling, punctuation, grammar**
- [ ] 0 points  
&nbsp;&nbsp;&nbsp;&nbsp; Feedback: Needs improvement!
- [x] 3 points  
&nbsp;&nbsp;&nbsp;&nbsp;Feedback: Satisfactory
- [ ] 5 points  
&nbsp;&nbsp;&nbsp;&nbsp;Feedback: Excellent

**Criterion: Text comprehension**
- [ ] 0 points  
&nbsp;&nbsp;&nbsp;&nbsp; Feedback: Several required elements are missing
- [x] 5 points   
&nbsp;&nbsp;&nbsp;&nbsp; Feedback: The text content is clearly identified and reproduced

I wanted to make this process dynamic and let the user create the rubric. In particular I needed two webpages: 
1. A page allowing users to generate a rubric. The user should adding each component (criterion, checkboxes with associated points and feedback) and type in text, number points, feedback. The specifications for the resulting rubric should be stored as json;
2. As a final result, create the rubric as a form from a json specification.

## Progress:
Point 2 above is implemented and works. Check it at the [/rubric/formspec.json](http://localhost:4200/rubric/formspec.json) endpoint


<a href="url"><img src="https://github.com/aless80/JSON2ngForm/blob/master/img/02_rubric.png" height="400" ></a>






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
