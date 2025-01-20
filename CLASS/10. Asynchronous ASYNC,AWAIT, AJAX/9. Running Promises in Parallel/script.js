"use strict";

// previous file/lecture function it is

const getJson = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok)
      throw new Error(`${errorMsg} $(${errorMsg} ${response.status})`);

    return response.json();
  });
};

/*
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

// Notes: Promise.all its call an combinator function, cause its allows us to combine multiple promises
*/
// ===============================
// Other combinator promises functions
// let see:-

//1: Promise.race
// Note: In JavaScript, Promise.race() is a method that takes an iterable of promises as input and returns a single promise. This returned promise settles (either resolves or rejects) as soon as one of the input promises settles, adopting the state (resolved or rejected) and value/reason of that first settled promise.

(async function () {
  const res = await Promise.race([
    getJson(`https://restcountries.com/v2/name/italy`),
    getJson(`https://restcountries.com/v2/name/egypt`),
    getJson(`https://restcountries.com/v2/name/mexico`),
  ]);

  console.log(res[0]);
})();
