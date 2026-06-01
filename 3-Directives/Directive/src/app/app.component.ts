import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgforComponent } from './Structural/ngfor/ngfor.component';
import { NgswtichComponent } from './Structural/ngswtich/ngswtich.component';
import { NgifComponent } from './Structural/ngif/ngif.component';
import { NgClassComponent } from './Atribut/ng-class/ng-class.component';
import { NgStyleComponent } from './Atribut/ng-style/ng-style.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgforComponent,NgswtichComponent,NgifComponent,NgClassComponent,NgStyleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directive';
}
