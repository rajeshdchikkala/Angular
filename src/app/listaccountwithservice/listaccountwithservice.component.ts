import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-listaccountwithservice',
  templateUrl: './listaccountwithservice.component.html',
  styleUrls: ['./listaccountwithservice.component.css']
})
export class ListaccountwithserviceComponent implements OnInit{

  constructor(private actService:AccountService){}
  accounts:{
    name:string,
    status:string
  }[]=[];

  ngOnInit(): void {
    this.accounts=this.actService.accounts;
    console.log('With in List Component and Accounts Length ' + this.accounts.length);
  }

}
