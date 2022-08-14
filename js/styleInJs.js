const sections = document.querySelectorAll('section');
//console.log(sections);
for (const section of sections) {
    section.style.border = '2px solid aqua';
    section.style.borderRadius = '15px';
    section.style.marginBottom = '5px';
    section.style.backgroundColor = 'lightblue';
    section.style.padding = '10px';

}

const fish = document.getElementById('fish');
fish.style.backgroundColor = 'green';


const addFromCss = document.getElementById('text');
addFromCss.classList.add('text-align');

const removeClass = document.getElementById('likedName')
removeClass.classList.remove('font-size');