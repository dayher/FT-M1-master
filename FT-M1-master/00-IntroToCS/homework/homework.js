'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
 let len = num.length;
 let suma = 0;
 let factor = 1;

 for(let i=len-1; i>=0; i--){
  if(num[i]==='1'){
    suma += factor;
  }
  factor*=2;
 }
 return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  let cadena =[];

  while(num/2 != 0){

    cadena.unshift(num%2);
    num = Math.floor(num/2);

  }
  return cadena.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}