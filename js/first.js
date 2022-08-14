console.log('hello');

const allLi = document.getElementsByTagName('li');
console.log(allLi);

const allTitle = document.getElementsByClassName('section-title');
console.log(allTitle);

const secondSection = document.getElementById('second-section');
secondSection.style.border = '2px solid green';
secondSection.style.color = 'green';

const thirdList = document.getElementById('third-list');
const li = document.createElement('li');
li.innerText = 'List Item-5';
thirdList.appendChild(li);