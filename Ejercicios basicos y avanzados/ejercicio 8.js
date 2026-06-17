// Array de prueba
const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

// Función para encontrar la palabra más larga
function encontrar(stringList) {
  let longest = stringList[0];

  for (let i = 1; i < stringList.length; i++) {
    if (stringList[i].length > longest.length) {
      longest = stringList[i];
    }
  }

  return longest;
}

// Ejemplo de uso
console.log(encontrar(avengers));