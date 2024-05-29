const express = require("express");
const cors = require("cors");

const jwt = require("jsonwebtoken");
const BadRequestError = require("./BadRequestError");
const AccessDeniedError = require("./AccessDeniedError");

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

function reconhecerError(error) {
  if (error instanceof BadRequestError) {
    return true;
  }

  if (error instanceof AccessDeniedError) {
    return true;
  }

  return false;
}

function authMiddleware(req, res, next) {
  try {
    const tokenValidado = jwt.verify(req.headers.authorization, CHAVE_SECRETA);
    if (tokenValidado) {
      next();
    } else {
      next(new AuthenticationError("Token inválido ou expirado"));
    }
  } catch (error) {
    next(new AuthenticationError("Token inválido ou expirado"));
  }
}

function errorMiddleware(err, req, res, next) {
  console.error(err);

  if (reconhecerError(err)) {
    return res.status(err.code).json({
      type: err.type,
      code: err.code,
      message: err.message,
    });
  }

  const error = {
    code: 500,
    type: "Internal Error",
    message: err.message,
  };

  res.status(500).json(error);
}

app.get("/", authMiddleware, (req, res) => {
  res.send("seja bem vido");
});

app.get("/users", authMiddleware, (req, res) => {
  res.json(users);
});

app.post("/auth/login", (req, res) => {
  const credenciais = req.body;

  if (!credenciais.email || !credenciais.senha) {
    throw new BadRequestError("Email e senha são obrigatórios");
  }

  const usuarioEncontrado = users.find(
    (usuario) => usuario.email == credenciais.email.toUpperCase()
  );

  if (usuarioEncontrado && usuarioEncontrado.senha == credenciais.senha) {
    const token = jwt.sign(usuarioEncontrado, CHAVE_SECRETA, {
      expiresIn: "1h",
    });
    res.json({ token });
  } else {
    throw new AccessDeniedError("Senha/Email inválidos");
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log("rodando na 8080");
});
