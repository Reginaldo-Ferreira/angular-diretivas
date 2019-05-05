import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
//TemplateRef faz referencia ao proprio template onde o diretiva com [ngElse]
// ViewContainerRef esse faz referência ao conteúdo que queremos renderizar ou seja (mostra ou não) no caso a <div>
@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {
  @Input() set ngElse(condition: boolean) {//ngElse tambem é uma variavel para saber ser houve mudança temos que colocar set depois do decoretor @input
    //conceito de método set 'toda vez que o ngElse modifica, o metodo set é chamado e modifica o valor do template
    if (!condition) {
      this._viewContainerRef.createEmbeddedView(this._templateRef)
    }else{

      this._viewContainerRef.clear();
    }
  }
  constructor(//o construtor pede um tipo de argumento para o objeto 'TemplateRef' no caso abaixo foi passado um tipo generico 'qualquer tipo'
    private _templateRef: TemplateRef<any>, //any qualquer tag
    private _viewContainerRef: ViewContainerRef
  ) { }


}
