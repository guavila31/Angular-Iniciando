import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() estaAutenticado: boolean = false;

  menus: any = [
    {rota: 'calculadora', titulo: 'Calculadora'},
    {rota: 'calcula-media-simples', titulo: 'Calcula Media'},
    {rota: 'lista1', titulo: 'Lista de pessoas'},
    {rota: 'usuario', titulo: 'Usuario'},
    {rota: 'pai', titulo: 'Rota Aninhada'},
    {rota: 'lista-exercicio', titulo: 'Lista de Exercicios'},

  ]
  constructor() { }
  autenticado: boolean = false;
  ngOnInit(): void {
  }

}
