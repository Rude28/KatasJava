// Array de películas
const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
];

// Función para calcular el promedio de duración
function calcularPromedioDuracionPeliculas(listaPeliculas) {
  let suma = 0;

  for (let pelicula of listaPeliculas) {
    suma += pelicula.duration;
  }

  let promedio = suma / listaPeliculas.length;

  return promedio;
}

// Ejemplo de uso
console.log(calcularPromedioDuracionPeliculas(movies));