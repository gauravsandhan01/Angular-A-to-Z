import { Component } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { signal } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
      userData:any=signal("");
  constructor(public userService:UserServiceService){}
    ngOnInit(){
      const data = this.userService.userList();
      this.userData.set(data)
    }
  }

