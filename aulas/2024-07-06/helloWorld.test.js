const helloWorld = require("./helloWorld");

test("Deve retornar a frase Hello World! Quando não receber nenhum argumento", () => {
  expect(helloWorld()).toBe("Hello World!");
});

test("Deve retornar uma frase comecando com Hello e terminando com ! Quando receber um argumento do tipo string", () => {
  expect(helloWorld("Dev")).toBe("Hello Dev!");
});

test("test 3", () => {
  const errorText = "Função aceita apenas string como argumento!";

  expect(helloWorld(10)).toBe(errorText);
  expect(helloWorld([])).toBe(errorText);
  expect(helloWorld({})).toBe(errorText);
  expect(helloWorld(null)).toBe(errorText);
  expect(helloWorld(true)).toBe(errorText);
  expect(helloWorld(false)).toBe(errorText);
});
