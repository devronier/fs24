function Gato(nomePassado="", racaPassada="") {

    this.nome = nomePassado;
    this.raca = racaPassada;
}

let gatoMurph = new Gato("Murph", "Siames")

let gatoLico = new Gato("Lico", "Persa")

let gatoJuba = new Gato("Juba")

// console.log(gatoMurph)
// console.log(gatoLico)
// console.log(gatoJuba.raca.toUpperCase())


let nome = new String(1000)
let idade = new Number("1010")
let teste = new Boolean("10")
let cores = new Array("vermelho", "azul")


function chamar() {
    document.body.innerHTML +=  "<h2>Ronier</h2>"
}




