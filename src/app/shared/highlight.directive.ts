import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver_recebeEntrada() {
    this.backgroundColor = this.HighlightColor;
  }

  @HostListener('mouseleave') onMouseLeave_recebeEntrada() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.background-color') backgroundColor: string;// esta linha faz a renderização do dom

  @Input() defaultColor: string = 'white';
  @Input('appHighlight') HighlightColor: string = 'yellow';// posso chamar o nome da diretiva com o inputPropert com o mesmo nome da diretiva

  constructor() { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.backgroundColor = this.defaultColor;
  }

}
