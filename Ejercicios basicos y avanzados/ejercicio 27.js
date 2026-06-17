// Array de dibujos animados
const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

// Variable para guardar el más antiguo
let masAntiguo = cartoons[0];

// Recorrer array
for (let dibujo of cartoons) {
  if (dibujo.debut < masAntiguo.debut) {
    masAntiguo = dibujo;
  }
}

// Mostrar resultado
console.log("El dibujo más antiguo es:", masAntiguo.name);