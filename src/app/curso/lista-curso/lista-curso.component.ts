import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {

  // @Input() num1: number = 0;
  // @Output() num1Change: new EventEmitter<number>;

  num2: any = 6;
  cursos: any = [];
  numeros: number[] = [1, 2, 3, 4, 5, 6];
  inativo: boolean = false;
  estiloBotao: string = 'btn btn-success'

  pessoas: any[] = [{ nome: 'Gustavo' }, { nome: 'Samuel' }, { nome: 'Nicolas' }]

  constructor() { }

  ngOnInit(): void {
    let teste: string = ""
    // this.num1 = 20;

    this.numeros.push(1);
    console.log(this.numeros);

    this.cursos.push('Curso1')
    this.cursos.push({ Nome: 'Curso1' })
    this.cursos.push(1)
    console.log(this.cursos);
  }
  // mudarValorNum1() {
  //   this.num1 = this.num1 * 2;
  //   this.num1Change.emit(this.num1);
  // }
}
