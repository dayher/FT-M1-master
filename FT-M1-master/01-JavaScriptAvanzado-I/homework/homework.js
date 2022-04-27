/*var x = 1; // Para esta línea no cambia el resultado si se declara con var o sin var
var a = 5;
var b = 10;
var c = function(a, b, c) {
    x=10 // Para esta línea si se declara sin var entonces se estaria modificando la variable global del mismo nombre
    // conviene declarar siempre con var , evitando modificar el outer scope.
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);*/

/*console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
var baz = 2; //  si no se declara con var no puede ser llamada en el console.log por que baz no existe en este scope*/

/*var instructor = "Tony";
if(true) {
    let instructor = "Franco"; // si se declara con var se sobreescribe, pero al declarar con let el console.log toma el global
}
console.log(instructor);*/


/*var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco"; // si no se usara la declaracion var entonces el valor de la variable instructor cambiaria fuera de la funcion
      console.log(instructor);
   }
})(); // esta funcion se declara sin nombre y no se guarda en una variable, pero usando los parentesis es invocada
console.log(instructor);*/

/*var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor); // este valor cambia porque instructor esta declarado dos veces con el prefijo var
console.log(pm); // este valor no cambia porque esta declarado con el prefijo let*/

/*function test() {
    console.log(a); // undefined, se declara en la linea 62 pero no se guarda su valor
    console.log(foo()); // 2 es el retorno de la funcion foo
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();
}*/

/*var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack; // si food es verdadero esta linea no se usa
}

getFood(false); // devuelve undefined, pero no se hace console.log*/

/*var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //Aurelio de la Rosa, el metodo es llamado en obj.prop no en obj
var test = obj.prop.getFullname;// lo ideal seria usar prototype para la funcion getFullname

console.log(test()); // undefined, en este caso this busca la propiedad fullname del objeto global, la cual no existe*/

function printing() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0); // aunque el retraso es de 0 ms la siguiente línea se ejecuta primero
    console.log(4);
 }
 
 printing();
