import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html2ts',
  templateUrl: './html2ts.component.html',
  styleUrls: ['./html2ts.component.css']
})
export class Html2tsComponent implements OnInit{

  guestName:String="";
  buttonStatus:boolean=true;
  productStatus:string="Available";
  
  addJson:any={};

  constructor(){}

  ngOnInit(){
    this.addJson=
      {
         name:"New User",
         title:"HR 1",
         salary:"100000",
         department:"1",
         address:[
           "Airoli",
           "Navi Mumbai",
           "400604"
         ],
         phones:[
           '153-671-1111',
           '777-777-7777'
         ]
       }
    
    setInterval( () => {
         this.productStatus=Math.random()>0.5?"Available":"Not Availble"
    },1000);

    setTimeout(
      ()=>{
        this.buttonStatus=false
      },5000
    )
  }

  //below method will be called on click event of button
  updateGuest(event:string){
    this.guestName=event;
  }

 

  getColor():string{
    return this.productStatus=="Available"?"green":"red";
  }
}
