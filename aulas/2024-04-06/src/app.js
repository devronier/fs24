// app.js
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para fazer o parsing do corpo das requisições como JSON
app.use(bodyParser.json());

// Rotas
app.use("/api", userRoutes);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
