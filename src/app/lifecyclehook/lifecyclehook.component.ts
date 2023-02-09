import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrls: ['./lifecyclehook.component.css']
})
export class LifecyclehookComponent implements OnInit,OnChanges,DoCheck,AfterViewInit,AfterContentInit,AfterViewChecked,
AfterContentChecked,OnDestroy{

  order=1;

  userText:string="";

  constructor(){
   // console.log("In Constructor and order value is :::"+ this.order);
    this.order++;
  }

  ngOnInit(){
   // console.log("In ngOnInit and order value is :::"+ this.order);
    this.order++;
  }

  ngDoCheck(){
   // console.log("In ngDoCheck and order value is :::"+ this.order);
    this.order++;
  }
  ngOnChanges(){
  //  console.log("In ngOnChanges and order value is :::"+ this.order);
    this.order++;
  }
  ngAfterViewInit(){
   // console.log("In ngAfterViewInit and order value is :::"+ this.order);
    this.order++;
  }
  ngAfterViewChecked(){
   // console.log("In ngAfterViewChecked and order value is :::"+ this.order);
    this.order++;
  }
  ngAfterContentInit(){
  //  console.log("In ngAfterContentInit and order value is :::"+ this.order);
    this.order++;
  }
  ngAfterContentChecked(){
   // console.log("In Constructor and order value is :::"+ this.order);
    this.order++;
  }

  ngOnDestroy(){
   // console.log("In Constructor and order value is :::"+ this.order);
    this.order++;
  }


}
