"use strict";
// Literal types
// 1
let teste;
teste = "testando";
console.log(teste);
// 2
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
// Non null assertion operator (Nnao)
const p = document.getElementById("inserirTexto");
console.log(p.innerText);
// BigInt (ES2020)
let n;
n = 1000n;
console.log(n);
// Symbol (ES2020)
let simboloA = Symbol("A");
let simboloB = Symbol("A");
console.log(simboloA == simboloB);
console.log(simboloA === simboloB);
