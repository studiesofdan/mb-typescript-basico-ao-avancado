// 01 - Campos em classe
class Usuario {
    name!: string
    age!: number
}

const dan = new Usuario()

console.log(dan)

dan.name = "Dan"
dan.age = 27

console.log(dan)



// 02 - Constructor
class Produtos {
    nomeProduto
    precoProduto

    constructor(nomeProduto: string, precoProduto: number) {
        this.nomeProduto = nomeProduto
        this.precoProduto = precoProduto
    }
}

const wella = new Produtos("Creme de massagem", 500.00)
console.log(wella)



// 03 - Propriedades readonly
class Moto {
    moto
    readonly rodas = 2

    constructor(moto: string){
        this.moto = moto
    }
}

const kawasaki = new Moto("kawasaki")
console.log(kawasaki)
console.log(kawasaki.rodas)



// 04 - Herança e super
class Maquina {
    nome

    constructor(nome: string){
        this.nome = nome
    }
}

class KillerMaquina extends Maquina {
    armas

    constructor(nome: string, armas: number) {
        super(nome)
        this.armas = armas
    }
}

const terminator = new Maquina("tuts")
const kill = new KillerMaquina("kill", 90)
console.log(terminator)
console.log(kill)



// 05 - Métodos
class Dwarf {
    name

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log(`Olá ${this.name} :)`)
    }
}

const jimmy = new Dwarf("jimmy")
console.log(jimmy)
jimmy.greeting()



// 06 - This
class Caminhao {
    montadora
    tracoes

    constructor(montadora: string, tracoes: number) {
        this.montadora = montadora
        this.tracoes = tracoes
    }

    caracteristicas() {
        console.log(`Montadora: ${this.montadora}, Tracoes: ${this.tracoes}`)
    }
}

const mercedes = new Caminhao("Mercedes", 2)
mercedes.caracteristicas()



// 07 - Getters
class Pessoa {
    nome
    sobrenome

    constructor(nome: string, sobrenome: string) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    get nomeCompleto() {
        return this.nome + "" + this.sobrenome
    }
}

const danilo = new Pessoa("Danilo", "Santos")

console.log(danilo.nome)
console.log(danilo.sobrenome)



// 08 - Setters
class Coordenadas {
    x!: number
    y!: number

    set fillX(x: number) {
        if(x === 0) {
            return
        }

        this.x = x
        console.log("x inserido com sucesso")
    }

    set fillY(y: number) {
        if(y === 0) {
            return
        }

        this.y = y
        console.log("y inserido com sucesso")
    }


    get getCoordenadas() {
        return `X: ${this.x} Y: ${this.y}`
    }
}


const myCoords = new Coordenadas()

myCoords.fillX = 2
myCoords.fillY = 4

console.log(myCoords)
console.log(myCoords.getCoordenadas)



// 09 - Herdando Interfaces
interface mostrarTitulo {
    itemTitulo(): string
}

class blogPost implements mostrarTitulo {
    titulo

    constructor(titulo: string) {
        this.titulo = titulo
    }

    itemTitulo() {
        return `O título do post é: ${this.titulo}`
    }
}

const post = new blogPost("Hello World!")
console.log(post.itemTitulo())



// 10 - Override de métodos
class Musica {
    someMethod() {
        console.log("Motomami, motomami motomami")
    }
}

class outraMusica extends Musica {
    someMethod() {
        console.log("Keep it cute, manito, keep it cute / Que aquí el mejor artista es Dios")
    }
}

const musica = new outraMusica()
musica.someMethod()



// 11 - Visibilidade
// 11.1 Public
class Hello {
    public hello = "Hello World!"
}

const ariana = new Hello()
console.log(ariana.hello)



// 11.2 Protected
class strawberryColor {
    protected color = "Vermelhoooo";

    protected protectedMethod() {
        console.log("Este é um método protegido")
    }
}

class Tipo extends strawberryColor {
    mostrarCorMorango() {
        console.log("Cor do morango: " + this.color)
    }

    mostrarMetodoProtegido() {
        this.protectedMethod()
    }

}

const morango = new Tipo()

morango.mostrarCorMorango()
morango.mostrarMetodoProtegido()



// 11.3 Private
class Iogurte {
    private valorIogurte = "R$ 42,90"

    private comprarIogurte(){
        console.log("Iogurte comprado no valor de " + this.valorIogurte)
    }

    mostrarCompraIogurte() {
        this.comprarIogurte()
    }
}

const supermercadoMeAssaltando = new Iogurte()
supermercadoMeAssaltando.mostrarCompraIogurte()



// 12 - Static members
class Estatico {
    static property = "Teste de visibilidade estática"

    static propStatic() {
        console.log(this.property)
    }
}

console.log(Estatico.property)
Estatico.propStatic()



// 13 - Generic class
class classeGenerica<T, U> {
    primeiro
    segundo

    constructor(primeiro: T, segundo: U) {
        this.primeiro = primeiro
        this.segundo = segundo
    }

    get mostrarPrimeiroNome() {
        return `O primeiro nome é: ${this.primeiro}`
    }
}

const novoNome = new classeGenerica("Britney", "Spears")
console.log(novoNome.mostrarPrimeiroNome)



// 14 - Parameter properties
class ParameterProperties {
    constructor (
        public nomeProduto: String, 
        private codigoProduto: number, 
        protected valorProduto: number
    ) 
    
    {
        this.nomeProduto = nomeProduto
        this.codigoProduto = codigoProduto
        this.valorProduto = valorProduto
    }

    get mostrarCodProduto() {
        return `Código do produto: ${this.codigoProduto}`
    }

    get mostrarPreco() {
        return `Valor do produto: ${this.valorProduto}`
    }
}

const produto = new ParameterProperties("Pêra", 89866709, 7.99)
console.log(produto.nomeProduto)
console.log(produto.mostrarCodProduto)
console.log(produto.mostrarPreco)



// 15 - Class expressions
const classExpression = class<T> {
    nome

    constructor(nome: T) {
        this.nome = nome
    }
}

const pessoa = new classExpression("Danilo")
console.log(pessoa.nome)



// 16 - Classe abstrata
abstract class AbstractClass {
    abstract showName(): void
}

class AbstractExample extends AbstractClass {
    nome: string

    constructor(nome: string) {
        super()
        this.nome = nome
    }

    showName() {
        console.log(`Nome: ${this.nome}`)
    }
}

const novoObjetoAbstrato = new AbstractExample("Paola Oliveira")
novoObjetoAbstrato.showName()



// 17 - Relações entre classes
class Gato {
    nome!: string
}

class Cachorro {
    nome!: string
}

const gatinho: Cachorro = new Gato()
console.log(gatinho)