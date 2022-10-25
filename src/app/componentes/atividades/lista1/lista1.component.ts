import { DadosPessoaisService } from './../../../services/dados-pessoais.service';
import { Component, OnInit } from '@angular/core';
import { DadosPessoais } from 'src/app/models/dados-pessoais';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lista1',
  templateUrl: './lista1.component.html',
  styleUrls: ['./lista1.component.css']
})
export class Lista1Component implements OnInit {


  dadosPessoais = {} as DadosPessoais;
  dados: DadosPessoais[] = [];

  constructor(private DadosPessoaisService: DadosPessoaisService) { }

  ngOnInit() {
    this.getDadosPessoais();
  }

  // defini se um carro será criado ou atualizado
  savePes(form: NgForm) {
    if (this.dadosPessoais.id !== undefined) {
      this.DadosPessoaisService.updateCar(this.dadosPessoais).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.DadosPessoaisService.saveCar(this.dadosPessoais).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  getDadosPessoais() {
    this.DadosPessoaisService.getDadosPessoais().subscribe((dados: DadosPessoais[]) => {
      this.dados = dados;
    });
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getDadosPessoais();
    form.resetForm();
    this.dadosPessoais = {} as DadosPessoais;
  }
}
