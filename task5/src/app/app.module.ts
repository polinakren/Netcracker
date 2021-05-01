import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FormComponent } from "./form/form.component";
import { StudentsComponent } from "./students/students.component";

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FormComponent],
  providers: [],
  bootstrap: [AppComponent, FormComponent]
})
export class AppModule { }
