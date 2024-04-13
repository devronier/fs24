function listClient(req, res) {
  return res.send("Olá Mundo");
}

function createClient(req, res) {
  return res.send("Olá Mundo 2");
}

module.exports = { listClient, createClient };
