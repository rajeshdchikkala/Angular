import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  var_one:string="angular";
  var_two:string="React Js";
  var_three:string="Node js";
  var_four:number=100.12343322;
  var_five:number=200;
  var_six:Date=new Date();
  var_seven:any={number:100};
  var_eight:Array<number>=[10,20,30,40,50];

  var_nine:any;

  var_ten:string="hello";

  cardNumber:string="";

  constructor(){
    this.var_nine=new  Promise(
      (resolve,reject)=>{
        resolve(" tomorrow we will have class");
      }
    )
  }

}
