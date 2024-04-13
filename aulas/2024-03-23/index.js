import fs from "fs";
import { Pessoa } from "./Pessoa.js";

const data = fs.readFileSync("./Aluno.json", "utf-8");
console.log(JSON.parse(data));

const aluno = { nome: "David", matricula: 1, ativo: true };

const pessoa = new Pessoa("Ronier", 25);

fs.writeFileSync("./Pessoa.json", JSON.stringify(pessoa));
