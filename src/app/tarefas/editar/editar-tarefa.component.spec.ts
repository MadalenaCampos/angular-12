import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';

import { EditarTarefaComponent } from './editar-tarefa.component';

describe('EditarTarefaComponent', () => {
  let component: EditarTarefaComponent;
  let fixture: ComponentFixture<EditarTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarTarefaComponent],
      imports: [
        RouterTestingModule,
        NzMessageModule,
        NzDividerModule,
        FormsModule,
        NzEmptyModule
      ],
      providers: [NzMessageService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
