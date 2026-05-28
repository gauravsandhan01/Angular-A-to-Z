import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolutionComponent } from './interpolution/interpolution.component';
import { MathComponent } from './interpolution/assigment/math/math.component';
import { StudentComponent } from './interpolution/assigment/student/student.component';
import { FunctioncallComponent } from './interpolution/assigment/functioncall/functioncall.component';

const routes: Routes = [
  {path:'', component:InterpolutionComponent},
  {path:'math', component:MathComponent},
  {path:'student' , component:StudentComponent},
  {path:'functioncall', component:FunctioncallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
