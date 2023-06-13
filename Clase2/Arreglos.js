//Creacion de Array o arreglos
//let autos = new Array('Ferrari', 'Renault', 'BMW'); Esta sintaxis ya no se utiliza
const autos = ['Ferrari', 'Renault', 'BMW'];//Esta es la forma en la que se realiza Actualmente
console.log(autos);


//Recorremos los elementos de un arreglo
console.log(autos[0]);//De esta manera accedemos al elemento que queremos del arreglo
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i+' : '+autos[i])
}

//Modificamos los elementos del arreglo
autos[1] = 'Volvo';
console.log(autos)

//Agregmaos nuevos valores al arreglo
autos.push('Audi');//Agregamos el elemento al final del arreglo
console.log(autos)

//Otras formas de agregar elementos al arreglo
autos[autos.length] = 'Porche'
console.log(autos);

//Tercer forma de agregar alementos
autos[6] = 'Renault';
console.log(autos);

// Como preguntar si es un Array o Arreglo
console.log(Array.isArray(autos))//Devuelve un resultado booleano:


console.log(autos instanceof Array);//Preguntamos si la variable es una instancia de la clase Array
