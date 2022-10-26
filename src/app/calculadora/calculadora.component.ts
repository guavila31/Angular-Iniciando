import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    // debugger;
    this.num1 = this.route.snapshot.params['num1'] ? parseFloat(this.route.snapshot.params['num1']) : 0;
    this.num2 = this.route.snapshot.params['num2'] ? parseFloat(this.route.snapshot.params['num2']) : 0;
  }

}
