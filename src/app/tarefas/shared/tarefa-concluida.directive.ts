import { Directive, ElementRef, Input, OnInit } from '@angular/core';

// Enquanto o componente gera uma tag HTML, uma diretiva gera um atributo HTML.
// Quando deseja apenas aplicar uma operação específica em um componente.

@Directive({
  selector: '[tarefaConcluida]',
})
export class TarefaConcluidaDirective implements OnInit {
  @Input() tarefaConcluida: boolean;
  // O Input é um decorador que permite que o valor de entrada seja passado para a diretiva, através do HTML

  constructor(private elemetRef: ElementRef) {
    // O ElementRef é uma referência para o elemento HTML que está sendo manipulado.
  }

  ngOnInit() {
    if (this.tarefaConcluida) {
      this.elemetRef.nativeElement.style.textDecoration = 'line-through';
      // O nativeElement é o elemento HTML que está sendo manipulado.
    }
  }
}
