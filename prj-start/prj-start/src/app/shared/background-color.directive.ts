import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[appBackgroundColorDirective]",
})
export class BackgroundColorDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}
