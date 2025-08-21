
// 1
let nombre = "Carlos Eduardo Guevara";
console.log(nombre);

// 2
let edad = 20;
let ciudad = "Juigalpa";
console.log(edad, ciudad);

// 3
const PI = 3.1416;
console.log(PI);

// 4
let num1 = 5, num2 = 10, num3 = 15;
let promedio = (num1 + num2 + num3) / 3;
console.log("Promedio:", promedio);

// 5
let esMayorDeEdad = true;
console.log(esMayorDeEdad);


// 6
let a = 8, b = 12;
console.log("Suma:", a + b);

// 7
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);

// 8
console.log("Potencia:", a ** b);

// 9
let precio = 100;
let descuento = 20; // %
let precioFinal = precio - (precio * (descuento / 100));
console.log("Precio final:", precioFinal);

// =============================
// Ciclos for
// =============================

// 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 11
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// =============================
// Ciclo while
// =============================

// 12
let num = 2;
while (num <= 20) {
    console.log(num);
    num += 2;
}



// 13
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}
saludar("Carlos");

// 14
function sumar(x, y) {
    return x + y;
}
console.log("Suma:", sumar(4, 6));

// 15
function esPar(numero) {
    return numero % 2 === 0;
}
console.log("¿Es par?:", esPar(8));

// 16
function areaRectangulo(base, altura) {
    return base * altura;
}
console.log("Área rectángulo:", areaRectangulo(5, 3));

// =============================
// 6. Funciones flecha
// =============================

// 17
const multiplicar = (x, y) => x * y;
console.log("Multiplicación:", multiplicar(4, 5));

// 18
const convertirCelsiusAFahrenheit = c => (c * 9/5) + 32;
console.log("Fahrenheit:", convertirCelsiusAFahrenheit(25));

// 19
const mayorDeDos = (x, y) => x > y ? x : y;
console.log("Mayor:", mayorDeDos(10, 15));

// 20
const calcularIVA = precio => precio * 1.15;
console.log("Precio con IVA:", calcularIVA(100));

// =============================
// 7. Recorrido de arreglos y objetos
// =============================

// 21
let nombres = ["Juan", "Ana", "Pedro", "Luis", "María"];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// 22
let numeros = [5, 12, 8, 25, 3];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        console.log(numeros[i]);
    }
}

// 23
let palabras = ["sol", "computadora", "agua", "javascript", "libro"];
for (let i = 0; i < palabras.length; i++) {
    console.log(`${palabras[i]}: ${palabras[i].length} letras`);
}

// 24
let persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "León"
};
for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// 25
let productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Teléfono", precio: 300 },
    { nombre: "Tablet", precio: 200 }
];
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].nombre);
}
