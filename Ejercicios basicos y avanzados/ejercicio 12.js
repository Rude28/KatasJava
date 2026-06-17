// Array de prueba
const duplic = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

// Función para eliminar duplicados
function eliminarDuplicados(lista) {
  let resultado = [];

  for (let i = 0; i < lista.length; i++) {
    if (!resultado.includes(lista[i])) {
      resultado.push(lista[i]);
    }
  }

  return resultado;
}

// Ejemplo de uso
console.log(eliminarDuplicados(duplic));