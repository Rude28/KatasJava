// Array de prueba
const elmentos = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

// Función para calcular el promedio mezclado
function calcularPromedioMixto(lista) {
  let suma = 0;

  for (let i = 0; i < lista.length; i++) {
    if (typeof lista[i] === "number") {
      suma += lista[i];
    } else {
      suma += lista[i].length;
    }
  }

  let promedio = suma / lista.length;

  return promedio;
}

// Ejemplo de uso
console.log(calcularPromedioMixto(elmentos));