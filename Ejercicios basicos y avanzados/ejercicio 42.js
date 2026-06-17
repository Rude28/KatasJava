// Array inicial
const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

// Función para intercambiar posiciones
function intercambiarPosiciones(array, indice1, indice2) {
  let temp = array[indice1];
  array[indice1] = array[indice2];
  array[indice2] = temp;

  return array;
}

// Ejemplos de uso
console.log(intercambiarPosiciones([...fantasticFour], 0, 2));
console.log(intercambiarPosiciones([...fantasticFour], 1, 3));