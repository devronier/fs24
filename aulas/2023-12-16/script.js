const url =
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados/ce/municipios";

const cidades = document.getElementById("cidades");

function criarEAddElemento(cidade) {
  const cidadeOption = document.createElement("option");
  cidadeOption.textContent = cidade.nome;

  cidades.appendChild(cidadeOption);
}

async function buscarCidadesCE() {
  try {
    const resposta = await fetch(url);
    const json = await resposta.json();

    json.forEach(criarEAddElemento);
  } catch (error) {
    alert("não foi possivel carregar as cidades");
    console.log(error);
  }
}

buscarCidadesCE();
