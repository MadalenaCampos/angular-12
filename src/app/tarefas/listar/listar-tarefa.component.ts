import { Component, OnInit } from '@angular/core';

// Service e interface de tarefas
import { TarefaService, Tarefa } from '../shared';

// Injeção do NG-ZORRO
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.less'],
})
export class ListarTarefaComponent implements OnInit {
  public tarefas!: Tarefa[];

  constructor(
    private tarefaService: TarefaService,
    private nzMessageService: NzMessageService
  ) {}

  public listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  public remover($event: any, tarefa: Tarefa): void {
    this.tarefaService.remover(tarefa.id);
    this.tarefas = this.tarefaService.listarTodos();
    this.nzMessageService.success('Tarefa removida com sucesso!');
  }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }
}
