"use strict";
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
