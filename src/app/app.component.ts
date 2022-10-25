import { Component } from '@angular/core';
import { DadosPessoais } from './models/dados-pessoais';
import { DadosPessoaisService } from './services/dados-pessoais.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto-01';
  numero = 2;
  autenticado: boolean = false;
}
