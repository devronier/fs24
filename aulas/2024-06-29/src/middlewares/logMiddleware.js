function logMiddleware(request, response, next) {
  console.log("passei por aqui");

  next();
}

module.exports = logMiddleware;
