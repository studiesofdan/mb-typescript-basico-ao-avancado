"use strict";
// 01 - Revisão de Generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("string"));
console.log(showData(true));
// 02 - Reduzindo tipos aceitos em Generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const meuObjeto = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
const terceiroObj = { price: 19.99, category: "Roupa" };
console.log(showProductName(meuObjeto));
console.log(showProductName(otherProduct));
const kia = { name: "Sorento", rodas: 4, engine: 1.4, cor: "Laranja" };
const bic = { name: "Classic", rodas: false, engine: false, cor: "Azul" };
console.log(kia);
console.log(bic);
// 04 - Type parameters
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Dan",
    age: 27,
    hasDriveLicence: false
};
console.log(showCharName(myChar, 'name'));
console.log(showCharName(myChar, 'age'));
// 06 - Typeof type operator
const username = "Matheus";
const newUsername = "Dan";
const otherUsername = "Xanis";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
showKm(newTruck.km);
const newCar = {
    kg: 5000,
    km: 2000
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
