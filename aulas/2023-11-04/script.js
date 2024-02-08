// let maiorAltura = 0;

// let altura1 = +prompt("digite 1 sua altura, usando . para separar")
// maiorAltura = altura1;

// let altura2 = +prompt("digite 2 sua altura, usando . para separar")

// if(altura2 > maiorAltura) {
//     maiorAltura = altura2;
// }

// let altura3 = +prompt("digite 3 sua altura, usando . para separar")

// if(altura3 > maiorAltura) {
//     maiorAltura = altura3;
// }
// let altura4 = +prompt("digite 4 sua altura, usando . para separar")

// if(altura4 > maiorAltura) {
//     maiorAltura = altura4;
// }
// let altura5 = +prompt("digite 5 sua altura, usando . para separar")

// if(altura5 > maiorAltura) {
//     maiorAltura = altura5;
// }

// alert(maiorAltura)

let altura = 0;
let maiorAltura = Number.MIN_VALUE;
let menorAltura = Number.MAX_VALUE;

for (let i = 1; i < 16; i++) {
  altura = +prompt("digite sua altura, usando . para separar");

  if (altura > maiorAltura) {
    maiorAltura = altura;
  }

  if (altura < menorAltura) {
    menorAltura = altura;
  }

}

alert(maiorAltura);
alert(menorAltura);
