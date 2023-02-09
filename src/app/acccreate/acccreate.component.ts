import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-acccreate',
  templateUrl: './acccreate.component.html',
  styleUrls: ['./acccreate.component.css']
})
export class AcccreateComponent implements OnInit{
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    console.log('A server status changed, new status: ' + accountStatus);
  }

  ngOnInit(): void {
      
  }
}
