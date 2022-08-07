// Avançando em tipos
// 1 - Arrays:
// Sintaxe 1 (number[], string[])
let numeros: number[] = [5, 4, 3, 2, 1]
let frutas: string[] = ['Uva', 'Pera', 'Maçã']

// Sintaxe 2 (Array<number>, Array<string>)
let outrosNumeros: Array<number> = [9, 8, 7, 6]
let verduras: Array<string> = ['Morango', 'Kiwi', 'Framboesa']

// Array do tipo any (vai contra o proposito do TS, pois valida qualquer tipo de dado)
let deixaPassarTudo: any = [1, 'gato', 2, 'leão', 3, 'onça pintada']


// Teste de inserção de tipos diferentes no array
// (descomentar linha 16 para ver o erro)
// frutas.push(7)

// Teste arrays
// Bloco 1
console.log(numeros)
console.log(frutas)

// Bloco 2
console.log(outrosNumeros)
console.log(verduras)

// Array do tipo any
console.log(deixaPassarTudo)