import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RubricComponent } from './rubric/rubric.component';
import { RubricbuilderComponent } from './rubricbuilder/rubricbuilder.component';
import { DynamicFormEntryComponent } from './dynamic-form/dynamic-form-entry.component';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/rubric', pathMatch: 'full' }, 
  {path: 'rubric', component: RubricComponent},
  {path: 'rubricbuilder', component: RubricbuilderComponent},
  //{path: 'dynamicform', component: DynamicFormModule},
  { path: 'rubric/:json', component: RubricComponent }, //route with param
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DynamicFormModule,
    RouterModule.forRoot(appRoutes),
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    RubricComponent,
    RubricbuilderComponent,
    DynamicFormEntryComponent,
    PageNotFoundComponent,
  ],
  providers: [],
})
export class AppModule { }
