"use strict";
/*
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = " ") {
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" alt="Flag of ${
    data.name.common
  }" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1_000_000
            ).toFixed(2)}M people</p>
            <p class="country__row"><span>🗣️</span>${Object.values(
              data.languages
            ).join(",")}</p>
            <p class="country__row"><span>💰</span>${Object.values(
              data.currencies
            )
              .map((curr) => curr.name)
              .join(", ")}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (message) {
  countriesContainer.insertAdjacentHTML("beforeend", message);
  // countriesContainer.style.opacity = 1;
};

/////Creat a function to control the error msg
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok)
      //new Error is a constructor function
      throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// const getCountryData = function (country) {
//   // country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       console.log(response);

//       if (!response.ok)
//         //new Error is a constructor function
//         throw new Error(`Country not found! (${response.status})`);

//       return response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       console.log("Full Data", data);
//       const neighbour = data[0].borders[1];
//       // const neighbour = "Wrong Data";
//       console.log(neighbour);

//       // use guard clause
//       if (!neighbour) return;

//       //   country 2 (neighbour contry fetch)
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(
//       (response) => {
//         if (!response.ok)
//           throw new Error(`Country not found! (${response.status})`);

//         return response.json();
//       }
//       // (err) => alert(err)
//     )
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch((err) => {
//       console.error(`${err} 💥💥 This is created Error!`); //error can console
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`); // using catch method to use (err) error handling
//     })
//     //Finally() use for set a value for if promises coming or not coming like default value!
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // ----Main Country 1 ----

  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    "Country not found!"
  )
    .then((data) => {
      renderCountry(data[0]);

      console.log("Full Data", data);
      const neighbour = data[0].borders?.[1];
      // const neighbour = "Wrong Data";
      console.log(neighbour);

      // use guard clause with throw new error
      if (!neighbour) throw new Error("No Neighbour found!");

      // ----  Country 2 (neighbour contry fetch)----
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country not found!"
      );
    })
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((err) => {
      // console.error(`${err}💥💥This is created Error!`); //error can console

      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`); // using catch method to use (err) error handling
    })
    //Finally() use for set a value for if promises coming or not coming like default value!
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("india");
});
// getCountryData("australia");
*/

/////////////EVENT LOOP PRACTICE//////////////
/*console.log("Test Start");

setTimeout(() => console.log("0 sec timer"), 0);
Promise.resolve("Resolve promise 1").then((res) => console.log(res)); //it is put on micro task queue has priority over the call back queue.

Promise.resolve("Resolve promise 2").then((res) => {
  // for (let i = 0; i < 10000000000; i++) {}
  console.log(res); // here the micro task takes more time.
});
console.log("Test End"); */

////////BUILDING A SIMPLE PROMISE//////
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
