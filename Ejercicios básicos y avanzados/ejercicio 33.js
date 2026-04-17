// Objeto de países y capitales
const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

// Función para obtener la capital
function obtenerCapital(pais) {
  if (capitals[pais]) {
    return capitals[pais];
  } else {
    return "País no encontrado";
  }
}

// Ejemplo de uso
console.log(obtenerCapital("Spain"));
console.log(obtenerCapital("Brazil"));