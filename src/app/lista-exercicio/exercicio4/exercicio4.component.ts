import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css']
})
export class Exercicio4Component implements OnInit {

  public nome: string = '';
  public sexo: string = '';
  public idade: number = 0;
  public valor: number = 0;
  public apolice: any;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  calcApolice() {
    switch (this.sexo) {
      case "M":
        if (this.idade > 25) {
          this.apolice = `Nome: ${this.nome}\nDesconto: 10% \nValor da Apolice: ${this.valor * 0.1}`;
        } else if (this.idade <= 25) {
          this.apolice = `Nome: ${this.nome}\nDesconto: 15% \nValor da Apolice: ${this.valor * 0.15}`;
        }
        break;
      case "F":
        this.apolice = `Nome: ${this.nome} \nDesconto: 8% \nValor da Apolice: ${this.valor * 0.8} `;
        break;
    }
  }

}
