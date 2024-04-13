import { Pessoa } from "./Pessoa";

export class Aluno extends Pessoa {
  constructor(nome, idade, matricula) {
    super(nome, idade);
    this.matricula = matricula;
  }
}
