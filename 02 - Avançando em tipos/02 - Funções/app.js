"use strict";
// Funções
// Parametro
function meow(gato) {
    console.log(gato);
}
meow("Miau miaaaaaaaau caralho");
// Funções de retorno
function greeting(name) {
    return `Olá ${name} :)`;
}
console.log(greeting('Danilo'));
// Funções anônimas
setTimeout(function () {
    const minimumSalary = 1212.00;
    console.log("Salário mínimo 2022: R$ " + minimumSalary);
}, 2000);
// Tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const coordenadas = { x: 32.987, y: 44.588 };
passCoordinates(coordenadas);
// Propriedades opcionais (variavel -> ? =  variavel?)
function mostrarNumeros(a, b, c) {
    console.log('A: ' + a);
    console.log('B: ' + b);
    if (c) {
        console.log('C: ' + c);
    }
}
mostrarNumeros(3, 2, 1);
mostrarNumeros(99, 98);
// Validação de parâmetro opcional
function advancedGreeting(firstName, lastName) {
    if (lastName != undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem? :)`;
    }
    return `Olá, ${firstName}, tudo bem? :)`;
}
console.log(advancedGreeting('Danilo', 'Santos'));
console.log(advancedGreeting('Danilo'));
