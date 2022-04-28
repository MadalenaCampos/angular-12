import { ElementRef } from '@angular/core';
import { TarefaConcluidaDirective } from './tarefa-concluida.directive';

describe('TarefaConcluidaDirective', () => {
  it('should create an instance', () => {
    let elemento: ElementRef;
    const directive = new TarefaConcluidaDirective(elemento);
    expect(directive).toBeTruthy();
  });
});
