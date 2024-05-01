import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
// export class LightBoxDirective implements OnChanges {
  export class LightBoxDirective implements OnInit {

@Input() diractiveProp:any;
@Input('LightBox') defaultColor:any;
  constructor(private elementRef:ElementRef) 
  {
    // elementRef.nativeElement.style.border=`2px solid ${this.defaultColor}`
    elementRef.nativeElement.value=elementRef.nativeElement.value*10;
   }
  ngOnInit(): void {
    this.elementRef.nativeElement.style.border=`2px solid ${this.defaultColor}`
  }
  // ngOnChanges(): void {
  //   this.elementRef.nativeElement.style.border=`2px solid ${this.defaultColor}`
  // }

   @HostListener('click') onMouseOveer()
   {
    this.elementRef.nativeElement.style.border=`2px solid ${this.diractiveProp}`
    this.elementRef.nativeElement.style.padding="5px"
   }
   @HostListener ('mouseout') OnMouseOut()
   {
    this.elementRef.nativeElement.style.border=`2px solid ${this.defaultColor}`
   }

}
