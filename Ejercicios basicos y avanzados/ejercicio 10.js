// Array de prueba
const numeros = [12, 21, 38, 5, 45, 37, 6];

// Función para calcular el promedio
function calcularPromedio(listaNumeros) {
  let suma = 0;

  for (let i = 0; i < listaNumeros.length; i++) {
    suma += listaNumeros[i];
  }

  let promedio = suma / listaNumeros.length;

  return promedio;
}

// Ejemplo de uso
console.log(calcularPromedio(numeros));