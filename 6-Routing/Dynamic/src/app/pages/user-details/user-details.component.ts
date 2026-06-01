import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {

  constructor(
    private route: ActivatedRoute,
    private studentService :StudentService){}

    user :any ;
    ngOnInit(){

      const id = Number( this.route.snapshot.params['id'] );

       this.user =
      this.studentService.getuserbyid(id);

    }
}
