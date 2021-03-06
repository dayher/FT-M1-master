'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert = function (value){

  if(value>this.value){
    if(!this.right) this.right =  new BinarySearchTree(value);
    else {this.right.insert(value)}
  }  
  if(value<this.value){
    if(!this.left) this.left = new BinarySearchTree(value);
    else {this.left.insert(value)}
  } 
  
}

BinarySearchTree.prototype.contains = function (val){
  if (this.value == val) return true;
  else {
    if(val < this.value ) {
      if(this.left) return this.left.contains(val);
      else return false;
    } else {
      if(this.right) return this.right.contains(val);
      else return false;
    }  
  }
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
//in-order izq sup der 

if(order === "in-order" || order === undefined){

  if(this.left === null){
    cb(this.value)
    if(this.right) this.right.depthFirstForEach(cb, order);
   } else {
     this.left.depthFirstForEach(cb, order);
     cb(this.value);
     if(this.right) this.right.depthFirstForEach(cb, order);
   }
}
else if(order === "pre-order"){
  //root left right
  cb(this.value)
  if(this.left != null) this.left.depthFirstForEach(cb,order);
  if(this.right != null) this.right.depthFirstForEach(cb,order);
}
else if(order === "post-order"){
  if(this.left != null) this.left.depthFirstForEach(cb,order);
  if(this.right != null) this.right.depthFirstForEach(cb,order);
  cb(this.value)
}

}

BinarySearchTree.prototype.breadthFirstForEach = function (callback, array){
  if(!array){
    var array = [];
  }
  if(this.left) array.push(this.left);
  if(this.right) array.push(this.right);
  callback(this.value);
  if(array.length>0) array.shift().breadthFirstForEach(callback, array);
}

BinarySearchTree.prototype.size = function (){

  let contador  = 1;

  if(!this.left && !this.right) return contador;

  if(this.left) contador += this.left.size();
  if(this.right) contador += this.right.size();

  return contador;
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
