let sum = 0;
let a = 1;
let b = 2;
let count = 0;

//console.log(x);

const x = 0;

sum = addAndSubtract(a, b, 0);
let sum2 = addAndSubtract(a, 6, 2);

function addAndSubtract(a, b, c) {
  count++;

  console.log('--- Funktionsanrop nr: ' + count + ' ---');
  console.log('A är: ' + a + ' B är: ' + b);

  a = a + b;
  const y = a - c;

  console.log('Y  är : ' + y);
  console.log('A  är efter förändring: ' + a);
  return y;
}

console.log('--- Utanför funktionen ---');
console.log('count är: ' + count + ' sum är: ' + sum);
console.log('A är: ' + a + ' B är: ' + b);
console.log('sum2 är: ' + sum2);
// console.log('Y är: ' + y);

const functionExpression = function () {
  console.log('functionExpression');
};

const arrowFunction = (a, b) => {
  console.log('a: ' + a);
  console.log('b: ' + b);
};

const arrowFunction2 = (a) => 'hej' + a;

arrowFunction(1);
functionExpression();

const result = arrowFunction2(' på dig');
console.log(result);
