import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {

  students=["ram", "sham" , "jon" , "peter"];

  studentdata=[
    {
      name:'ram',
      id:1,
      city:'nashik'
    },
    {
      name:'ram',
      id:2,
      city:'pune'
    },
    {
      name:'jon',
      id:3,
      city:'mumbai'
    },
    {
      name:'peter',
      id:4,
      city:'goa'
    }
  ]
}
