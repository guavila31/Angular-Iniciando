import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercicio1',
  templateUrl: './exercicio1.component.html',
  styleUrls: ['./exercicio1.component.css']
})
export class Exercicio1Component implements OnInit {

  public ac1: number = 0;
  public ac2: number = 0;
  public ag: number = 0;
  public af: number = 0;
  public media: number = 0;
  public status: string = 'AGUARDANDO NOTA';
  public statusView: string = '';
  public input: string = '';


  constructor(public route: ActivatedRoute) {
    this.input = "form-control";
    this.statusView = "badge bg-primary text-wrap"

  }

  ngOnInit(): void {
    this.ac1 = this.route.snapshot.params['ac1'] ? parseFloat(this.route.snapshot.params['ac1']) : 0;
    this.ac2 = this.route.snapshot.params['ac2'] ? parseFloat(this.route.snapshot.params['ac2']) : 0;
    this.ag = this.route.snapshot.params['ag'] ? parseFloat(this.route.snapshot.params['ag']) : 0;
    this.af = this.route.snapshot.params['af'] ? parseFloat(this.route.snapshot.params['af']) : 0;
  }

  calcularMedia() {
    this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);
    if (this.media > 5) {
      this.status = "Aprovado";
      this.statusView = "badge bg-success text-wrap"
    }
    else {
      this.status = "Reprovado";
      this.statusView = "badge bg-danger text-wrap"
    }
    console.log(`O aluno foi: ${this.status}`)
    this.ac1 = 0;
    this.ac2 = 0;
    this.ag = 0;
    this.af = 0;
  }
}
