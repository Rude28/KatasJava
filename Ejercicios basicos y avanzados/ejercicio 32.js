// Array de X-Men
const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1961 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

// Función para encontrar el más antiguo
function encontrarXMenMasAntiguo(listaXMen) {
  let masAntiguo = listaXMen[0];

  for (let personaje of listaXMen) {
    if (personaje.year < masAntiguo.year) {
      masAntiguo = personaje;
    }
  }

  return masAntiguo;
}

// Ejemplo de uso
console.log(encontrarXMenMasAntiguo(xMen));