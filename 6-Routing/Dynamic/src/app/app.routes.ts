import { Routes } from '@angular/router';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';

export const routes: Routes = [

    {
    path:'',
    component:UserDetailsComponent

  },



    {
    path: 'students',
    component: StudentListComponent
  },
    
  {
    path: 'students',
    component: StudentListComponent
  },
  

  {
    path: 'student/:id/:name',
    component: StudentDetailComponent
  }


];
