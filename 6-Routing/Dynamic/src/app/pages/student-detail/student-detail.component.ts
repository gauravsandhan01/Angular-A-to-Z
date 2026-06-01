import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent {
  studentId: any;
  studentname:any ;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.studentId =
    this.route.snapshot.params['id'];

    this.studentname =
    this.route.snapshot.params['name'];

    console.log(this.studentId);

  }

}
