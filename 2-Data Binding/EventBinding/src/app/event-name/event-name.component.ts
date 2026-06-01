import { Component } from '@angular/core';

@Component({
  selector: 'app-event-name',
  templateUrl: './event-name.component.html',
  styleUrls: ['./event-name.component.css']
})
export class EventNameComponent {
  eventName = 'Initial Event Name';

  count=0;

  change(){
    alert("jay bhole baba");
  }

  thecount(){
    this.count++;
  }

  inputBlur() {
  console.log("Input Blur");
}

}
