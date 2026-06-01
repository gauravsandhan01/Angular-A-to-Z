import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData={
  name:'' ,
  password :''
  }

  login(){
    console.log(this.loginData);
    alert(" login is successfull")

    this.loginData ={
      name:'',
      password:''
    };
  }


}
