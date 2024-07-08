function helloWorld(text) {
  const errorText = "Função aceita apenas string como argumento!";
  const defaultMessage = "Hello World!";

  if (typeof text == "undefined") {
    return defaultMessage;
  }

  if (typeof text != "string") {
    return errorText;
  }

  if (text) {
    return `Hello ${text}!`;
  }

  return defaultMessage;
}

module.exports = helloWorld;
