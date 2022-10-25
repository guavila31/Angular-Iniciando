import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() estaAutenticado: boolean = false;

  menus: any = ['Lista 1 - JavaScript', 'Lista 2 - TypeScript', 'Lista 3 - Angular I', 'Lista 4 - Angular II']
  constructor() { }
  autenticado: boolean = false;
  ngOnInit(): void {
  }

}
