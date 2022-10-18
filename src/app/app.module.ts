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

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    NavbarComponent,
    RodapeComponent,
    Lista1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursoModule,
    HttpClientModule,
  ], exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
