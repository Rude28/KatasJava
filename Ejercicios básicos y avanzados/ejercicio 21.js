// Array de usuarios
const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

// Recorrer usuarios
for (let usuario of users) {
  if (usuario.years < 18) {
    console.log("Usuarios menores de edad: " + usuario.name);
  } else {
    console.log("Usuarios mayores de edad: " + usuario.name);
  }
}