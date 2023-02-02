import { Directive,HostBinding,Input } from '@angular/core';

enum CardType{
  VISA='visa',
  MASTERCARD='mastercard',
  AMERICAN_EXPRESS='american-express',
  UNKNOWN='unknown'
}

@Directive({
  selector: '[appCclogo]'
})
export class CclogoDirective {

  @HostBinding('src')
  imageSource:string="";

  @Input()
  cardNumber:string="";

  constructor() { }

  //If any changes to this ccLogo like src , card number changed etc..
  //then ngOnchanges wil be called by framework
  ngOnChanges(){

    this.imageSource='assets/card-types/'+
                this.getCardTypeFromNumber()+'.png';

      //<img src="assets/card-types/visa.png">

  }

  getCardTypeFromNumber():CardType{
    if(this.cardNumber){

      if(this.cardNumber.startsWith('10')){
        return CardType.VISA;
      } else if (this.cardNumber.startsWith('20')){
        return CardType.MASTERCARD;
      }else if (this.cardNumber.startsWith('30')){
        return CardType.AMERICAN_EXPRESS;
      }else
      {
        return CardType.UNKNOWN;
      }
    }else
    {
      return CardType.UNKNOWN;
    }

  }

}
