import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

// Importações do NG-ZORRO
import { NzMessageService } from 'ng-zorro-antd/message';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.less'],
})
export class CadastrarTarefaComponent implements OnInit {
  public loading = false;

  // Faz a validacao do formulario, para que nao seja enviado sem nenhum campo preenchido.
  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  // Atributo que representa a tarefa, deixando-a preparada para ser cadastrada.
  public tarefa!: Tarefa;

  // Método responsável por criar uma mensagem de sucesso ou até mesmo erro.
  public exibirMensagem(tipo: string, mensagem?: string): void {
    this.message.create(tipo, mensagem);
  }

  constructor(
    private router: Router,
    private tarefaService: TarefaService,
    private message: NzMessageService
  ) {}

  public cadastrar() {
    this.loading = true;
    setTimeout(() => {
      if (this.formTarefa.form.valid) {
        this.loading = false;
        this.tarefaService.cadastrar(this.tarefa);
        this.exibirMensagem('success', 'Tarefa cadastrada com sucesso!');
        this.router.navigate(['/tarefas']);
      } else {
        this.loading = false;
        this.exibirMensagem('error', 'Preencha todos os campos obrigatórios, corretamente!');
      }
    }, 3000);
  }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }
}
