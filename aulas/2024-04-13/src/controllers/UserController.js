const UserRepository = require("../repositories/UserRepository");

const userRepository = new UserRepository();

function listUsers(req, res) {
  return res.send("Olá Mundo");
}

function createUser(req, res) {
  userRepository.saveUser(req.body);
  return res.send("Deu certo");
}

module.exports = { listUsers, createUser };
