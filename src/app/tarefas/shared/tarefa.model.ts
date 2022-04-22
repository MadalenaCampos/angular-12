// Classe que representa a interface Tarefa
export class Tarefa {
  constructor(
    public id?: number,
    public nome?: string,
    public descricao?: string,
    public concluida?: boolean
  ) {}
}
