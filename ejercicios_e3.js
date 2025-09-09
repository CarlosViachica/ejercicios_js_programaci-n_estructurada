// Función anónima asignada a una variable
const sumar = function (a, b) {
  return a + b;
};
console.log(sumar(3, 4));

// Función con asignación de nombre
function sumar(a, b) {
  return a + b;
};
console.log(sumar(3, 4));

// Sintaxis normal
const multiplicar = function (a, b) {
  return a * b;
};

// Función flecha
const multiplicarFlecha = (a, b) => a * b;
console.log(multiplicarFlecha(3, 4)); // 12


const edad = 19;
const tieneID = true;
if (edad >= 18) {
  if (tieneID) {
    console.log("Acceso permitido");
  } else {
    console.log("Necesitas identificación");
  }
} else {
  console.log("Eres menor de edad");
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

try {
  // Aquí va el código que podría fallar
} catch (error) {
  // Aquí se maneja el error si ocurre
}

try {
  let numero = parseInt("abc"); // Esto no genera error, da NaN
  console.log(numero.toFixed(2));
  // ❌ Error: no se puede usar toFixed en NaN
} catch (error) {
  console.log("Ocurrió un error:", error.message);
}

try {
  console.log("Intentando dividir...");
  let resultado = 10 / 0; // No error real, da Infinity
  console.log(resultado);
} catch (error) {
  console.log("Error atrapado:", error.message);
} finally {
  console.log("Fin del bloque");
}

function dividir(a, b) {
  try {
    if (b === 0) {
      throw new Error("No se puede dividir entre 0"); 
    }
    return a / b;
  } catch (error) {
    return "Error: " + error.message;
  }
}
console.log(dividir(10, 2)); // 5
console.log(dividir(10, 0)); // Error: No se puede dividir entre 0

const colores = ["rojo", "verde", "azul"];
console.log(colores[0]); // "rojo"
console.log(colores[2]); // "azul"

const personal = {
nombre: "Ana",
hobbies: ["leer", "pintar", "correr"]
};
console.log(persona.hobbies[1]); // "pintar"

const personas = [
{ nombre: "Luis", edad: 30 },
{ nombre: "Marta", edad: 25 }
];
console.log(personas[0].nombre); // "Luis"
console.log(personas[1].edad); // 25

const usuarios = { nombre: "Carlos", edad: 28 };
console.log(usuario.nombre); // "Carlos"
console.log(usuario.edad); // 28

const usuario = { nombre: "Ana", "correo ": "ana@mail.com" };
console.log(usuario["nombre"]); // "Ana"
console.log(usuario["correo-personal"]); // "ana@mail.com"

const empresa = {
nombre: "TechCorp",
empleados: [
{
nombre: "Ana",
direccion: { ciudad: "Madrid", codigoPostal: 28001 }
},
{
nombre: "Luis",
direccion: { ciudad: "Barcelona", codigoPostal: 8001 }
}
]
};
// Ejemplos de acceso
console.log(empresa.empleados[0].nombre);
// "Ana"
console.log(empresa.empleados[1].direccion.ciudad);
// "Barcelona"
console.log(empresa.empleados[0]["direccion"]["codigoPostal"]);
// 28001
// El último también se puede escribir de esta forma:
console.log(empresa.empleados[0].direccion.codigoPostal);

// Analice y codifique el siguiente objeto:
const persona = {
  nombre: "Carlos",
  edad: 28,
  direccion: {
    ciudad: "Madrid",
    codigoPostal: 28001
  },
  hobbies: ["leer", "correr", "pintar"]
};

// 🔹 Funciones flecha:

// 1. Mostrar el nombre de la persona
const mostrarNombre = (obj) => console.log("Nombre:", obj.nombre);

// 2. Mostrar la edad de la persona
const mostrarEdad = (obj) => console.log("Edad:", obj.edad);

// 3. Mostrar la ciudad donde vive
const mostrarCiudad = (obj) => console.log("Ciudad:", obj.direccion.ciudad);

// 4. Mostrar el código postal usando corchetes
const mostrarCodigoPostal = (obj) => console.log("Código Postal:", obj["direccion"]["codigoPostal"]);

// 5. Mostrar el segundo hobby de la persona
const mostrarSegundoHobby = (obj) => console.log("Segundo hobby:", obj.hobbies[1]);

// 🔹 Ejecución:
mostrarNombre(persona);        // Nombre: Carlos
mostrarEdad(persona);          // Edad: 28
mostrarCiudad(persona);        // Ciudad: Madrid
mostrarCodigoPostal(persona);  // Código Postal: 28001
mostrarSegundoHobby(persona);  // Segundo hobby: correr

