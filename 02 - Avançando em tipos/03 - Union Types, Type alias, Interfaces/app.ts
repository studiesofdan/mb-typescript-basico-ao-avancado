// TS: Union types, Type alias, Interfaces
// Union types ( | )
function balance(valor: number | string){
    return valor;
}

console.log(balance(23.546))
console.log(balance('23.546'))

// Union types (typeof)
function albunsRosalia(valor: boolean | string) {
    if(typeof valor === 'boolean') {
        return `Ouvindo o álbum motomami? ${valor}`
    }

    return `Buscar Rosalía, album ${valor}`
}

console.log(albunsRosalia(false))
console.log(albunsRosalia('Motomami'))



// type alias
type ID = number | string

function showId(id: ID){
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("200")
showId(789)



// interface
interface Pontos {
    x: number
    y: number
    z: number
}

function mostrarCoordenadas(coord: Pontos) {
    console.log(`X: ${coord.x} Y: ${coord.y} Z: ${coord.z}`)
}

const coordObj:Pontos = {
    x: 10,
    y: 20,
    z: 30
}

mostrarCoordenadas(coordObj)