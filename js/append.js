// 1. where to add
const priyotoma = document.getElementById('priyo');
// 2. what to be added
const li = document.createElement('li');
li.innerText = 'Humaira';
// 3. add the child
priyotoma.appendChild(li);



const sectional = document.getElementById('sectional');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Title Using JavaScript';
section.appendChild(h1);
const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'JavaScript';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Python';
ul.appendChild(li2);

section.appendChild(ul);
sectional.appendChild(section);


// set innerHTML directly
const food = document.createElement('section');
food.innerHTML = `
<h1>Hello this is innerHTML</h1>
<ul>
    <li>hard</li>
</ul>
`
sectional.appendChild(food);