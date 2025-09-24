// Arreglo  de numeros
let numeros = [5,2, 9, 1, 7]
// Orden ascendente 
numeros.sort((a, b) => a - b);
console.log(numeros);
// Orden descendente
numeros.sort((a, b) => b - a);
console.log(numeros);

// Arreglo de cadena
let frutas = ["banana", "manzana", "naranja", "uva", "Kiwi", "anona"];
frutas.sort();
console.log(frutas);

// Orden alfabético inverso
frutas.sort((a, b) => b.localeCompare(a));
console.log(frutas);

let personas = [
  {nombre: "Juan", edad: 25},
  {nombre: "Ana", edad: 30},
  {nombre: "Pedro", edad: 20}
];
personas.sort((a, b) => a.edad - b.edad);
console.log(personas);

personas.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(personas);


let numeros1 = [1, 2, 3, 4, 5];
numeros1.reverse();
console.log(numeros1);

let palabras = ["hola", "mundo", "javascript"];
palabras.reverse();
console.log(palabras);

let personas1 = [
  {nombre: "Juan", edad: 25},
  {nombre: "Ana", edad: 30},
  {nombre: "Pedro", edad: 20}
];
personas1.reverse();
console.log(personas1);

let calificaciones = [
  {estudiante: "Eliab", asignatura: "Matematica", calificacion: 60},
  {estudiante: "Xiomara", asignatura: "Historia", calificacion: 100},
  {estudiante: "Camilo", asignatura: "Español", calificacion: 80},
  {estudiante: "Ramiro", asignatura: "Fisica", calificacion: 55},
  {estudiante: "Ana", asignatura: "Quimica", calificacion: 77}
];
calificaciones.sort((a, b ) => b.asignatura.localeCompare(a.asignatura));
console.log(calificaciones);
calificaciones.sort((a, b ) => b.calificacion - a.calificacion );
console.log(calificaciones);
 
let numeros2 = [5, 2, 9, 1, 7];
let numeros2Ordenados = [...numeros2].sort((a, b) => a - b);
console.log(numeros2Ordenados);
console.log(numeros2);

let personas2 = [
  {nombre: "Juan", edad: 25},
  {nombre: "Ana", edad: 30},
  {nombre: "Pedro", edad: 20}
];
let ordenadoPorEdad = [...personas2].sort((a, b) => a.edad - b.edad);
console.log(ordenadoPorEdad);
console.log(personas2);
