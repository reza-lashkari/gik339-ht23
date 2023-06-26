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

function getUserWithPromise(error) {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      if (error) reject(printTimeStamp() + ' Något blev fel');
      else reslove({ firstName: 'Mikaela' });
    }, 3000);
  });
}

const user = getUserWithoutPromise();
console.log(printTimeStamp(), user);

const user2 = getUserWithPromise(true);
console.log(printTimeStamp(), user2);

const user3 = getUserWithPromise(false);
console.log(printTimeStamp(), user3);

function callbackForFinishedPromise(user4) {
  console.log(printTimeStamp(), user4);
}
const notFinishedPromise = getUserWithPromise(false);
notFinishedPromise.then(callbackForFinishedPromise);
