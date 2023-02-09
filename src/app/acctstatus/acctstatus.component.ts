import { Component ,EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-acctstatus',
  templateUrl: './acctstatus.component.html',
  styleUrls: ['./acctstatus.component.css']
})
export class AcctstatusComponent {
  @Input() account: any="";
  @Input() id: number=0;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    console.log('A server status changed, new status: ' + status);
  }
}
