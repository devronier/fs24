const express = require("express");

const usuarios = [
  {
    id: 1,
    nome: "Ronier",
    login: "ronier.lima",
    email: "ronier@lima.dev",
  },
];

const server = express();

server.use(express.json());

server.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

server.post("/usuarios", (req, res) => {
  usuarios.push(req.body);
  res.sendStatus(201);
});

server.get("/usuarios/:id", (req, res) => {
  let { id } = req.params;

  const usuario = usuarios.find((usuario) => usuario.id == id);
  if (usuario) {
    res.json(usuario);
  } else {
    res.sendStatus(404);
  }
});

server.delete("/usuarios/:id", (req, res) => {
  let { id } = req.params;

  const posicao = usuarios.findIndex((usuario) => usuario.id == id);
  if (posicao != -1) {
    usuarios.splice(posicao, 1);
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

server.put("/usuarios/:id", (req, res) => {
  let { id } = req.params;

  const posicao = usuarios.findIndex((usuario) => usuario.id == id);
  
  if (posicao != -1) {
    usuarios[posicao] = req.body;
    res.sendStatus(201);
  } else {
    res.sendStatus(404);
  }
});

server.patch("/usuarios/:id", (req, res) => {
    let { id } = req.params;
  
    const posicao = usuarios.findIndex((usuario) => usuario.id == id);
    
    if (posicao != -1) {
      usuarios[posicao].nome = req.body.nome;
      usuarios[posicao].email = req.body.email;
      res.sendStatus(201);
    } else {
      res.sendStatus(404);
    }
  });

server.listen(8080, () => {
  console.log("Rodando na 8080");
});
