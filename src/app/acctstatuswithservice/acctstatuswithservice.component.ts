import { Component,Input,Output,EventEmitter } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-acctstatuswithservice',
  templateUrl: './acctstatuswithservice.component.html',
  styleUrls: ['./acctstatuswithservice.component.css']
})
export class AcctstatuswithserviceComponent {

  @Input() account: any="";
  @Input() id: number=0;

  constructor(private actService:AccountService){}

  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    this.actService.updateStatus(this.id,status);
   
  }

}
