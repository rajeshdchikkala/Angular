import { CovidService } from './../covid.service';
import { Component, NgModule, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent {

  public covidInfo:any=[];

 // public countryInfo:any[];

  constructor(private covidService:CovidService){}

  ngOnInit(): void {
    this.covidService.getCovidData().subscribe
      (

        (posRes) =>{
          this.covidInfo=posRes;
      //    console.log(this.covidInfo);
        },
        (errRes:HttpErrorResponse)=>{
          console.log(errRes);
        }

      );

     /* this.covidService.getCountryData().subscribe(
          (countryRes)=>{
            this.countryInfo=countryRes;
          },
          (errCountryRes:HttpErrorResponse)=>{
            console.log("Error at country response"+errCountryRes);
          }
      );*/
  }


  


}
