import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefa',
    redirectTo: 'tarefa/listar',
  },
  {
    path: 'tarefa/listar',
    component: ListarTarefaComponent,
  },
];
