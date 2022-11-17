import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  obterUsuarios() {
    return this.http.get(`${environment.urlAPI}/Usuario`);
  }

  obterUsuarioPorId(id: any) {
    return this.http.get(`${environment.urlAPI}/Usuario/${id}`);
  }

  salvarUsuario(usuario: any) {
    return this.http.post(`${environment.urlAPI}/Usuario/`, usuario);
  }

  editarUsuario(usuario: any) {
    return this.http.put(`${environment.urlAPI}/Usuario/${usuario.id}`, usuario);
  }

  excluirUsuario(id: any) {
    return this.http.delete(`${environment.urlAPI}/Usuario/${id}`);
  }

}
