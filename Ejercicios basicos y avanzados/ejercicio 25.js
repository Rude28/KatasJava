// Array de películas
const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

// Contadores
let antes2000 = 0;
let despues2000 = 0;

// Recorrer películas
for (let pelicula of movies) {
  if (pelicula.releaseYear < 2000) {
    antes2000++;
  } else {
    despues2000++;
  }
}

// Mostrar resultados
console.log("Películas antes del 2000:", antes2000);
console.log("Películas después del 2000:", despues2000);