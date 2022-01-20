// Requerir la clase, dentro del paquete perfs_hooks, la importamos
const performance = require('perf_hooks')

function contar(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);   
    }
}

// Envuelve el algoritmo, toma en cuenta el tiempo en el que empieza y en el que termina.
let inicio_tiempo = performance.performance.now()
contar(10);
let final_tiempo = performance.performance.now()

let duracion = final_tiempo - inicio_tiempo;

// No corre con NodeJs con performance en VS, solo en navegador
console.log(`El algoritma contar ha durado ${duracion}ms.`);



// Consola: El resultado va cambiando (El tiempo no es exacto)

// 1.El algoritma contar ha durado 16.606375992298126ms.
// 2. El algoritma contar ha durado 9.128727972507477ms.



