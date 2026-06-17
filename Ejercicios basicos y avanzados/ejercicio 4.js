// Array inicial
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1 - Mostrar "Tendo" por su posición
console.log(aldeanos[3]);

// 4.2 - Añadir "Cervasio" al final
aldeanos.push("Cervasio");

// 4.3 - Cambiar el primer elemento por "Bambina"
aldeanos[0] = "Bambina";

// 4.4 - Dar la vuelta al array
aldeanos.reverse();

// 4.5 - Cambiar "Narciso" por "Canela"
let indice = aldeanos.indexOf("Narciso");
aldeanos.splice(indice, 1, "Canela");

// 4.6 - Mostrar el último elemento sin usar posición directa
console.log(aldeanos[aldeanos.length - 1]);

// Mostrar array final
console.log(aldeanos);