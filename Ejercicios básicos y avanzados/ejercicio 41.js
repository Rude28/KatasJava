// Función para simular un dado
function lanzarDado(numeroCaras) {
  let resultado = Math.floor(Math.random() * numeroCaras) + 1;
  return resultado;
}

// Ejemplos de uso
console.log(lanzarDado(6));  // dado de 6 caras
console.log(lanzarDado(10)); // dado de 10 caras
console.log(lanzarDado(20)); // dado de 20 caras