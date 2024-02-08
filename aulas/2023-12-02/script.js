const frutas = await fetch(
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados/ce/municipios"
);

function mostrarFruta(valor, segundo, terceiro) {
  const li = document.createElement("li");
  li.textContent = valor;

  document.body.appendChild(li);
}

frutas.forEach(mostrarFruta);
