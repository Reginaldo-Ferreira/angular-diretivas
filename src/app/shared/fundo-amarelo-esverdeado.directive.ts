import { FormGroup } from '@angular/forms';
import { Directive,ElementRef, Renderer2 } from '@angular/core';

@Directive({
  //se eu querer que a direriva seja aplicada somente a somente um tipo de tag a literaçaõ sera a seguinte
  // selector: 'p[FundoAmareloEsverdeado]' -> nesse exemplo restringe o uso para a tag <p>
  selector: '[FundoAmareloEsverdeado]'
})
export class FundoAmareloEsverdeadoDirective {


  constructor(private _elementRef: ElementRef,private _renderer2: Renderer2) {

    //este código é vulneravel devemos usar o Renderer
   //---> this._elementRef.nativeElement.style.backgroundColor ='yellowgreen';

   this.ImplementCorVerde();
   console.log(_elementRef);
   }

   ImplementCorVerde(){
    
    this._renderer2.setStyle(
      
      this._elementRef.nativeElement,
       'background-color',
        'blue');
   }
}
