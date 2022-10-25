import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { DadosPessoais } from '../models/dados-pessoais';

@Injectable({
  providedIn: 'root'
})
export class DadosPessoaisService {

  url = 'https://63055f80697408f7edc568ce.mockapi.io/cadastro'; // api rest

  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todas as pessoas
  getDadosPessoais(): Observable<DadosPessoais[]> {
    return this.httpClient.get<DadosPessoais[]>(this.url)
      .pipe();
  }

  // salva uma pessoa
  saveCar(dados: DadosPessoais): Observable<DadosPessoais> {
    return this.httpClient.post<DadosPessoais>(this.url, JSON.stringify(dados), this.httpOptions)
      .pipe()
  }

  // utualiza uma pessoa
  updateCar(dados: DadosPessoais): Observable<DadosPessoais> {
    return this.httpClient.put<DadosPessoais>(this.url + '/' + dados.id, JSON.stringify(dados), this.httpOptions)
      .pipe()
  }
}
