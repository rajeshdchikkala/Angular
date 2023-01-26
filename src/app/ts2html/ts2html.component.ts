import { Component } from '@angular/core';

@Component({
  selector: 'app-ts2html',
  templateUrl: './ts2html.component.html',
  styleUrls: ['./ts2html.component.css']
})
export class Ts2htmlComponent {
   title:string="Angular14"; //TypeScript variable
   datevalue:string="";

   private userName:string="s.rani";
   private firstName:string="Sandhya";
   private lastName:string="Rani";
   private emailId:string="sandhyarani@gmail.com";

  constructor(){
    setInterval( () => {
         let currentdate=new Date();
         this.datevalue=currentdate.toDateString() +
        "  " + currentdate.toLocaleTimeString();
    },1000);
  }

  getUserName():string{
    return this.userName;
  }
  getFirstName():string{
    return this.firstName;
  }
  getLastName():string{
    return this.lastName;
  }
  getemailId():string{
    return this.emailId;
  }
}
