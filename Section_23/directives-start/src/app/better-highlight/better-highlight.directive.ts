import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
  standalone:false
})
export class BetterHighlightDirective  implements OnInit{
    @Input() defaultColor:string ='transparent'; 
    @Input() highlightColor :string ='blue';
    //@HostBinding('style.backgroundColor') backgroundColor:string ='transparent';
  @HostBinding('style.backgroundColor') backgroundColor:string =this.defaultColor;
  constructor(private eleRef : ElementRef , private renderer : Renderer2) { }
   ngOnInit(): void {
     this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.eleRef.nativeElement,'background-color','blue');
   }
   @HostListener('mouseenter') mouseover (eventData : Event) {
   //this.renderer.setStyle(this.eleRef.nativeElement,'background-color','blue');
     //this.backgroundColor ='blue'; 
      this.backgroundColor = this.highlightColor;
     }
   @HostListener('mouseleave') mouseleave (eventData : Event) {
   //this.renderer.setStyle(this.eleRef.nativeElement,'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }
}
