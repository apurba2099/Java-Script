"use strict";
//Running promises in parallel
// here we all know about asyc and await to write this code

/*
//old method
// fetch(`https://restcountries.com/v2/name/${country}`).then(res=> console.log(res))

//ASYNC and AWAIT

// NOTE: It is a syntactical suger on .then method
const renderCountry = function (getcountry) {
  // console.log(`The country: `, getcountry.name);
  para.insertAdjacentHTML("beforeend", getcountry);
  para.style.opacity = 1;
  para.textContent = getcountry.name;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  //try block
  try {
    //GeoLocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse GeoCoding
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );

    if (!resGeo.ok) throw new Error("Problem getting location data");

    const dataGeo = await resGeo.json();

    //Country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.countryCode}`
    );
    if (!res.ok) throw new Error("Problem getting location country");
    //   log response
    // console.log(res);

    //   log json format
    const data = await res.json();
    // console.log(data[20]);
    //   log renderCountry to fetch country
    renderCountry(data[20]);

    return `you are in ${dataGeo.city},${dataGeo.countryCode}`;
  } catch (err) {
    //catch block
    console.error(`${err}💥`);
    renderCountry(`💥 ${err.message}`);

    //Rejected promise returned from the async function
    throw err;
  }
};

/////////////Error handling//////////////
// Catch and Try block

// syntax error
// try {
//   let y = 1;
//   const x = 2;
//   y = 3;
// } catch (err) {
//   alert(err.message);
// }

////RETURNING VALUES TO THE ASYNC FUNCTIONS
console.log("1: will get location");
// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then((city) => console.log(`2: ${city}`))
//   .catch((err) => console.error(`2: ${err.meesage}💥`))
//   .finally(() => console.log(`3: Finished getting location`));

// IIFE
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.meesage}💥`);
  }
  console.log(`3: Finished getting location`);
})();

//call the country by the button
// console.log("FIRST MSG");
const clickBtn = document.getElementById("clickBtn");
const para = document.getElementById("para");

clickBtn.addEventListener("click", function () {
  whereAmI();
});

*/
// ======================================
// previous file/lecture function it is

const getJson = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok)
      throw new Error(`${errorMsg} $(${errorMsg} ${response.status})`);

    return response.json();
  });
};

// get three country capital
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJson(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJson(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJson(`https://restcountries.com/v2/name/${c3}`);

    //promise all helper function promise constructor

    //DEFINITION:  this function takes an array of Promises and it will return new promises

    // This is call parallel concept
    const data = await Promise.all([
      getJson(`https://restcountries.com/v2/name/${c1}`),
      getJson(`https://restcountries.com/v2/name/${c2}`),
      getJson(`https://restcountries.com/v2/name/${c3}`),
    ]);

    // Doest not need any more
    // console.log([data1.capital, data2.capital, data3.capital]);
    console.log(data.map((data) => data[0].capital));
    // ----for my practice----
    // print full data
    console.log("Full Data", data);

    //extact print region
    console.log(
      "Region belong",
      data.map((region) => region[0].region)
    );

    //extract print population by string literal
    const population = data.map((pop) => pop[0].population);
    console.log(`These three Country population is- ${population}`);

    // extract country name
    console.log(
      "Name of these country: ",
      data.map((cname) => cname[0].name)
    );
    ////////////
  } catch (error) {
    console.error(error);
  }
};

get3Countries("bangladesh", "australia", "usa");
