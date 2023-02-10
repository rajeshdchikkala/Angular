import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  /*
  1) Create Account
  2) Status Change of Account
  3) List the Accounts
  */

  constructor() { }

  accounts=[
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    },
    {
      name: 'Naresh IT Account',
      status: 'inactive'
    }
  ]


  addAccount(accountName:string,actStatus:string){
    this.accounts.push({name:accountName,status:actStatus})
    console.log('New Account Added with Account Name as ==> ' + accountName);
  }

  updateStatus(id:number,newStatus:string){
    this.accounts[id].status=newStatus;
    console.log(this.accounts[id].name + ' ===>  and Account Status is Changed to ==> ' + newStatus)
  }
}
