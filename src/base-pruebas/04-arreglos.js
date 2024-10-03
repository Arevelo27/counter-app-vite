
// Arreglos en JS
// const arreglo = new Array( 100 );
// arreglo.push( 1 );

const arreglo = [1, 2, 3, 4];
// arreglo.push( 1 );
// arreglo.push( 2 );
// arreglo.push( 3 );
// arreglo.push( 4 );
// arreglo.push( 5 );

let arreglo2 = [...arreglo, 6, 7, 8, 9, 10];
arreglo2.push( 5 );

const arreglo3 = arreglo2.map( valor => valor * 2 );

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)