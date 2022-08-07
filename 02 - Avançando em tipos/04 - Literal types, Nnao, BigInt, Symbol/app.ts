// Literal types
// 1
let teste: "testando"
teste = "testando"
console.log(teste)

// 2
function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`)
}
showDirection("left")


// Non null assertion operator (Nnao)
const p = document.getElementById("inserirTexto")
console.log(p!.innerText)


// BigInt (ES2020)
let n: bigint
n = 1000n
console.log(n)


// Symbol (ES2020)
let simboloA: symbol = Symbol("A")
let simboloB: symbol = Symbol("A")

console.log(simboloA == simboloB)
console.log(simboloA === simboloB)
