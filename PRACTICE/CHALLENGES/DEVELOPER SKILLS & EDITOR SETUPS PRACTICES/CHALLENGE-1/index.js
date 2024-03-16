const printForecast = function (arr) {
  //ekhane extra join korar jonne array nilam!
  extraArrayBoxForJoining = [];
  //ekhane foreach use korlam google a usage ta dekhe jeta kina nested function use kore!!
  arr.forEach((item, index) => {
    extraArrayBoxForJoining.push(`${item} C in ${index + 1} days`);
  });
  return extraArrayBoxForJoining.join(", ");
};
const test1 = [17, 21, 23];
console.log(printForecast(test1));
const test2 = [12, 5, -5, 0, 4];
console.log(printForecast(test2));
