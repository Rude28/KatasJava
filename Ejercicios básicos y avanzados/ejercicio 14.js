// Array de prueba
const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

// Función para contar repeticiones
function contarRepeticiones(lista) {
  let contador = {};

  for (let i = 0; i < lista.length; i++) {
    let palabra = lista[i];

    if (contador[palabra]) {
      contador[palabra]++;
    } else {
      contador[palabra] = 1;
    }
  }

  return contador;
}

// Ejemplo de uso
console.log(contarRepeticiones(words));