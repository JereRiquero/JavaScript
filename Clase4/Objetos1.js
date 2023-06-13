let x = 10; //Variable de tipo primitiva
console.log(x.length);
console.log('Tipos primitivos')
//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil30@gmail.com',
    edad: 30,
    nombreCompleto: function(){//Esto es un metodo o funcion en JavaScript
        return this.nombre+' '+this.apellido;
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
