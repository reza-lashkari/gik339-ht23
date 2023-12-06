function printTimeStamp() {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}.${
    date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`
  } `;
}

function getUserWithoutPromise() {
  let user = null;
  setInterval(() => {
    user = { firstName: 'Mikaela' };
  }, 3000);
  return user;
}

function getUserWithPromise(ok) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      if (!ok) reject(printTimeStamp() + ' Något blev fel');
      else reslove({ firstName: 'Mikaela' });
    }, 3000);
  });
}

/* const user = getUserWithoutPromise();
console.log(printTimeStamp(), user);

const user2 = getUserWithPromise(true);
console.log(printTimeStamp(), user2);

const user3 = getUserWithPromise(false);
console.log(printTimeStamp(), user3);



//fungerar inte att arbeta med user5 utanför callback.
const user5 = notFinishedPromise.then((user4) => {
  //gör något mer - skriva ut HTML
  console.log(printTimeStamp(), user4);
  return user4;
});
console.log(user5);
//göra något med user5 */
/* function callbackForFinishedPromise(user4) {
  console.log(printTimeStamp(), user4);
}

const notFinishedPromise = getUserWithPromise(true);
console.log(printTimeStamp(), notFinishedPromise);

notFinishedPromise.then(callbackForFinishedPromise);

async function printUserData() {
  const user6 = await getUserWithPromise(true);
  console.log(user6);
  const user7 = await getUserWithPromise(user6);
  return user6;
} */
const localUrl = 'http://localhost:3000/users';
const url = 'https://my-json-server.typicode.com/mie-du/gik339/users';

const responsePromise = fetch(url);

/* const promiseAfterJson = responsePromise.then((response) => response.json()); */
responsePromise
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((users) => console.log(users));
const request = new Request(url);
fetch(request)
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      const html = `<p>
          ${user.firstName} ${user.lastName}
          <span>${user.username}</span>
      </p>`;

      document.body.insertAdjacentHTML('beforeend', html);
    });
    return 'hej';
  })
  .then((data) => console.log(data));

function sendFormData(e) {
  e.preventDefault();
  //console.log(e);
  const user = {
    firstName: userForm.firstName.value,
    lastName: userForm.lastName.value
  };
  console.log(user);
  const jsonUser = JSON.stringify(user);
  console.log(jsonUser);
  const request = new Request(url, {
    method: 'POST',
    body: jsonUser,
    headers: { 'content-type': 'application/json' }
  });
  console.log(request);

  fetch(request)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
userForm.addEventListener('submit', sendFormData);
