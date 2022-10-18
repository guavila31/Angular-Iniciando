import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {
  num1: any = 5;
  num2: any = 6;
  cursos: any = [];
  numeros: number [] = [1,2,3,4,5,6];

  pessoas: any [] = [{nome: 'Gustavo'},{nome: 'Samuel'},{nome: 'Nicolas'}]

  constructor() { }

  ngOnInit(): void {
    let teste: string = ""

    this.numeros.push(1);
    console.log(this.numeros);

    this.cursos.push('Curso1')
    this.cursos.push({ Nome: 'Curso1' })
    this.cursos.push(1)
    console.log(this.cursos);
  }

}
