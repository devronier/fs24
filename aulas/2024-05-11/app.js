const express = require("express");
const cors = require("cors");

const jwt = require("jsonwebtoken");

const app = express();

const CHAVE_SECRETA = "macacobanana";

app.use(express.json());
app.use(cors());

const users = [
  {
    id: 1,
    nome: "Ronier",
    email: "ronier@email.com",
    senha: "123",
    papel: ["ADMIN"],
  },
  {
    id: 2,
    nome: "Juliana",
    email: "juliana@email.com",
    senha: "123",
    papel: ["ADMIN"],
  },
  {
    id: 3,
    nome: "Davi",
    email: "davi@email.com",
    senha: "123",
    papel: ["USER"],
  },
];

function authMiddleware(req, res, next) {
  try {
    const tokenValidado = jwt.verify(req.headers.authorization, CHAVE_SECRETA);
    if (tokenValidado) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.sendStatus(401);
  }
}

app.get("/", authMiddleware, (req, res) => {
  res.send("seja bem vido");
});

app.get("/users", authMiddleware, (req, res) => {
  res.json(users);
});

app.post("/auth/login", (req, res) => {
  const credenciais = req.body;

  console.log("crede", credenciais);

  const usuarioEncontrado = users.find(
    (usuario) => usuario.email == credenciais.email
  );

  if (usuarioEncontrado && usuarioEncontrado.senha == credenciais.senha) {
    const token = jwt.sign(usuarioEncontrado, CHAVE_SECRETA, {
      expiresIn: "1h",
    });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Senha/Email inválidos" });
  }
});

app.listen(8080, () => {
  console.log("rodando na 8080");
});

// Aplicar essa lógica no projeto anterior
// Criar um middleware de autorização:
// TER Papeis por usuários, apenas ADMIN pode criar usuários
// Apenas o usuário que criou uma tarefa pode apagar
