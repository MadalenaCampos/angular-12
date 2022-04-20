import { Injectable } from '@angular/core';

// Classe que representa uma tarefa
import { Tarefa } from './';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  constructor() {}

  // Listar todas as tarefas
  public listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  // Cria uma nova tarefa
  public cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  // Ler uma tarefa especifica
  public buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find((tarefa) => tarefa.id === id);
  }

  // Atualizar uma tarefa
  public atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  // Delete uma tarefa
  public remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  // Status do checkbox
  public alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (id === obj.id) {
        objs[index].concluida = !obj.concluida;
        // Esta negando o valor pois independente do valor do checkbox, ele vai mudar: !true = false e !false = true.
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}

/*
@MadalenaCampos
Importante ressaltar que esse projeto foi criado como um exemplo de como utilizar o localStorage.
*/
