import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursoModule } from './curso/curso.module';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { Lista1Component } from './componentes/atividades/lista1/lista1.component';
import { HttpClientModule } from '@angular/common/http';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalculaMediaSimplesComponent } from './calcula-media-simples/calcula-media-simples.component';
import { PaiComponent } from './pai/pai.component';
import { Filho1Component } from './pai/filho1/filho1.component';
import { Filho2Component } from './pai/filho2/filho2.component';
import { FormsModule } from '@angular/forms';
import { ListaExercicioComponent } from './lista-exercicio/lista-exercicio.component';
import { Exercicio2Component } from './lista-exercicio/exercicio2/exercicio2.component';
import { DescricaoExerciciosComponent } from './lista-exercicio/descricao-exercicios/descricao-exercicios.component';
import { Exercicio1Component } from './lista-exercicio/exercicio1/exercicio1.component';
import { Exercicio3Component } from './lista-exercicio/exercicio3/exercicio3.component';
import { Exercicio4Component } from './lista-exercicio/exercicio4/exercicio4.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    NavbarComponent,
    RodapeComponent,
    Lista1Component,
    CalculadoraComponent,
    CalculaMediaSimplesComponent,
    PaiComponent,
    Filho1Component,
    Filho2Component,
    ListaExercicioComponent,
    Exercicio2Component,
    DescricaoExerciciosComponent,
    Exercicio1Component,
    Exercicio3Component,
    Exercicio4Component,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursoModule,
    HttpClientModule,
    FormsModule,
  ], exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
