import { Directive,Input,ElementRef,Renderer2,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective {

  @Input() defaultColor: string='transparent';
  @Input() highlightColor: string='red';

  @HostBinding('style.backgroundColor') backgroundColor:string=this.defaultColor;

  constructor(private elementRef:ElementRef,
    private   renderer:Renderer2) { }

    ngOnInit(): void {
    
      // this.renderer.setStyle(this.elementRef.nativeElement,
        // 'background-color','cyan')
 
        this.backgroundColor='cyan';
     }
     
     @HostListener('mouseenter') mouseover(eventData:Event){

      console.log(this.highlightColor);
     this.backgroundColor=this.highlightColor;
  
    }
  
  
    @HostListener('mouseleave') mouseleave(eventData:Event){
      console.log(this.defaultColor);
      this.backgroundColor=this.defaultColor;
  
    }  

}
