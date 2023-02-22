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

  onSubmit(form:NgForm){
    console.log(form);
  }
}
