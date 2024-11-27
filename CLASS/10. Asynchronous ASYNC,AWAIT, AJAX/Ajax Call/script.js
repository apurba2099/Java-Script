"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

//////////////////////

//makes all of the function on it!! 😃😃
const getCountryData = function (country) {
  // old skool way to call AJAX
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);

  request.send();

  // write to print the JSON file see
  // console.log(request.responseText);

  request.addEventListener("load", function () {
    //destructering
    const [data] = JSON.parse(this.responseText);

    console.log(data);

    const html = `<article class="country">
  
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
  });
};

getCountryData("india");
getCountryData("america");
getCountryData("germany");
getCountryData("japan");
