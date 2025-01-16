"use strict";

///////////BUILDING A SIMPLE PROMISE//////
const LotteryPromise = new Promise(function (resolve, reject) {
    console.log(`Lottery draw is happening 🔮`);
    setTimeout(function () {
      if (Math.random() >= 0.5) {
        resolve("You win🥇"); //full filled promise
      } else {
        reject(new Error("You lost😭"));
      }
    }, 2000);
  });
  
  LotteryPromise.then((res) => console.log(res)).catch((err) =>
    console.error(err)
  );
  
  //Promisifying setTimeout
  const wait = function (seconds) {
    return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
    });
  };
  /*
  wait(3)
    .then(() => {
      console.log(`I waited for 1 seconds`);
      return wait(1);
    })
    .then(() => {
      console.log(`I waited for 2 seconds`);
      return wait(1);
    })
    .then(() => {
      console.log(`I waited for 3 seconds`);
      return wait(1);
    })
    .then(() => {
      console.log(`I waited for 4 seconds`);
      return wait(1);
    })
    .then(() => {
      console.log(`I waited for 5 seconds`);
      return wait(1);
    })
    .then(() => console.log(`I waited for 6 seconds`));*/
  
  Promise.resolve(`ABCD!`).then((x) => console.log(x));
  Promise.reject(new Error(`Problem!`)).catch((x) => console.error(x));
  