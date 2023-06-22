function printTimeStamp() {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}.${
    date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`
  } `;
}

function getUserWithoutPromise() {
  let message = null;
  setInterval(() => {
    message = 'Hello World';
  }, 3000);
  return message;
}

function getUserWithPromise(error) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      if (error) reject('Något blev fel');
      else reslove({ firstName: 'Mikaela' });
    }, 2000);
  });
}

const user = getUserWithoutPromise();
console.log(printTimeStamp(), user);

const user2 = getUserWithPromise(true);
console.log(printTimeStamp(), user2);

const user3 = getUserWithPromise(false);
console.log(printTimeStamp(), user3);

getUserWithPromise(false).then((user) => console.log(printTimeStamp(), user));
