import { Component, OnInit } from '@angular/core';

// Service e interface de tarefas
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.less'],
})
export class ListarTarefaComponent implements OnInit {
  public tarefas!: Tarefa[];

  constructor(private tarefaService: TarefaService) {}

  public listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }
}
