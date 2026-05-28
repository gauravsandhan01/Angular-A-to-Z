import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentForm = new FormGroup({

    name: new FormControl('', Validators.required),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    course: new FormControl('', Validators.required)

  });

  saveData() {

    console.log(this.studentForm.value);

}
}