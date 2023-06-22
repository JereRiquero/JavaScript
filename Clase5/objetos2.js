let x = 10; //Variable de tipo primitiva
console.log(x.length);
console.log('Tipos primitivos')
//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil30@gmail.com',
    edad: 28,
    idioma: 'ES',

    get lang(){
        return this.idioma.toLocaleUpperCase(); //Convierte las minisculas a mayusculas
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){//Esto es un metodo o funcion en JavaScript
        return this.nombre+' '+this.apellido;
    },

    get nombreEdad(){
        return this.nombre+', Edad: '+this.edad;
    }
   
}
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());


let persona2 = new Object(); //Debe crear un objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'San juan 14';
persona2.telefono = '2546778545'
console.log(persona2.telefono);

console.log(persona['apellido']); //Accedemos como si fuera un arreglo
console.log('Usamos el ciclo fon in')
//For in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}
persona.apellida = 'Betancud';
delete persona.apellida; //Cambiamos dinamicamente un valor del objeto
console.log(persona);

//Distintas formas de imprimir un objeto
//Numero 1: La mas sencilla: Concatenar cada valor de cada propiedad

console.log(persona.nombre+' '+persona.apellido);

//Numero 2: A traves del ciclo for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Numero 3:La funcion Object.values()
let personaArray = Object.values(persona);
console.log(personaArray)


//Numero 4:Utilizaremos el metodo JSON.stringify
let personaString = JSON.stringify(persona)
console.log(personaString);

console.log('Comenzamos a utilizar el metodo get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el metodo get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function persona3(nombre, apellido, email){
    this.nombre = nombre;
    this.apellida = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}
let padre = new persona3('Leo', 'Lopez', 'llopez@gmail.com');
padre.nombre = 'Luis' //Modificamos el nombre
console.log(padre)

let madre = new persona3('Laura', 'Contrera', 'lcontrera@gmail.com');
console.log(madre);

//Diferentes formas de crear objetos
//Caso objeto 1
let miObjeto = new Object(); //Esta es una opcion formal
//Caso objeto 2
let miObjeto2 = {} //Esta opcion es breve y recomendada

//Caso String 1
let miCadena1 = new String('Hola'); //Sintaxis formal
//Caso String 2
let miCadena2 = 'Hola' //Esta es la sintaxis simplificada y recomendada

//Caso con numeros 1
let miNumero = new Number(1);//Esta es formal no recomendable
//Caso con numeros 2
let miNumero2 = 1; //Sintaxis recomendada


//Caso boolean 1
let miBoolean = new Boolean(false); //Formal
//Caso boolean 2
let miBoolean2 = false; //Sintaxis recomendada

//Caso arreglos 1
let miArreglo1 = new Array(); //Formal
//Caso arreglos 2
let miArreglo2 = []; //Sintaxis recomendada

//Caso function 1
let miFuncion1 = new function(){}; //Todo despues de new es considerado objeto
//Caso function 2
let miFuncion2 = function(){}; //Notacion simplificada y recomendada

//Uso de prototype
persona3.prototype.telefono = '2617839433'
console.log(padre);
console.log(madre.telefono)

//Uso de call
let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo, telefono){
        return titulo+': '+ this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}
console.log(persona4.nombreCompleto2('Lic', '2604665876'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing', '2604662589'));

//Metodo Apply 
let arreglo = ['Ing', '2604565897']
console.log(persona4.nombreCompleto2.apply(persona5, arreglo))

