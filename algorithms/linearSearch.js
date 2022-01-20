/**
 * Complejidad Temporal -> O( n + 3  )
 * Complejidad Espacial -> O(  )
 * Espacio Auxiliar -> O(  )
 */


// Toma una clave, y la busca en un arreglo de distitnos elementos
 function linearSearch(arreglo, clave) {
    

    for (let indice = 0; indice < arreglo.length; indice++) { // O(n)
      if (arreglo[indice] === clave) { // 0(1)
        return indice; // 0(1)
      }
    }
    return -1; // 0(1)
}