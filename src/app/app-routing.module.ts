import { CalculadoraComponent } from './calculadora/calculadora.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculaMediaSimplesComponent } from './calcula-media-simples/calcula-media-simples.component';
import { PageNotFoudComponent } from './compartilhado/page-not-foud/page-not-foud.component';
import { PaiComponent } from './pai/pai.component';
import { Filho1Component } from './pai/filho1/filho1.component';
import { Filho2Component } from './pai/filho2/filho2.component';

const routes: Routes = [
  { path: '', redirectTo: '/calculadora', pathMatch: 'full' },
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'calculadora/:num1/:num2', component: CalculadoraComponent },
  { path: 'calcula-media-simples', component: CalculaMediaSimplesComponent },
  {
    path: 'pai', component: PaiComponent, children: [
      { path: 'filho1', component: Filho1Component },
      { path: 'filho2', component: Filho2Component },
    ]
  },
  { path: '**', component: PageNotFoudComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
