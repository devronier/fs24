const sum = require("./sum");

test("Testar se 1 + 1 é igual a 2", () => {
  const resultado = sum(1, 1);
  expect(resultado).toBe(2);
});

test("Testar caso algum dos parametros diferente de number", () => {
  const erroText = "Tipo de dado invalido";

  expect(sum(true, 1)).toBe(erroText);
  expect(sum(2, false)).toBe(erroText);
  expect(sum(true, undefined)).toBe(erroText);

  expect(sum(1, NaN)).toBe(erroText);
});
