"use strict";

//249. our first AJAX call : XMLHttpRequest

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//////////////////////

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
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
              <p class="country__row"><span>💰</span>${
                Object.values(data.currencies)[0].name
              } </p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

//Makes all of the function on it.
const getCountryAndNeighbour = function (country) {
  //Old skool way to call AJAX

  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  // print in terminal the JSON file came through API
  // console.log(request.responseText);

  request.addEventListener("load", function () {
    //destructering
    const [data] = JSON.parse(this.responseText);
    //to see the data in object format
    console.log(data);

    // calling the country data Render country 1
    renderCountry(data);

    ////Get neighbour country (2)///

    // const [neighbour] = data.borders;
    // if (!neighbour) return;
    // instead of
    // use optional chaining for better managable error code:

    // 1st using nulls coalsing
    // const borders = data.borders ?? [];
    // const [neighbour] = borders;

    // 2nd optional chainging
    const neighbour = data.borders?.[0];
    console.log(neighbour);

    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      // console.log(this.responseText);

      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      // calling the neighbour country
      renderCountry(data2, "neighbour");

      console.log(neighbour);
    });
  });
};

// getCountryData("india");
// getCountryData("bangladesh");
// getCountryData("sri");

/////251 Callback Hell//////
// definition: a callback function under a callback function and then in a another function a it so onabort, called call back hell function.

// getCountryAndNeighbour("india");
getCountryAndNeighbour("india");

/////Callback Hell//////
// setTimeout(() => {
//   console.log(`1 second`);
//   setTimeout(() => {
//     console.log(`2 second `);
//     setTimeout(() => {
//       console.log(`3 second`);
//       setTimeout(() => {
//         console.log(`4 second `);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
