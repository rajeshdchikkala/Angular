import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-visitingcard',
  templateUrl: './visitingcard.component.html',
  styleUrls: ['./visitingcard.component.css']
})
export class VisitingcardComponent implements OnInit {
 
  users:any[]=[];

  @Input ('name') userName:string="";

  @Input() newUser:any[]=[];

  //when we are sending data from one component to another then we have to write it in ngonit not in constructor
  // constructor is only for object creation or component create
 
  constructor(){}

  ngOnInit(){
    //console.log("start of ngonit");
    this.users=[
      {
       // name:"Ravi Kumar",
        name:this.userName, //passing this from other component check in html2ts.component.html
        title:"Sofware Developer",
        salary:"200000",
        department:"3",
        address:[
          "Kukatpally",
          "Hyderabad",
          "500037"
        ],
        phones:[
          '111-111-1111',
          '222-222-2222'
        ]
      },
      {
        name:"Sandhya Rani",
        title:"Sofware Lead",
        salary:"400000",
        department:"3",
        address:[
          "Dilsukh Nagar",
          "Hyderabad",
          "500094"
        ],
        phones:[
          '333-333-3333',
          '444-444-4444'
        ]
      }
    ]


    this.users.push(this.newUser);

    //console.log("end of ngonit");
  }


}
