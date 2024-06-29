const jwt = require("jsonwebtoken");

function authMiddleware(request, response, next) {
  try {
    const token = request.headers.token;

    const tokenValido = jwt.verify(token, "macacobanana");

    if (token && tokenValido) {
      next();
    }
  } catch (error) {
    return response.sendStatus(401);
  }
}

module.exports = authMiddleware;
