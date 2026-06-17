// Array de películas
const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

// Array de categorías únicas
let categorias = [];

// Recorrer películas
for (let pelicula of movies) {
  for (let categoria of pelicula.categories) {
    if (!categorias.includes(categoria)) {
      categorias.push(categoria);
    }
  }
}

// Mostrar resultado
console.log(categorias);