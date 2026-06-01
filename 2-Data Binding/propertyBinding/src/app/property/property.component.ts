import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [],
  templateUrl: './property.component.html',
  styleUrl: './property.component.css'
})
export class PropertyComponent {
  image ="assets/p1.jpg";

  name ="gaurav";

  isdisable=true ;


  hideText = true;

  website = "https://www.google.com";

  toggleButton(){
    this.isdisable = !this.isdisable;
  }

  toggleButton2(){
    this.hideText=!this.hideText;
  }

  
}
