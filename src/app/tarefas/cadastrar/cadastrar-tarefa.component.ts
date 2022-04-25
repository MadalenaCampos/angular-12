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

  constructor(
    private router: Router,
    private tarefaService: TarefaService,
    private nzMessageService: NzMessageService
  ) {}

  public cadastrar() {
    this.loading = true;
    if (this.formTarefa.form.valid) {
      this.loading = false;
      this.tarefaService.cadastrar(this.tarefa);
      this.nzMessageService.success('Tarefa cadastrada com sucesso!');
      this.router.navigate(['/tarefas']);
    }
  }

  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }
}
