import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  user = [

    {
      id:101,
      name:'Gaurav',
      city : 'nashik',
      age: 23
    },

    {
      id:102,
      name:'Rahul',
      city : 'Pune',
      age: 23
    },

    {
      id:103,
      name:'Amit',
      city : 'Mumbai',
      age: 23
    }

  ];


  getuserbyid(id:number){
    return this.user.find(
      user => user.id == id);
    
  }
}
