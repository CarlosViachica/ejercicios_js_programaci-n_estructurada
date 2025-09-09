let arreglo = [1, 2, 3, "texto", true];

let arreglo2 = new Array(1, 2, 3);

let arreglo3 = [];

let numeros = [1, 2, 3];
let longitud = numeros.push(4, 5);
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(longitud); // 5

let letras = ['Eduardo', 'Guevara'];
let longitud1 = letras.unshift('Carlos', 'Viachica');
console.log(letras); 
console.log(longitud1); 

let frutas = ['manzana', 'banana', 'naranja'];
let ultima = frutas.pop();
console.log(frutas); // ['manzana', 'banana']
console.log(ultima); // 'naranja'

let colores = ['rojo', 'verde', 'azul'];
let primero = colores.shift();
console.log(colores); // ['verde', 'azul']
console.log(primero); // 'rojo'

let numeros1 = [10, 20, 30, 20, 40];
let indice = numeros1.indexOf(20); // 1
let indiceDesde2 = numeros1.indexOf(20, 2); // 3
console.log(indice); // 1
console.log(indiceDesde2); // 3

let nums =[1, 2, 3];
console.log(nums.length);
nums.length = 1;
nums.length = 5;

let arreglos = [1, 2, 3];
console.log(arreglos.length); // 3
arreglos.length = 1; // Trunca a [1]
arreglos.length = 5; // Extiende a [1, undefined, undefined, undefined, undefined]

let numeros3 = [3, 1, 4, 2];
numeros3.sort((a, b) => a - b); // Orden ascendente
console.log(numeros); // [1, 2, 3, 4]

let caracteres = ['z', 'a', 'x', 'm', 'j', 'y'];
caracteres.sort();
console.log(caracteres);


// Join ajustar
let palabras = ['hola', 'mundo'];
let texto = palabras.join(' '); // 'hola mundo'
console.log(texto);

let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = arr1.concat(arr2, [5]);
console.log(combinado); // [1, 2, 3, 4, 5]


// for
let colores1 = ['rojo', 'verde', 'azul'];
colores1.forEach(color => console.log(color));
// Imprime: rojo, verde, azul
 

for (let color of colores1){
  console.log(color); 
}

for(let i = 0; i < colores1.length; itt ){
  console.log(colores1);
}

let numeros4 = [1, 2, 3];
let dobles = numeros4.map(x => x * 2);
console.log(dobles); // [2, 4, 6]

let datos = [53, 21, 22, 51, 37, 88, 1000, 4];
let pares = datos.filter(x => x % 2 === 0);
console.log(pares); // [22, 88, 1000, 4]

let precios = [40, 20, 30, 40];
let suma = precios.reduce((acc, curr) => acc + curr, 0);
console.log(suma); // 130