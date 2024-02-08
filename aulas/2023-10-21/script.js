// let resposta = confirm("Você tem mais de 18 ?");

// if (resposta) {
//   alert("Pode dirigir");
// } else {
//   alert("Não pode dirigir");
// }

// TODO: Perguntar a idade, e caso a idade seja maior que
// 18 Pode dirigir caso contrario nao pode

// let idade = prompt("Qual a sua idade");

// truthy

// TODO: Perguntar a idade,
// se caso ela seja menor 18, mostrar voce é um adolescente
// se caso seja igual a 18 (usando ===) voce tem 18
// caso contrario, mostrar voce é adulto

let idade = prompt("Qual a sua idade");

// idade = +idade
// idade = Number(idade)


if (idade < 18) {
  alert("voce é um adolescente");
} else if (idade > 18) {
  alert("Você é adulto");
} else {
  alert("voce tem 18");
}
