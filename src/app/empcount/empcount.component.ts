import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-empcount',
  templateUrl: './empcount.component.html',
  styleUrls: ['./empcount.component.css']
})
export class EmpcountComponent {
  @Input() all:number=8;

  @Input() male:number=5;

  @Input() female:number=3;

  selectedRadioButtonValue:string='All';

  @Output()
  countRadioButtonSelectionChanged:EventEmitter<string>=
          new EventEmitter<string>();

  onRadioButtonChange(){
   // console.log(this.selectedRadioButtonValue);
    this.countRadioButtonSelectionChanged.
          emit(this.selectedRadioButtonValue);

  }
}
