const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma); // 15

const calificaciones = [80, 90, 70, 85, 95];
const suma1 = calificaciones.reduce((acc, calif) => acc + calif, 0);
const promedio = suma1 / calificaciones.length;
console.log(promedio);

const productos = [
{ nombre: "Camisa", precio: 20 },
{ nombre: "Pantalón", precio: 30 },
{ nombre: "Zapatos", precio: 50 }
];
const total = productos.reduce((acc, prod) => acc + prod.precio, 0);
console.log(total); // 100

// find
const nombres = ["Ana", "Luis", "Pedro", "María"];
const encontrado = nombres.find(nombre => nombre.startsWith("P"));
console.log(encontrado); // "Pedro"


const edades = [25, 35, 51, 10, 8, 13];
const menor10 = edades.find(edad => edad < 10);
console.log(menor10);

const usuarios = [
{ id: 1, nombre: "Carlos", salario: 20000 },
{ id: 2, nombre: "Lucía", salario: 17300 },
{ id: 3, nombre: "Marta", salario: 11000 },
{ id: 4, nombre: "Anner", salario: 18000 }
];
const usuario = usuarios.find(u => u.id === 2);
console.log(usuario); // { id: 2, nombre: "Lucía" }

// mayor a 15000
const mayor = usuarios.find(u => u.salario > 15000);
console.log(mayor);

// menor a 15000
const menor = usuarios.find(u => u.salario < 20000 && u.nombre.startsWith("A"));
console.log(menor);

const todosSalarioAlto = usuarios.every(u => u.salario < 30000);
console.log(todosSalarioAlto  );

const todosSalarioBajo = usuarios.filter(u => u.salario < 20000);
console.log(todosSalarioBajo);
 
//every
const tareas = [
{ nombre: "Estudiar", completada: true },
{ nombre: "Ejercicio", completada: true },
{ nombre: "Leer", completada: false }
];
const todasCompletas = tareas.every(t => t.completada === true);
console.log(todasCompletas); // false

//some
const inventario = [
{ producto: "Manzanas", cantidad: 0 },
{ producto: "Naranjas", cantidad: 10 },
{ producto: "Peras", cantidad: 3 }
];
const agotado = inventario.some(item => item.cantidad === 0);
console.log(agotado); // true

//filter
const empleados = [
{ nombre: "Ana", puesto: "Desarrolladora" },
{ nombre: "Luis", puesto: "Diseñador" },
{ nombre: "Marta", puesto: "Desarrolladora" }
];
const desarrolladores = empleados.filter(e => e.puesto === "Desarrolladora");
console.log(desarrolladores);
// [
// { nombre: "Ana", puesto: "Desarrolladora" },
// { nombre: "Marta", puesto: "Desarrolladora" }
// ]


const personas = [
  { id: 1, nombre: "Ana", edad: 17 },
  { id: 2, nombre: "Luis", edad: 22 },
  { id: 3, nombre: "Marta", edad: 30 },
  { id: 4, nombre: "Pedro", edad: 15 },
  { id: 5, nombre: "Sofía", edad: 25 },
  { id: 6, nombre: "Diego", edad: 40 },
  { id: 7, nombre: "Carla", edad: 19 },
  { id: 8, nombre: "Jorge", edad: 33 },
  { id: 9, nombre: "Lucía", edad: 28 },
  { id: 10, nombre: "Raúl", edad: 16 },
  { id: 11, nombre: "Elena", edad: 21 },
  { id: 12, nombre: "Andrés", edad: 35 }
];


//1. Obtén un nuevo arreglo con todas las personas cuya edad sea mayor o igual a 18 años.
// mayor a 15000
const mayores = personas.filter(u => u.edad >= 18);
console.log(mayores);

//2. Encuentra la primera persona en el arreglo cuyo nombre comience con la letra "L".
const nombreconL = personas.find( persona => persona.nombre.startsWith("L"));
console.log(nombreconL);

//3. Calcula la suma total de las edades de todas las personas en el arreglo.
const sumaedades = personas.reduce ((total, persona) => total + persona.edad, 0);
console.log(sumaedades);

const todosmayores15 = personas.every(persona => persona.edad >=15);
console.log(todosmayores15); 

//5. Comprueba si existe al menos una persona en el arreglo que tenga 40 años
const existe40 = personas.some(persona => persona.edad === 40);
console.log(existe40);