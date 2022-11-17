import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio2',
  templateUrl: './exercicio2.component.html',
  styleUrls: ['./exercicio2.component.css']
})
export class Exercicio2Component implements OnInit {

  num1: number = 0;
  num2: number = 0;
  resultadoSoma: number = 0;
  resultadoSubtrair: number = 0;
  resultadoMultiplicar: number = 0;
  resultadoDividir: number = 0;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.num1 = this.route.snapshot.params['num1'] ? parseFloat(this.route.snapshot.params['num1']) : 0;
    this.num2 = this.route.snapshot.params['num2'] ? parseFloat(this.route.snapshot.params['num2']) : 0;
  }

  operacoes() {
    this.resultadoSoma = this.num1 + this.num2;
    this.resultadoSubtrair = this.num1 - (-this.num2);
    this.resultadoDividir = this.num1 / this.num2;
    this.resultadoMultiplicar = this.num1 * this.num2;
  }
  atualiza() {
    this.operacoes();
  }
}
