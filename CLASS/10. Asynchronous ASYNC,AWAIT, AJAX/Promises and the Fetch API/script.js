"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

////252. Promises and the Fetch API
// New skool rule to URL pass fetch()

// const request = fetch("https://restcountries.com/v3.1/name/india");
// console.log(request);

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
// 253. Consuming a Promise
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       //   console.log(response);

//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// More Simple
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data[0]));
};
getCountryData("india");
getCountryData("isr");
getCountryData("cn");
