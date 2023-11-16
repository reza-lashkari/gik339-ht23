const contactFormElement = document.getElementById('contactForm');
/* console.log(contactFormElement);

console.log(contactForm);
console.log(window);
console.log(document); */

const subSection = document.querySelector('.sub-section');
/* console.log(subSection); */
subSection.style.background = 'lime';

const subSectionAll = document.querySelectorAll('.sub-section');
/* console.log(subSectionAll); */

subSectionAll.forEach((section) => {
  section.style.background = 'yellow';
});

const classNameCollection = document.getElementsByClassName('sub-section');
/* console.log(classNameCollection); */

for (let i = 0; i < classNameCollection.length; i++) {
  classNameCollection[i].style.fontSize = '1.6rem';
}

console.log(document.body);
console.log(document.body.children[0]);
console.log(document.body.childNodes);
const section = document.querySelector('.section');
console.log(section.lastElementChild.parentElement);
