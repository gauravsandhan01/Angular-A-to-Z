import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {

  isLogin=true;

  Show= true ;

  block=0;

  isLoggin= false ;

  upadateBlock(){
    this.block++;
  }
}
