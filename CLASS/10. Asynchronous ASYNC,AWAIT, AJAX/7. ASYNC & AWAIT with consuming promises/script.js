"use strict";
//old method
// fetch(`https://restcountries.com/v2/name/${country}`).then(res=> console.log(res))

//ASYNC and AWAIT

// NOTE: It is a syntactical suger on .then method
const renderCountry = function (getcountry) {
  console.log("The country: ", getcountry);
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  //GeoLocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;
  //Reverse GeoCoding
  const resGeo = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  );
  const dataGeo = await resGeo.json();

  //Country data
  const res = await fetch(
    `https://restcountries.com/v2/name/${dataGeo.countryCode}`
  );

  //   log response
  console.log(res);

  //   log json format
  const data = await res.json();
  console.log(data);

  //   log renderCountry to fetch country
  renderCountry(data[1]);
};

console.log("FIRST MSG");
//call the country by the button
const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", function () {
  whereAmI();
});
