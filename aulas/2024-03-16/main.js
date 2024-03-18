import { adicao } from "./calculadora/adicao.js";
import { promises as fs } from "fs";

import falarHello from "./escrever.js";

falarHello();

//
adicao(1, 1);

//(DESACOMPLAR) TRANSFORMAR EM UM MODULO QUE LE E CRIAR UM NOVO QUE ESCREVE EM UM LOG.txt
async function lerArquivo(pathFile) {
  try {
    const file = await fs.readFile(pathFile, "ascii");
    console.log(file);
  } catch (error) {
    console.error(error);
  }

  console.log("A prova que n");
}

lerArquivo("package.json");
