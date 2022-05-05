'use strict'
// No cambies los nombres de las funciones.
/*
function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  var array = [1];
  var cociente = num;

  for (let i = 2; i<=num; i++){
    while(!(cociente%i)) {
      array.push(i);
      cociente/=i;
    }
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let len = array.length;

  for (let i = 0; i < len - 1; i++) { // este bucle exterior solo se encarga de repetir len-1 veces el codigo interno, deberia mejorarsee
    
    for (let j = 0; j < len - 1; j++) {
      if (array[j]>array[j+1]) { 

        let aux = array[j];
        array[j]=array[j+1];
        array[j+1]=aux;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  let len = array.length;

  for (let i = 1; i < len; i++) {
    let j;
    for ( j = i; j > 0 && array[i]<array[j-1] ; j--) {
        array[i]=array[j-1];
    } 
    array[j]=array[i];
  }
    return array;

  

    for (let i = 1; i < array.length; i++) {
      let currentValue = array[i]
      let j
      for (j = i - 1; j >= 0 && array[j] > currentValue; j--) {
        array[j + 1] = array[j]
      }
      array[j + 1] = currentValue
    }
    return array
  

}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

}
*/

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
