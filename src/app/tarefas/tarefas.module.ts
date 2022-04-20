import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Service do CRUD de tarefas
import { TarefaService } from './shared';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [TarefaService],
})
export class TarefasModule {}
