"use strict";
function showProductDetails(produto) {
    console.log(`Produto: ${produto.nome} / Preço: ${produto.preco}`);
    if (produto.isAvaliable) {
        console.log("O produto está disponível");
    }
}
const tshirt = {
    nome: "Camisa",
    preco: "19.90",
    isAvaliable: false
};
showProductDetails(tshirt);
function showUserDetails(user) {
    console.log(`E-mail: ${user.email}`);
    if (user.role) {
        console.log(`Função: ${user.role}`);
    }
}
const u1 = { email: "dan@email.com", role: "Admin" };
const u2 = { email: "xanis@email.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    marca: "Nissan",
    rodas: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
// Declarando pessoas declaradas na interface
const Dan = {
    name: "Dan",
    age: 27
};
console.log(Dan);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"]
};
console.log(goku);
console.log(goku.superpowers[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
// 7 - Readonly array
let myArray = ["Maçã", "Laranja", "Banana"];
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
// 9 - Tuplas (readonly)
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
