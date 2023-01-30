import { Directive ,ElementRef,Renderer2,HostListener} from '@angular/core';

@Directive({
  selector: '[appHostlistner]'
})
export class HostlistnerDirective {

  constructor(private elementRef:ElementRef,
    private   renderer:Renderer2) { }

   //on mouse enter we will be settng background color as red 
  @HostListener('mouseenter') mouseover(eventData:Event){

    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color','red');

  }

  //on mouse leave we will be settng background color as transparent
  @HostListener('mouseleave') mouseleave(eventData:Event){

    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color','transparent');

  }

   //on load of page backgraound color will be set
  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color','cyan')
  }

}
