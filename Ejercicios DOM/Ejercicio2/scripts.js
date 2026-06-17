/* 2.1 Inserta dinamicamente en un html un div vacio con javascript.*/
const div = document.createElement('div');
document.body.appendChild(div);


/* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.*/
const div2 = document.querySelector('div');
const p = document.createElement('p');
p.textContent = "Aquí está el paráfo dentro del div";
div2.appendChild(p);


/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.*/
const div3 = document.createElement('div');
for (let i=1; i<=6; i++) {

    const p = document.createElement('p');
    p.textContent = (`Este es el párrafo número ${i}`);
    div3.appendChild(p);
}
document.body.appendChild(div3);


/* 2.4 Inserta dinamicamente con javascript en un html una p con el
	texto 'Soy dinámico!'.*/
    const p2 = document.createElement('p');
    p2.textContent = 'Soy dinámico!';
    document.body.appendChild(p2);


/* 2.5  Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.*/
    const h2 = document.querySelector('.fn-insert-here');
    h2.textContent = 'Wubba Lubba dub dub';


/* 2.6 Basandote en el siguiente array crea una lista ul > li con
los textos del array. 
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
for (let i=0; i<apps.length; i++) {
    const li = document.createElement('li');
    li.textContent = apps[i];
    ul.appendChild(li);
}
document.body.appendChild(ul);


/* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me */
const nodos = document.querySelectorAll('.fn-remove-me');
for(let i=0; i<nodos.length; i++) {
    nodos[i].remove();
}


/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
Recuerda que no solo puedes insertar elementos con .appendChild().*/
const divs = document.querySelectorAll('div');
const p3 = document.createElement('p');
p3.textContent = 'Voy en medio!';
document.body.insertBefore(p3, divs[1]);


/* 2.9 Inserta un p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */
const divs2 = document.querySelectorAll('.fn-insert-here');
for(let i=0; i<divs2.length; i++) {
    const p4 = document.createElement('p');
    p4.textContent = 'Voy dentro!';
    divs2[i].appendChild(p4);
}