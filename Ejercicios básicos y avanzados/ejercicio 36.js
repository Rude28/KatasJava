// Array de actores
const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];

// Función para calcular edades
function calcularEdadesActores(listaActores) {
  let resultado = [];
  let añoActual = new Date().getFullYear();

  for (let actor of listaActores) {
    let edad = añoActual - actor.born;

    resultado.push({
      nombre: actor.name,
      edad: edad
    });
  }

  return resultado;
}

// Ejemplo de uso
console.log(calcularEdadesActores(actors));