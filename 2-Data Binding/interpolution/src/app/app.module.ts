import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolutionComponent } from './interpolution/interpolution.component';
import { MathComponent } from './interpolution/assigment/math/math.component';
import { StudentComponent } from './interpolution/assigment/student/student.component';
import { FunctioncallComponent } from './interpolution/assigment/functioncall/functioncall.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolutionComponent,
    MathComponent,
    StudentComponent,
    FunctioncallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
