import { UsuarioService } from './../servicos/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: any = [];
  constructor(public usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.usuarioService.obterUsuarios().subscribe((data: any) => {
      this.usuario = data;
    })
  }
  excluir(id: any) {
    this.usuarioService.excluirUsuario(id).subscribe(() => {
      this.buscarUsuarios();
    })
  }
}
