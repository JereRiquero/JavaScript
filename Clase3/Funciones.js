miFuncion(3, 3);//Esto se le conoce como hosting

function miFuncion(a, b){//Una funcion puede o no tener parametros dentro de los parentesis
    //console.log("Sumamos: "+ (a+b));
    return a + b;
}

//Llamando a la funcion
miFuncion(5, 6);

let resultado = miFuncion(6, 7);
console.log(resultado);


//Declaramos una funcion de tipo epresion
let x = function(a, b){return a + b}; //Necesita cierre con punto y coma(;)
resultado = x(5, 6);//Al llamarla se pone la variable y parentesis
console.log(resultado);

//Funciones de tipo self y invoking
(function(a, b){
    console.log('Ejecutando la funcion: '+ (a + b));
})(9, 6);

console.log(typeof miFuncion);
function miFuncionDos(a, b){
    console.log(arguments);
}

miFuncionDos(8, 9);

//toString
var miFuncionTexto = miFuncionDos.toString();
console.log(miFuncionTexto)
  

//Funciones fleca
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(9, 9);
console.log(resultado);

//Los parametros son la lista de variables que definimos en una funcion y los argumentos son los valores que pasamos cuando llamamos a una funcion

let sumar = function(a, b){
    console.log(arguments[0]);//Muestra el parametro de: a
}

//Sumar todos los argumentos
let respuesta = sumarTodo(5, 4, 13, 10, 9);
console.log(respuesta);
function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}


//Tipos primitivos 
let k = 10
function cambiarValor(a){//Paso por valor
    a = 20;
}

cambiarValor(k);
console.log(k);


//Paso por referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Lepez'
}
console.log(persona)

function cambiarValorObjeto(p1){
p1.nombre = 'ignacio';
p1.apellido = 'Perez';
}
cambiarValorObjeto(persona);
console.log(persona);

