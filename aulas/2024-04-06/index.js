const http = require("http");
const tratarRequisicao = require("./tratarRequisicao");

const server = http.createServer((req, res) => {
  return tratarRequisicao(req, res)
})

server.listen(8080, () => {
  console.log("estamos rodando na 8080")
})