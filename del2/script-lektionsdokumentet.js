const buttons = document.getElementsByTagName('button');
const inputFields = document.querySelectorAll('.input-field');

console.log(buttons);
console.log(inputFields);

inputFields.forEach((field) => field.addEventListener('blur', handleBlur));

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleClick);
}
const output = document.getElementById('output');
function handleBlur(e) {
  const name = e.target.name;
  const value = e.target.value;
  //output.innerHTML = '<p>Fältet ' + name + ' har värdet ' + value + '</p>';
  const html = `<p>Fältet ${name} har värdet ${value}</p>`;
  output.insertAdjacentHTML('afterbegin', html);
}

const dynamicDisplay = document.getElementById('dynamicDisplay');
function handleClick(e) {
  e.preventDefault();
  const targetName = e.target.id;
  const colorField = settings.color;
  const contentField = settings.content;
  console.log(targetName);
  if (targetName === 'addElement') {
    const newElement = document.createElement('div');
    newElement.classList.add('new-element');
    newElement.style.backgroundColor = colorField.value;
    newElement.innerHTML = contentField.value;

    dynamicDisplay.insertAdjacentElement('beforeend', newElement);
  } else if (targetName === 'changeSize' || targetName === 'changeShape') {
    const newElements = document.querySelectorAll('.new-element');
    if (newElements.length > 0) {
      newElements.forEach((element) =>
        targetName === 'changeShape' ? element.classList.add('rounded') : element.classList.add('larger')
      );
    }
  }
}
