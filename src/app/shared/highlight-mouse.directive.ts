import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver_recebeEntrada() {
    /*this._renderer2.setStyle(
      this._elementRef.nativeElement, 
      'background-color', 
      'yellow');*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave_recebeEntrada() {
    /* this._renderer2.setStyle(
       this._elementRef.nativeElement, 
       'background-color', 
       'white');*/
    this.backgroundColor = 'white';
  }

  //@HostBinding('style.background-color') backgroundColor : string; é aqui que ocorre a modificação do domHTML
  @HostBinding('style.background-color') get setColor() {// o a expressão 'get' é possivel pegar o resultado ou variável e manipula-la
    //codigo extra; maneira de manipular a variavel antes de ser modificada...
    
    if  (this.backgroundColor =='yellow' ) {
      console.log('a cor modificada é amarelo');
    } else {// posso pegar o valor da variavel antes de retorna para modificar o domHTML
      console.log('a cor modificada é branca..');
    }
    return this.backgroundColor;
  }

  private backgroundColor: string;

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer2: Renderer2
  ) { }

}
