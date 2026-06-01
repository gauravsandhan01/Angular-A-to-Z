import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {


  students = [

    {
      id: 101,
      name: 'Gaurav'
    },

    {
      id: 102,
      name: 'Rahul'
    },

    {
      id: 103,
      name: 'Amit'
    }

  ];

}
