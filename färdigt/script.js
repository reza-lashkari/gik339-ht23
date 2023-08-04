function printTimeStamp() {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`}:${
    date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`
  }`;
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

const user2 = getUserWithPromise(false);
console.log(printTimeStamp(), user2);

const user3 = getUserWithPromise(true);
console.log(printTimeStamp(), user3);

function callbackForFinishedPromise(user4) {
  console.log(printTimeStamp(), user4);
}
const notFinishedPromise = getUserWithPromise(true);
notFinishedPromise.then(callbackForFinishedPromise);

getUserWithPromise(true).then((userObject) => console.log(userObject)); */

/* function printInfoWithThen() {
  getUserWithPromise(true).then((user) => {
    //gör något komplicerat med detta userobjekt
    console.log(printTimeStamp(), user);
    getUserWithPromise(user).then((otherData) => {
      //vi kanske vill göra något komplicerat med otherData också...
      console.log(printTimeStamp(), otherData);
    });
  });
}

printInfoWithThen();

async function printInfoWithAsyncAwait() {
  const user = await getUserWithPromise(true);
  console.log(printTimeStamp(), user);
  const otherData = await getUserWithPromise(user);
  console.log(printTimeStamp(), otherData);
}

printInfoWithAsyncAwait(); */

const url = 'https://my-json-server.typicode.com/mie-du/gik339-ht23/users';

/* fetch(url)
  .then((result) => {
    console.log(result);
    return result.json();
  })
  .then((jsonData) => console.log(jsonData));
 */

fetch(url)
  .then((result) => result.json())
  .then((users) => {
    const html = `<p>${users[0].firstName}</p>`;
    document.body.insertAdjacentHTML('beforeend', html);
  });
