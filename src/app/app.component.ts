import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formsexample';
  @ViewChild('f',{static:false}) signupForm!:NgForm;
  answer="Sachin";
  defaultValue="cricketer";
  genders=['Male','Female'];
  submitted:boolean=false;

  userjsnObj={
    username:"",
    email:"",
    gender:"",
    answer:"",
    secret:""
  }

  onSubmit(form:NgForm){
    this.submitted=true;
    console.log(this.signupForm);
    this.userjsnObj.username=this.signupForm.value.username;
    this.userjsnObj.email=this.signupForm.value.email;
    this.userjsnObj.secret=this.signupForm.value.secret;
    this.userjsnObj.answer=this.signupForm.value.answer;
    this.userjsnObj.gender=this.signupForm.value.gender;
    this.signupForm.reset();
  }
}
