// Typeof Type Guard
function soma(a: number | string, b: number | string) {
    if(typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b))
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    } else {
        console.log("Impossível realizar a soma!")
    }
}

soma("4", "57")
soma(12, 42.3)
soma("5", 6)



// Checando se valor existe
function operations(arr: number[], operation?: string | undefined) {
    if(operation) {
        if(operation === "soma") {
            const soma = arr.reduce((i, total) => i + total)
            console.log(soma)
        } 
        
        else if(operation === "multiplicacao") {
            const multiplicacao = arr.reduce((i, total) => i * total)
            console.log(multiplicacao)
        }
    } else {
        console.log("Por favor, defina uma operação")
    }
}

operations([1, 2, 3])
operations([1, 2, 3], "soma")



// Operador instance of
class User {
    name
    constructor(name: string){
        this.name = name;
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const user = new User('Dan')
const superuser = new SuperUser('Engels')

console.log(user)
console.log(superuser)

function userGreeting(user: object) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
    } else if (user instanceof User) {
        console.log(`Olá ${user.name}`)
    }
}

userGreeting(user)
userGreeting(superuser)



// Operador in
class Cat {
    nome
    raca
    constructor(nome: string, raca?: string) {
        this.nome = nome;
        if(raca){
            this.raca = raca;
        }
    }
}

const xedis = new Cat("Xedis")
const lepix = new Cat('Lepix', 'Siamês')

function mostrarDetalhesGato(cat: Cat) {
    if ('raca' in cat) {
        console.log(`Gato da raça ${cat.raca}`)
    } else {
        console.log("O gato é um SRD")
    }
}

mostrarDetalhesGato(xedis);
mostrarDetalhesGato(lepix);