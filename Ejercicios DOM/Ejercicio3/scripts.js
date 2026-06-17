/* 3.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises. 
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement('ul');
for (let i=0; i<countries.length; i++) {
    const li = document.createElement('li');
    li.textContent = countries[i];
    ul.appendChild(li);
}
document.body.appendChild(ul);


/* 3.2 Elimina el elemento que tenga la clase .fn-remove-me. */
const removeItem = document.querySelector('.fn-remove-me');
removeItem.remove();


/* 3.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']; */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHere = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');

for (let i=0; i<cars.length; i++) {
    const li = document.createElement('li');
    li.textContent = cars[i];
    ulCars.appendChild(li);
}
document.body.appendChild(ulCars);


/* 3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];*/
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const body = document.body;
const divs = countries2.map(country => {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');
    h4.textContent = country.title;
    img.src = country.imgUrl;
    div.appendChild(h4);
    div.appendChild(img);
    return div;
});
divs.forEach(div => body.appendChild(div));


/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs. */
const button = document.createElement('button');
button.textContent = 'Eliminar div';
button.addEventListener('click', () => {
    const ultimoDiv = body.querySelector('div:last-child');
    if (ultimoDiv) {
        body.removeChild(ultimoDiv);
    }
});
body.appendChild(button);


/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo div del html. */
for (let i = 0; i < divs.length; i++) {
    const button = document.createElement('button');
    button.textContent = 'Eliminar este div';
    button.addEventListener('click', () => {
        body.removeChild(divs[i]);
        
    });
    divs[i].appendChild(button);
}