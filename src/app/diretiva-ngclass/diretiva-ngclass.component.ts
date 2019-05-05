import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  meufavorito: boolean = false;
  isSpecial: boolean = false;
  nomeDoIcon: string[] =  ["star_border","star"];
   
  nomeDoIconPadrao: string = "star_half";
  constructor() { 
    //this.nomeDoIconPadrao="star_half";
 }

  ngOnInit() {
   // this.nomeDoIconPadrao="star_half";
   //this.nomeDoIcon  = ["star_border","star"]; {{nomeDoIconPadrao}}
  }

  onClick(){

    this.meufavorito = !this.meufavorito;
    this.nomeDoIconPadrao= this.nomeDoIcon[Number( this.meufavorito)];
    console.log("troca: " +this.meufavorito);

  }
  mudarIsSpecial(){
    this.isSpecial = !this.isSpecial;
  }

/* posso criar um estilo dentro do componet de logica
   currentStyles: {};
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }

  <div [ngStyle]="currentStyles">
  This div is initially italic, normal weight, and extra large (24px).
</div>


 */

}
