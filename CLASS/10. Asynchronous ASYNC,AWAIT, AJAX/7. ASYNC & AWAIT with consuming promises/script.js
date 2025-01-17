"use strict";

//ASYNC and AWAIT

// NOTE: It is a syntactical suger on .then method
const renderCountry = function (getcountry) {
  console.log("The country: ", getcountry);
};

const whereAmI = async function (country) {
  // fetch(`https://restcountries.com/v2/name/${country}`).then(res=> console.log(res))
  const res = await fetch(`https://restcountries.com/v2/name/${country}`);

  //   log response
  console.log(res);

  //   log json format
  const data = await res.json();
  console.log(data);

  //   log renderCountry to fetch country
  renderCountry(data[1]);
};

console.log("First");
//call the country by the button
const clickBtn = document.getElementById("clickBtn");
clickBtn.addEventListener("click", function () {
  whereAmI("india");
});
