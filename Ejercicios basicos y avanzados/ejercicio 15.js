// Array de productos
const productos = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta",
];

// Bucle para mostrar productos que incluyan "Camiseta"
for (let i = 0; i < products.length; i++) {
  if (productos[i].includes("Camiseta")) {
    console.log(productos[i]);
  }
}