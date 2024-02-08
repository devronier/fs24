function pegarValor() {
  return document.getElementById("myInput").value;
}

const createButton = (text, callback) => {
  const button = document.createElement("span");
  button.textContent = text;
  button.addEventListener("click", callback);
  return button;
};

function criarElementoLI(texto) {
  const liElemento = document.createElement("li");
  liElemento.textContent = texto;

  const removeButton = createButton("❌", () => removerItem(liElemento));

  const checkButton = createButton("✔", () =>
    liElemento.classList.toggle("check")
  );

  liElemento.appendChild(checkButton);
  liElemento.appendChild(removeButton);

  return liElemento;
}

function limparInput() {
  document.getElementById("myInput").value = "";
}

function novoItem() {
  const valorInput = pegarValor();

  if (valorInput.trim() !== "") {
    const liElemento = criarElementoLI(valorInput);
    document.getElementById("myUL").appendChild(liElemento);
    limparInput();
  } else {
    alert("Digite um valor antes de adicionar à lista.");
  }
}

function removerItem(item) {
  const ulElement = document.getElementById("myUL");
  ulElement.removeChild(item);
}
