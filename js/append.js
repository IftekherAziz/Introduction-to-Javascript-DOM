// Description: Append a new element to the DOM

// 1. Where to add
const placesList = document.getElementById('places-list'); 
// 2. What to add
const li = document.createElement('li');
li.innerText = 'New Item';

// 3.Add the child
placesList.appendChild(li);


// How to create a new section using DOM elements:

// 1. Where to add
const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

// 2. What to add
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');

/* Creating a new li element and adding it to the ul element. */
const li1 = document.createElement('li');
li1.innerText = 'Pizza';
ul.appendChild(li1);

/* Creating a new li element and adding it to the ul element. */
const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2);

/* Creating a new li element and adding it to the ul element. */
const li3 = document.createElement('li');
li3.innerText = 'Salad';
ul.appendChild(li3);

/* Adding the ul element to the section element. */
section.appendChild(ul);

/* Adding the section element to the mainContainer element. */
mainContainer.appendChild(section);

// Set innerHtml Directly:
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
    <h1>My Dress Section</h1>
    <ul>
        <li>Shirt</li>
        <li>Pant</li>
        <li>Shoe</li>
    </ul>
`;
mainContainer.appendChild(sectionDress);