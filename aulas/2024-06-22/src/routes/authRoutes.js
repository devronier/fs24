const express = require("express");
const jwt = require("jsonwebtoken");

const authRoutes = express.Router();

const unicoUsuario = {
  email: "ronier.lim@gmail.com",
  senha: "123",
};

authRoutes.post("/login", (request, response) => {
  const usuario = request.body;

  if (!usuario.email || !usuario.senha) {
    return response.sendStatus(400);
  }

  if (
    usuario.email === unicoUsuario.email &&
    usuario.senha === unicoUsuario.senha
  ) {
    const payload = { email: unicoUsuario.email, exp: 1714851685 };
    const chaveSecreta = "macacobanana";

    const token = jwt.sign(payload, chaveSecreta);

    return response.send({
      user: payload,
      auth: token,
    });
  }

  response.status(401).json({
    error: "email/senha incorretos",
  });
});

module.exports = authRoutes;
