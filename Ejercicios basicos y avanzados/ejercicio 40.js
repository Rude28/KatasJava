// Array de personajes
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// Función para encontrar el índice
function encontrarIndice(array, texto) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === texto) {
      return i;
    }
  }
  return -1;
}

// Función para eliminar elemento usando la anterior
function eliminarElemento(array, texto) {
  let indice = encontrarIndice(array, texto);

  if (indice !== -1) {
    array.splice(indice, 1);
  }

  return array;
}

// Ejemplos de uso
console.log(encontrarIndice(mainCharacters, "Leia")); // 1
console.log(encontrarIndice(mainCharacters, "Rey")); // 4
console.log(encontrarIndice(mainCharacters, "Yoda")); // -1

console.log(eliminarElemento([...mainCharacters], "Han Solo"));
console.log(eliminarElemento([...mainCharacters], "Luke"));
console.log(eliminarElemento([...mainCharacters], "Yoda"));
