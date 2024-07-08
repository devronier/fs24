function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Tipo de dado invalido";
  }

  return a + b;
}

module.exports = sum;
