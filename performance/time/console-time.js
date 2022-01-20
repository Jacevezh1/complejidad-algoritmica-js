// No se require importar


const performance = require('perf_hooks')

function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);   
    }
}

// Envuelve el algoritmo, toma en cuenta el tiempo en el que empieza y en el que termina.
console.time('Duracion-contar')
contar(10);
console.timeEnd('Duracion-contar')




// Consola: El resultado va cambiando (El tiempo no es exacto)

// 1.El algoritma contar ha durado 16.606375992298126ms.
// 2. El algoritma contar ha durado 9.128727972507477ms.


// Duracion-contar: 20.558ms

