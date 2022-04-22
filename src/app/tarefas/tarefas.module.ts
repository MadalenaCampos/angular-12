import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Service do CRUD de tarefas
import { TarefaService } from './shared';

// Componentes do CRUD de tarefas
import { ListarTarefaComponent } from './listar';

// Modulos do NG-ZORRO
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

@NgModule({
  declarations: [ListarTarefaComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NzIconModule,
    NzDividerModule,
    NzCheckboxModule,
    NzEmptyModule,
  ],
  providers: [TarefaService],
})
export class TarefasModule {}
