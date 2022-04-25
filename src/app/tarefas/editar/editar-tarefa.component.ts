import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Tarefa, TarefaService } from '../shared';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.less'],
})
export class EditarTarefaComponent implements OnInit {
  public loading = false;

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;
  public tarefa!: Tarefa;

  // Método responsável por criar uma mensagem de sucesso ou até mesmo erro.
  public exibirMensagem(tipo: string, mensagem?: string): void {
    this.message.create(tipo, mensagem);
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tarefaService: TarefaService,
    private message: NzMessageService
  ) {}

  public atualizar() {
    this.loading = true;
    if (this.formTarefa.form.valid) {
      this.loading = false;
      this.tarefaService.atualizar(this.tarefa);
      this.exibirMensagem('success', 'Tarefa atualizada com sucesso!');
      this.router.navigate(['/tarefas']);
    }
  }

  ngOnInit(): void {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    // Busca a tarefa pelo id, que está presente na rota atual, uso do + para converter em number.
    this.tarefa = this.tarefaService.buscarPorId(id);
  }
}
