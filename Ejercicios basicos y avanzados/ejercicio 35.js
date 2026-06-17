// Array de mutantes
const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

// Función para buscar mutantes por poder
function buscarMutantesPorPoder(listaMutantes, poderBuscado) {
  let encontrados = [];

  for (let mutante of listaMutantes) {
    if (mutante.power === poderBuscado) {
      encontrados.push(mutante.name);
    }
  }

  if (encontrados.length > 0) {
    return "Mutantes encontrados: " + encontrados.join(", ");
  } else {
    return "No se encontraron mutantes con ese poder";
  }
}

// Ejemplo de uso
console.log(buscarMutantesPorPoder(mutants, "telepathy"));
console.log(buscarMutantesPorPoder(mutants, "flight"));