// Array de canciones
const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

// Objeto para agrupar por género
let cancionesPorGenero = {};

// Recorrer canciones
for (let cancion of tracks) {
  let genero = cancion.genre;

  if (!cancionesPorGenero[genero]) {
    cancionesPorGenero[genero] = [];
  }

  cancionesPorGenero[genero].push(cancion);
}

// Mostrar resultado
console.log(cancionesPorGenero);