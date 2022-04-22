import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Arquivo de rotas do módulo de tarefas
import { TarefaRoutes } from './tarefas';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tarefa/listar',
    pathMatch: 'full',
  },
  ...TarefaRoutes, // Adiciona as rotas existentes no módulo de tarefas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
