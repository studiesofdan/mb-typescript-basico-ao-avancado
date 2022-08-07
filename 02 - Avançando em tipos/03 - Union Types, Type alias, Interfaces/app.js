"use strict";
// TS: Union types, Type alias, Interfaces
// Union types ( | )
function balance(valor) {
    return valor;
}
console.log(balance(23.546));
console.log(balance('23.546'));
// Union types (typeof)
function albunsRosalia(valor) {
    if (typeof valor === 'boolean') {
        return `Ouvindo o álbum motomami? ${valor}`;
    }
    return `Buscar Rosalía, album ${valor}`;
}
console.log(albunsRosalia(false));
console.log(albunsRosalia('Motomami'));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("200");
showId(789);
function mostrarCoordenadas(coord) {
    console.log(`X: ${coord.x} Y: ${coord.y} Z: ${coord.z}`);
}
const coordObj = {
    x: 10,
    y: 20,
    z: 30
};
mostrarCoordenadas(coordObj);
