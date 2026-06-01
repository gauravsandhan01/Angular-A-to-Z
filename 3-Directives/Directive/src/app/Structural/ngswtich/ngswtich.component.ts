import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ngswtich',
  standalone: true,
  imports: [NgSwitch,NgSwitchCase,NgSwitchDefault,FormsModule],
  templateUrl: './ngswtich.component.html',
  styleUrl: './ngswtich.component.css'
})
export class NgswtichComponent {

  grade='';
}
