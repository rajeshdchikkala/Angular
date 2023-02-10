import { Component ,Output,EventEmitter} from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-acccreatewithservice',
  templateUrl: './acccreatewithservice.component.html',
  styleUrls: ['./acccreatewithservice.component.css']
})
export class AcccreatewithserviceComponent {
  constructor(private actService:AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    /*
     this.accountAdded.emit({
       name: accountName,
       status: accountStatus
     });*/
 
     this.actService.addAccount(accountName,accountStatus);
     
   }

   ngOnInit(): void {
      
   }

}
