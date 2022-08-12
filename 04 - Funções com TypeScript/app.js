"use strict";
// Funções com TypeScript
// 1 - void
function funcaoSemRetorno() {
    console.log("Esta função não tem retorno");
}
funcaoSemRetorno();
// 2 - Callback sem argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Danilo");
preGreeting(greeting, "Santos");
// 3 - Generic functions
function primeiroElemento(arr) {
    return arr[0];
}
console.log(primeiroElemento([1, 2, 3]));
console.log(primeiroElemento(["a", "b", "c"]));
// 4 - Constraints em generic functions
function maiorNumero(a, b) {
    let maior;
    if (+a > +b) {
        maior = a;
    }
    else {
        maior = b;
    }
    return maior;
}
console.log(maiorNumero(5, 3));
console.log(maiorNumero("12", "5"));
// 5 - Especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays([1, 2, 3], ["Teste", "Testando"]));
// 6 - Argumentos opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting("Matheus"));
console.log(modernGreeting("Pedro", "Dr."));
// 7 - Parâmetro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(15, 12));
// 8 - O tipo unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um número");
    }
}
doSomething([1, 2, 3]);
doSomething(5);
// 9 - O tipo never (não pode receber nenhum valor)
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("Not found")
// 10 - Rest operator com TS
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 348, 2348));
// Testando a permissão do tipo
// console.log(sumAll("teste"))
// 11 - Destructuring com TS
function showProductDetails({ nome, preco }) {
    return `Produto: ${nome} por R$${preco}`;
}
const camisa = { nome: "Camisa Polo", preco: 199.99 };
console.log(showProductDetails(camisa));
