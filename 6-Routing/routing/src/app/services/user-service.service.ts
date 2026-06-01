import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userList(){
   return[
      {
        id:1, name:'anil' , email:"anil@test.com", city:'nashik',
      },
      {
        id:2, name:'Ram' , email:"ram@test.com", city:'pune',
      },
      {
        id:3, name:'om' , email:"om@test.com", city:'Goa',
      },
      {
        id:4, name:'rohit' , email:"rohit@test.com", city:'mumbai',
      }

    ]
    }
  }

