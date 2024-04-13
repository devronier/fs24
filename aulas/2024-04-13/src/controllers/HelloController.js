class HelloController {
  helloWorld(req, res) {
    return res.send("Olá Mundo");
  }

  helloWorld2(req, res) {
    return res.send("Olá Mundo 2");
  }
}

module.exports = HelloController;
