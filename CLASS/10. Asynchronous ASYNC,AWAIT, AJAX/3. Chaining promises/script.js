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
// 253. Consuming a Promise

//Old Skool  Function expression
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//   console.log(response);

//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// More Simple with Arrow function
const getCountryData = function (country) {
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      // consoling the response
      console.log("Raw Response Object:", response);
      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);

      //   consoleing the data
      console.log("Full Data", data);

      // Old method (video method)
      // const neighbour = data[0].borders[0];
      // if(!neighbour) return;

      // New method (use optional chaining)
      const neighbour = data[0].borders?.[0];

      // not working in the course format code--------
      
      //   country 2 (neighbour contry fetch)
    //   return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);

    // }) ///problem to renderCountry
    // .then((response) => response.json())
    // .then((data) => renderCountry(data, "neighbour"));

    return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
})
.then((response) => {
  if (!response.ok) throw new Error(`Neighbour not found (${response.status})`);
  return response.json();
})
.then((data) => {
  console.log("Neighbour Country Data:", data); // Debugging line
  renderCountry(data[0], "neighbour"); // Ensure `data[0]` is used
})
.catch((err) => {
  console.error(err);
  countriesContainer.insertAdjacentText("beforeend", `Something went wrong: ${err.message}`);
  countriesContainer.style.opacity = 1;
});

};

getCountryData("india");
