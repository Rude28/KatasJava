// Array de prueba
const numbers = [1, 2, 3, 5, 45, 37, 58];

// Función para sumar todos los números
function sumarNumeros(listaNumeros) {
  let suma = 0;

  for (let i = 0; i < listaNumeros.length; i++) {
    suma += listaNumeros[i];
  }

  return suma;
}

// Ejemplo de uso
console.log(sumarNumeros(numbers));