"use strict";

const renderCountry = function (countryData) {
  console.log("Country Data:", countryData);
};

//GEOLOCATION API
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

////for practice//
/*
getPosition()
  .then((pos) => {
    console.log(pos);
    const { latitude, longitude } = pos.coords;
    return { latitude, longitude };
  })
  .then(({ latitude, longitude }) => {
    console.log(latitude, longitude);
  });
*/
// getPosition().then((pos) => {
//   console.log(pos);
// });

//previous challenge - 1
const whereAmI = function () {
  //presenting the default value
  // .then((pos) => {
  //   const { latitude: lat, longitude: lng } = pos.coords;
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);

      if (!data.city || !data.country) {
        throw new Error(`Geo location API did not return city or country`);
      }
      console.log(`you are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Counrty not found (${res.status})`);

      return res.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.log(`${err.message} 💥`));
};
//just for preview
const buttonClick = document.getElementById("buttonClick");
buttonClick.addEventListener("click", whereAmI);
