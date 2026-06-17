// Array de prueba
const nombress = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

// Función para buscar un nombre
function buscarNombre(listaNombres, nombreBuscado) {
  let indice = listaNombres.indexOf(nombreBuscado);

  if (indice !== -1) {
    return { encontrado: true, posicion: indice };
  } else {
    return false;
  }
}

// Ejemplo de uso
console.log(buscarNombre(nombress, 'Tony'));
console.log(buscarNombre(nombress, 'Wanda'));