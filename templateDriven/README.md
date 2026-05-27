Template Driven Form Full Explanation (TS + HTML)

चल आता complete form basic पासून समजून घेऊ.

हा example आपण Student Form चा घेऊ.

Final Output काय असेल?

User:

Name टाकेल
Email टाकेल
Course टाकेल
Save button click करेल

आणि data TypeScript मध्ये जाईल.

Step 1 → TypeScript Code
add-student.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-student',

  standalone: true,

  imports: [FormsModule],

  templateUrl: './add-student.component.html',

  styleUrls: ['./add-student.component.css']
})

export class AddStudentComponent {

  student = {

    name: '',
    email: '',
    course: ''

  };

  saveData() {

    console.log(this.student);

  }

}
आता Line By Line समजून घेऊ
1)
import { Component } from '@angular/core';

👉 Angular चा Component import करतो.

यामुळे Angular ला कळतं की हा component आहे.

2)
import { FormsModule } from '@angular/forms';

👉 Template Driven Forms साठी important.

हे import केल्यामुळे:

ngModel
ngForm
ngSubmit

हे directives काम करतात.

3)
@Component({

👉 हा decorator आहे.

Angular ला component ची माहिती देतो.

4)
selector: 'app-add-student',

👉 HTML मध्ये component call करण्यासाठी.

उदा:

<app-add-student></app-add-student>
5)
standalone: true,

👉 हा standalone component आहे.

म्हणजे:

❌ app.module.ts लागत नाही.

6)
imports: [FormsModule],

👉 Standalone component असल्यामुळे इथे FormsModule import करतो.

7)
templateUrl: './add-student.component.html',

👉 HTML file connect करतो.

8)
styleUrls: ['./add-student.component.css']

👉 CSS file connect करतो.

9)
export class AddStudentComponent {

👉 Component class start.

सगळा logic इथे लिहितो.

10)
student = {

  name: '',
  email: '',
  course: ''

};

👉 हा object आहे.

Form data store करतो.

सुरुवातीला
name: ''

empty string आहे.

User value टाकल्यावर
name: 'Gaurav'

होईल.

Final Object
{
  name: 'Gaurav',
  email: 'abc@gmail.com',
  course: 'Angular'
}
11)
saveData() {

  console.log(this.student);

}

👉 Function आहे.

Form submit झाल्यावर call होतो.

this.student म्हणजे?

Current object data.

console.log()

Browser console मध्ये data दाखवतो.

आता HTML समजून घेऊ
add-student.component.html
<h2>Add Student</h2>

<form #myForm="ngForm"
(ngSubmit)="saveData()">

  <input
  type="text"
  placeholder="Enter Name"

  name="name"

  [(ngModel)]="student.name"

  required>

  <br><br>

  <input
  type="email"
  placeholder="Enter Email"

  name="email"

  [(ngModel)]="student.email"

  required>

  <br><br>

  <input
  type="text"
  placeholder="Enter Course"

  name="course"

  [(ngModel)]="student.course"

  required>

  <br><br>

  <button [disabled]="myForm.invalid">

    Save

  </button>

</form>
आता Line By Line समजून घेऊ
1)
<h2>Add Student</h2>

👉 Heading.

2)
<form #myForm="ngForm">
form tag

Form start करतो.

#myForm

Template variable आहे.

Full form access देतो.

ngForm

Angular form directive.

आता myForm मध्ये काय येतं?
Valid
Invalid
Touched
Dirty

सगळी form information.

3)
(ngSubmit)="saveData()"

👉 Form submit झाल्यावर function call.

User button click करतो

↓

saveData()

run होतं.

4)
<input type="text">

👉 Text input field.

5)
placeholder="Enter Name"

👉 Hint text.

6)
name="name"

👉 Important.

Angular field identify करतो.

जर name दिलं नाही तर error येईल
name attribute must be set
7)
[(ngModel)]="student.name"

🔥 Most Important Part

याला म्हणतात:
Two-Way Data Binding
Meaning
HTML ↔ TypeScript

दोन्ही side data sync होतो.

User typing
Gaurav

↓

student.name = "Gaurav"
आणि TS मधून value change केली तर

HTML मध्ये पण update होईल.

[( )] म्हणजे काय?

Combination of:

[property]
(event)
Banana In Box Syntax म्हणतात 🍌
[(ngModel)]
8)
required

👉 Validation.

Empty field allow नाही.

9)
<button [disabled]="myForm.invalid">

👉 जर form invalid असेल तर button disable.

Example
Situation	Button
Empty fields	Disabled
All fields filled	Enabled
Full Data Flow
User Input
   ↓
ngModel
   ↓
student object
   ↓
saveData()
   ↓
console.log()
Browser Console Output
{
  name: 'Gaurav',
  email: 'gaurav@gmail.com',
  course: 'Angular'
}
Important Keywords Summary
Keyword	Meaning
ngModel	Data binding
ngForm	Full form
ngSubmit	Submit event
required	Validation
name	Field पहचान
myForm.invalid	Validation check
Template Driven Form Internally कसं काम करतं?
Input Field
   ↓
ngModel watches changes
   ↓
Angular updates object
   ↓
Form state updates
   ↓
Validation runs
Real Life मध्ये कुठे वापरतात?

✅ Login Form
✅ Register Form
✅ Contact Form
✅ Student CRUD
✅ Search Form

तुझ्या CRUD project मध्ये

तू हे use करणार:

Feature	Use
Add Student	Form
Edit Student	Form
Validation	required
Save Data	localStorage
Beginner साठी Golden Rule
Small Form

👉 Template Driven

Big Enterprise Form

👉 Reactive Form