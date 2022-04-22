import { Routes } from '@angular/router';

// Componentes para as rotas
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar',
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent,
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent,
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarTarefaComponent,
    // Usando o :id para passar o id da tarefa.
  },
];
