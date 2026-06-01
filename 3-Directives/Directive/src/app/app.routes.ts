import { Routes } from '@angular/router';
import { NgforComponent } from './Structural/ngfor/ngfor.component';
import { NgifComponent } from './Structural/ngif/ngif.component';
import { NgswtichComponent } from './Structural/ngswtich/ngswtich.component';
import { NgStyleComponent } from './Atribut/ng-style/ng-style.component';
import { NgClassComponent } from './Atribut/ng-class/ng-class.component';

export const routes: Routes = [
    {path:'Ngfor' , component:NgforComponent},
    {path:'Ngif', component:NgifComponent},
    {path:'Ngswtich', component:NgswtichComponent},
    {path:'NgClass', component:NgClassComponent},
    {path:'NgStyle', component:NgStyleComponent},
    
];
