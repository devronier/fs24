const tratarUsers = require("./users");
const tratarClients = require("./clients");
const tratarProducts = require("./products");
const tratarNotFound = require("./notFound");

function tratarRequisicao(req, res) {

  switch(req.url) {
    case "/users": 
      tratarUsers(req, res)
      break;
    case "/clients": 
      tratarClients(req, res)
      break;
    case "/products": 
      tratarProducts(req, res)
      break;
    default:
      tratarNotFound(req, res)
      break;

  }
}

module.exports = tratarRequisicao;