function functionDeclaration() {
  console.log('functionDeclaration');
}
/*
const functionExpression = (x) => {
  console.log('FunctionExpression, parameter:', x);
};

functionExpression(functionDeclaration); */

/* function functionTakesOtherFunction(x) {
  console.log('functionTakesOtherFunction, parameter', x);
  x();
} */

//functionTakesOtherFunction(1);

/* functionTakesOtherFunction(functionDeclaration);

functionTakesOtherFunction(function () {
  console.log('Anonym funktion');
});

functionTakesOtherFunction(() => console.log('Anonym arrowfunktion')); */

//functionTakesOtherFunction(functionDeclaration());

/* function waitingForClick(callback) {
  console.log('Väntar på klick, när det skett ska vi anropa tillbaka hit:', callback);
  //ta lång tid

  callback();
} */

function handleClick(e) {
  console.log('Någon klickade, parameter', e);
}

//waitingForClick(handleClick);

const section = document.querySelector('.section');
section.addEventListener('click', handleClick);
/* section.addEventListener('mouseover', (e) => console.log('Anonym arrowfunktion som körs vid mouseover', e)); */

//document.getElementById('textInput').addEventListener('blur', handleBlur);

const handleBlur = (e) => {
  console.log('eventlyssnaren handleBlur, eventobjektet:', e);
};
