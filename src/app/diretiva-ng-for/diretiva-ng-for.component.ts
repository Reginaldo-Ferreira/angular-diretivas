import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-for',
  templateUrl: './diretiva-ng-for.component.html',
  styleUrls: ['./diretiva-ng-for.component.css']
})
export class DiretivaNgForComponent implements OnInit {

  cursos: string[] = ["Angular 4", "Java", "Phonegap"]
  constructor() { }

  ngOnInit() {

    for (let index = 0; index < this.cursos.length; index++) {
      let element = this.cursos[index];
      
    }
  }

}
