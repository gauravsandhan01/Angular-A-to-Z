import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ContacComponent } from './pages/contac/contac.component';
import { HeaderComponent } from './component/header/header.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserComponent } from './pages/user/user.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

export const routes: Routes = [
    {path:'' , component:HomeComponent},
    {path:'home' , component:HomeComponent},
    {path:'header' , component:HeaderComponent},
    {path:'login', component:LoginComponent},
    {path:'about', component:AboutComponent},
    {path:'contac', component:ContacComponent},
    {path:'profile' , component:ProfileComponent},
    {path:'user' , component:UserComponent},
    {path:'user-detail/:id' ,component:UserDetailsComponent},
    {path:'**' ,component:PagenotfoundComponent}
];
