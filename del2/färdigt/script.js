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
  output.insertAdjacentHTML('afterbegin', '<p>Fältet ' + name + ' har värdet ' + value + '</p>');
}

function handleClick(e) {
  const targetName = e.target.id;
  const colorField = document.getElementById('color');
  const contentField = document.getElementById('content');
  console.log(targetName);
  if (targetName === 'addElement') {
    const html = `
    <p class="new-element" style="background-color:${colorField.value}">
      ${contentField.value}
    </p>`;

    output.insertAdjacentHTML('beforeend', html);
  } else if (targetName === 'changeShape' || 'changeSize') {
    const newElements = document.querySelectorAll('.new-element');

    if (newElements.length > 0) {
      newElements.forEach((element) => {
        targetName === 'changeShape' ? element.classList.add('rounded') : element.classList.add('larger');
      });
    }
  }
}
