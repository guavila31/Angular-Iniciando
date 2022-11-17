import { UsuarioComponent } from './usuario/usuario.component';
import { ListaExercicioComponent } from './lista-exercicio/lista-exercicio.component';
import { Lista1Component } from './componentes/atividades/lista1/lista1.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculaMediaSimplesComponent } from './calcula-media-simples/calcula-media-simples.component';
import { PageNotFoudComponent } from './compartilhado/page-not-foud/page-not-foud.component';
import { PaiComponent } from './pai/pai.component';
import { Filho1Component } from './pai/filho1/filho1.component';
import { Filho2Component } from './pai/filho2/filho2.component';
import { Exercicio2Component } from './lista-exercicio/exercicio2/exercicio2.component';
import { DescricaoExerciciosComponent } from './lista-exercicio/descricao-exercicios/descricao-exercicios.component';
import { Exercicio1Component } from './lista-exercicio/exercicio1/exercicio1.component';
import { Exercicio3Component } from './lista-exercicio/exercicio3/exercicio3.component';
import { Exercicio4Component } from './lista-exercicio/exercicio4/exercicio4.component';

const routes: Routes = [
  { path: '', redirectTo: '/calculadora', pathMatch: 'full' },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'calculadora/:num1/:num2', component: CalculadoraComponent },
  { path: 'calcula-media-simples', component: CalculaMediaSimplesComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'lista1', component: Lista1Component },
  {
    path: 'pai', component: PaiComponent, children: [
      { path: 'filho1', component: Filho1Component },
      { path: 'filho2', component: Filho2Component },
    ]
  },
  {
    path: 'lista-exercicio', component: ListaExercicioComponent, children: [
      { path: 'descricao', component: DescricaoExerciciosComponent },
      { path: 'exercicio1', component: Exercicio1Component },
      { path: 'exercicio2', component: Exercicio2Component },
      { path: 'exercicio3', component: Exercicio3Component },
      { path: 'exercicio4', component: Exercicio4Component },
    ]
  },
  { path: '**', component: PageNotFoudComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
