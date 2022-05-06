'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.length <= 1) return array;

  let pivot = Math.floor(Math.random() * array.length),
  smaller = [],
  bigger = [],
  equals = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[pivot]) smaller.push(array[i]);
    else if (array[i] > array[pivot]) bigger.push(array[i]);
    else equals.push(array[i]);
  }

  return [...quickSort(smaller), ...equals, ...quickSort(bigger)];

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));

}

function merge(arr1, arr2) {
  let idx1 = 0,
    idx2 = 0,
    final = [];
    while (idx1 < arr1.length && idx2 < arr2.length) {
      if (arr1[idx1] < arr2[idx2]) {
        final.push(arr1[idx1]);
        idx1++;
      } else {
        final.push(arr2[idx2]);
        idx2++;
      }
    }

    return final.concat(arr1.slice(idx1)).concat(arr2.slice(idx2));

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
