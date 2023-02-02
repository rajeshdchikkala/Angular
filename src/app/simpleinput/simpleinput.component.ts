import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-simpleinput',
  templateUrl: './simpleinput.component.html',
  styleUrls: ['./simpleinput.component.css']
})
export class SimpleinputComponent implements OnInit,OnChanges{

  @Input() simpleInput:string="";
  
  curr_val:string="";
  prev_val:string="";
  prop_name:string="";

  constructor(){}

  ngOnInit():void{

  }

  ngOnChanges(changes: SimpleChanges): void {
    for(let propertyName in changes){
      let change=changes[propertyName];
      let currentValue=JSON.stringify(change.currentValue);
      let previousValue=JSON.stringify(change.previousValue);
      //console.log( 'Property Name ' + propertyName );
      this.prop_name=propertyName;
      this.curr_val=currentValue;
      this.prev_val=previousValue;
     // console.log('Current Value ===> ' + currentValue + '  Previous Value ===>' + previousValue);
    }
  }

}
