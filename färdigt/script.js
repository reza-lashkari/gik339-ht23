const contactFormElement = document.getElementById('contactForm');
console.log(contactFormElement);

console.log(contactForm);

console.log(window);

const subSection = document.querySelector('.sub-section');
console.log(subSection);
subSection.style.background = 'lime';

const subSectionAll = document.querySelectorAll('.sub-section');
console.log(subSectionAll);

for (let i = 0; i < subSectionAll.length; i++) {
  subSectionAll[i].style.background = 'cyan';
}

console.log(document.getElementsByClassName('sub-section'));
console.log(document.getElementsByTagName('div'));

console.log(document.body);
console.log(document.body.children[0]);
console.log(document.body.childNodes[0]);

function functionDeclaration() {
  console.log('functionDeclaration');
}

const functionExpression = (x) => {
  console.log('functionExpression, parameter', x);
};

functionDeclaration();
functionExpression(1);

function functionTakesOtherFunction(x) {
  console.log('functionTakesOtherFunction, parameter', x);
  x();
}
//functionTakesOtherFunction(1);

functionTakesOtherFunction(functionDeclaration);

functionTakesOtherFunction(function () {
  console.log('Anonym funktion');
});
functionTakesOtherFunction(() => {
  console.log('Anonym arrow-funktion');
});
functionTakesOtherFunction(functionDeclaration());
