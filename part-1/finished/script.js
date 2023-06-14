function connectEventListener(eventListener) {
  //väntar på att någon klickr på en knapp...
  console.log(
    'Funktionen "connectEventListener" som tar en annan funktion och sedan anropar den (callback)',
    eventListener
  );
  eventListener();
}

function handleClick(e) {
  console.log('Eventlyssnaren "handleClick", eventobjekt:', e);
}

/* connectEventListener(handleClick);
connectEventListener(function () {
  console.log('En anonym funktionsdeklaration');
});
connectEventListener(() => {
  //något annat
  console.log('En anonym arrow-funktion som kan bestå av flera rader.');
});
connectEventListener(() => console.log('En anonym arrow-funktion bestående av en rad.'));

//connectEventListener(handleClick(1));

connectEventListener(() => handleClick(1)); */

const section = document.querySelector('.section');
section.addEventListener('click', handleClick);

/* section.addEventListener('mouseover', (e) => console.log('Anonym arrow-funktion som körs vid mouseover')); */

function anotherHandleClick(e) {
  e.stopPropagation();
  output.innerHTML = e.target + 'klickades';
}

const subSectionNodes = document.querySelectorAll('.sub-section');
subSectionNodes[0].addEventListener('click', anotherHandleClick);

const handleBlur = (e) => {
  console.log('Eventlyssnaren "handleBlur", eventobjekt:', e);
};

const handleInput = (e) => {
  console.log('Eventlyssnaren "handleInput" eventobjektet', e);
};
document.getElementById('textInput').oninput = handleInput();
