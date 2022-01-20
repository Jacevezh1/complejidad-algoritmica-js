const { log } = require("console");

function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);   
    }
}



function repetir(arreglo) {
    let arregloRepetido = arreglo;
    return arregloRepetido;
    
}


function convertirString(arreglo) {
    let resultado = arreglo.map(elemento => elemento.toString());
    return resultado;
}


/* console.log(convertirString([1, 2, 3])) */
// Resultado [ '1', '2', '3' ], mas peso en el compilador con los Strings que con los numeros

// Arreglo bidimensional 5 = 25, 10 = 100
function dosDimensiones(valor) {
    let x = new Array(valor);
    for (let i = 0; i < valor; i++) {
        x[i] = new Array(valor).fill(0);   
    }

    return x;
}

// Consola resultado
// Contamos los arreglos que se crean, y el espacio que ocupan en memoria.
/* [ 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0 ],
[ 0, 0, 0, 0, 0 ] */

console.log(dosDimensiones(5));