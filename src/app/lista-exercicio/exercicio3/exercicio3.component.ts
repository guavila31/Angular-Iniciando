import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component implements OnInit {


  @Input() num1: number = 3;
  @Output() num1Change = new EventEmitter<number>();
  inativo: boolean = false;
  botao: String;
  input: String;


  public ra: number = 0;
  public nome: string = '';
  public email: string = '';
  public telefone: number = 0;
  public mostrar: string = '';

  constructor() {
    this.input = "form-control "
    this.botao = "btn btn-success d-block mt-3"
  }

  ngOnInit(): void {
  }

  cadastro() {
    this.mostrar = `Nome: ${this.nome} \nEmail: ${this.email} \nTelefone: ${this.telefone} \nRA: ${this.ra}\n`
    console.log(this.mostrar)
    this.ra = 0;
    this.nome = '';
    this.email = '';
    this.telefone = 0;
    this.mostrar = '';
  }
}
