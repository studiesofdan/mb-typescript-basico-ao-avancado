"use strict";
// 01 - Campos em classe
class Usuario {
}
const dan = new Usuario();
console.log(dan);
dan.name = "Dan";
dan.age = 27;
console.log(dan);
// 02 - Constructor
class Produtos {
    constructor(nomeProduto, precoProduto) {
        this.nomeProduto = nomeProduto;
        this.precoProduto = precoProduto;
    }
}
const wella = new Produtos("Creme de massagem", 500.00);
console.log(wella);
// 03 - Propriedades readonly
class Moto {
    constructor(moto) {
        this.rodas = 2;
        this.moto = moto;
    }
}
const kawasaki = new Moto("kawasaki");
console.log(kawasaki);
console.log(kawasaki.rodas);
// 04 - Herança e super
class Maquina {
    constructor(nome) {
        this.nome = nome;
    }
}
class KillerMaquina extends Maquina {
    constructor(nome, armas) {
        super(nome);
        this.armas = armas;
    }
}
const terminator = new Maquina("tuts");
const kill = new KillerMaquina("kill", 90);
console.log(terminator);
console.log(kill);
// 05 - Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(`Olá ${this.name} :)`);
    }
}
const jimmy = new Dwarf("jimmy");
console.log(jimmy);
jimmy.greeting();
// 06 - This
class Caminhao {
    constructor(montadora, tracoes) {
        this.montadora = montadora;
        this.tracoes = tracoes;
    }
    caracteristicas() {
        console.log(`Montadora: ${this.montadora}, Tracoes: ${this.tracoes}`);
    }
}
const mercedes = new Caminhao("Mercedes", 2);
mercedes.caracteristicas();
// 07 - Getters
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomeCompleto() {
        return this.nome + "" + this.sobrenome;
    }
}
const danilo = new Pessoa("Danilo", "Santos");
console.log(danilo.nome);
console.log(danilo.sobrenome);
// 08 - Setters
class Coordenadas {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("x inserido com sucesso");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("y inserido com sucesso");
    }
    get getCoordenadas() {
        return `X: ${this.x} Y: ${this.y}`;
    }
}
const myCoords = new Coordenadas();
myCoords.fillX = 2;
myCoords.fillY = 4;
console.log(myCoords);
console.log(myCoords.getCoordenadas);
class blogPost {
    constructor(titulo) {
        this.titulo = titulo;
    }
    itemTitulo() {
        return `O título do post é: ${this.titulo}`;
    }
}
const post = new blogPost("Hello World!");
console.log(post.itemTitulo());
// 10 - Override de métodos
class Musica {
    someMethod() {
        console.log("Motomami, motomami motomami");
    }
}
class outraMusica extends Musica {
    someMethod() {
        console.log("Keep it cute, manito, keep it cute / Que aquí el mejor artista es Dios");
    }
}
const musica = new outraMusica();
musica.someMethod();
// 11 - Visibilidade
// 11.1 Public
class Hello {
    constructor() {
        this.hello = "Hello World!";
    }
}
const ariana = new Hello();
console.log(ariana.hello);
// 11.2 Protected
class strawberryColor {
    constructor() {
        this.color = "Vermelhoooo";
    }
    protectedMethod() {
        console.log("Este é um método protegido");
    }
}
class Tipo extends strawberryColor {
    mostrarCorMorango() {
        console.log("Cor do morango: " + this.color);
    }
    mostrarMetodoProtegido() {
        this.protectedMethod();
    }
}
const morango = new Tipo();
morango.mostrarCorMorango();
morango.mostrarMetodoProtegido();
// 11.3 Private
class Iogurte {
    constructor() {
        this.valorIogurte = "R$ 42,90";
    }
    comprarIogurte() {
        console.log("Iogurte comprado no valor de " + this.valorIogurte);
    }
    mostrarCompraIogurte() {
        this.comprarIogurte();
    }
}
const supermercadoMeAssaltando = new Iogurte();
supermercadoMeAssaltando.mostrarCompraIogurte();
// 12 - Static members
class Estatico {
    static propStatic() {
        console.log(this.property);
    }
}
Estatico.property = "Teste de visibilidade estática";
console.log(Estatico.property);
Estatico.propStatic();
// 13 - Generic class
class classeGenerica {
    constructor(primeiro, segundo) {
        this.primeiro = primeiro;
        this.segundo = segundo;
    }
    get mostrarPrimeiroNome() {
        return `O primeiro nome é: ${this.primeiro}`;
    }
}
const novoNome = new classeGenerica("Britney", "Spears");
console.log(novoNome.mostrarPrimeiroNome);
// 14 - Parameter properties
class ParameterProperties {
    constructor(nomeProduto, codigoProduto, valorProduto) {
        this.nomeProduto = nomeProduto;
        this.codigoProduto = codigoProduto;
        this.valorProduto = valorProduto;
        this.nomeProduto = nomeProduto;
        this.codigoProduto = codigoProduto;
        this.valorProduto = valorProduto;
    }
    get mostrarCodProduto() {
        return `Código do produto: ${this.codigoProduto}`;
    }
    get mostrarPreco() {
        return `Valor do produto: ${this.valorProduto}`;
    }
}
const produto = new ParameterProperties("Pêra", 89866709, 7.99);
console.log(produto.nomeProduto);
console.log(produto.mostrarCodProduto);
console.log(produto.mostrarPreco);
// 15 - Class expressions
const classExpression = class {
    constructor(nome) {
        this.nome = nome;
    }
};
const pessoa = new classExpression("Danilo");
console.log(pessoa.nome);
// 16 - Classe abstrata
class AbstractClass {
}
class AbstractExample extends AbstractClass {
    constructor(nome) {
        super();
        this.nome = nome;
    }
    showName() {
        console.log(`Nome: ${this.nome}`);
    }
}
const novoObjetoAbstrato = new AbstractExample("Paola Oliveira");
novoObjetoAbstrato.showName();
// 17 - Relações entre classes
class Gato {
}
class Cachorro {
}
const gatinho = new Gato();
console.log(gatinho);
