import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

import { ListarTarefaComponent } from './listar-tarefa.component';

describe('ListarTarefaComponent', () => {
  let component: ListarTarefaComponent;
  let fixture: ComponentFixture<ListarTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarTarefaComponent],
      imports: [RouterTestingModule, NzMessageModule],
      providers: [NzMessageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
