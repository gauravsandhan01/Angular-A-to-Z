import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { pipe } from 'rxjs';
import { CustomPipe } from '../custom.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule,CustomPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  name= 'gaurav sandhan'

  price= 23456.6325 ;

  attendance =0.90;

  today = new Date();

  phone = '9765289547'; 

}
