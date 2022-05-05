'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if(array.legth <= 1) return array;
 /* 
  if(array.length == 2 ) {
    if (array[0]>array[1]) {
      let retorno = []
      retorno[0]=array[1];
      retorno[1]=array[0];
      return retorno;
    } 
    
  }
  */
  let pivote = Math.floor((Math.random())*(array.length-1));

  let arrIzq = [];
  let arrDer = [];

  for (let i = 0; i < array.length; i++) {

    if(array[i]<=array[pivote]){
      arrDer.push(array[i]);
    } else {
      arrIzq.push(array[i]);
    }

  }

return quickSort(arrIzq).concat(quickSort(arrDer));

}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
