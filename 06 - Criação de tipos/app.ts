// 01 - Revisão de Generics
function showData<D>(arg: D): string {
    return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData("string"))
console.log(showData(true))



// 02 - Reduzindo tipos aceitos em Generics
function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é: ${obj.name}`
}

const meuObjeto = {name: "Porta", cor: "Branca"}
const otherProduct = {name: "Carro", wheels: 4, engine: 1.0}
const terceiroObj = {price: 19.99, category: "Roupa"}

console.log(showProductName(meuObjeto))
console.log(showProductName(otherProduct))
//console.log(showProductName(terceiroObj))



// 03 - Generics com Interface
interface myObject<T, U, V> {
    name: string
    rodas: T
    engine: U
    cor: V
}

type Carro = myObject<number, number, string>
type Caneta = myObject<boolean, boolean, string>

const kia:Carro = { name: "Sorento", rodas: 4, engine: 1.4, cor: "Laranja" }
const bic:Caneta = {name: "Classic", rodas: false, engine: false, cor: "Azul"}

console.log(kia)
console.log(bic)



// 04 - Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: '2TB',
    ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))
// console.log(getSomeKey(server, 'teste'))



// 05 - Keyof type operator
type hey = {name: string, age: number, hasDriveLicence: boolean}

type C = keyof hey

function showCharName(obj: hey, key: C): string {
    return `${obj[key]}`
}

const myChar: hey = {
    name: "Dan",
    age: 27,
    hasDriveLicence: false
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))



// 06 - Typeof type operator
const username: string = "Matheus"
const newUsername: typeof username = "Dan"

type person = typeof username
const otherUsername: person = "Xanis"



// 07 - Indexed access types
type Truck = {km: number, kg: number, description: string}
type Km = Truck['km']


const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
}

function showKm(km: Km) {
    console.log(`O veículo tem a km de: ${km}`)
}

showKm(newTruck.km)


const newCar = {
    kg: 5000,
    km: 2000
}

showKm(newCar.km)



// 08 - Conditional types
interface A {}
interface B extends A {}

type myType = B extends A ? number: string

const someVar:myType = 5
// const outraVar: myType = "Teste"



// 09 - Template literals type
type testA = "text"
type CustomType = `some ${testA}`

const testing: CustomType = "some text"

type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`