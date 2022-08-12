// Object Types
// 1 - Interface como parâmetro
interface Produto {
    nome: string
    preco: string
    isAvaliable: boolean
}

function showProductDetails(produto: Produto) {
    console.log(`Produto: ${produto.nome} / Preço: ${produto.preco}`)
    if(produto.isAvaliable){
        console.log("O produto está disponível")
    }
}

const tshirt: Produto = {
    nome: "Camisa",
    preco: "19.90",
    isAvaliable: false
}

showProductDetails(tshirt)



// 2 - Interface com parâmetro opcional
interface User {
    email: string,
    role?: string
}

function showUserDetails(user: User) {
    console.log(`E-mail: ${user.email}`)

    if(user.role) {
        console.log(`Função: ${user.role}`)
    }
}

const u1:User = {email: "dan@email.com", role: "Admin"}
const u2:User = {email: "xanis@email.com"}

showUserDetails(u1)
showUserDetails(u2)



// 3 - readonly
interface Car {
    marca: String
    readonly rodas: number
}

const fusca: Car = {
    marca: "Nissan",
    rodas: 4
}

console.log(fusca)

// teste readonly
// fusca.rodas = 5



// 4 - Index Signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15
console.log(coords)



// 5 - Herança de interfaces
interface Human {
    name: string
    age: number
}

interface Superhuman extends Human {
    superpowers: string[]
}


// Declarando pessoas declaradas na interface
const Dan: Human = {
    name: "Dan",
    age: 27
}
console.log(Dan)


const goku: Superhuman = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"]
}
console.log(goku)
console.log(goku.superpowers[1])



// 6 - Intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold)



// 7 - Readonly array
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]
console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)
// myArray[0] = "Teste"



// 8 - Tuplas
type fiveNumbers = [number, number, number, number, number]
const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
console.log(myNumberArray)


// 9 - Tuplas (readonly)
function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0])
    console.log(numbers[1])
}

showNumbers([1, 2])