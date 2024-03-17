/*const printForecast = function (arr) {
  extraArrayBoxForJoining = [];
  arr.forEach((item, index) => {
    extraArrayBoxForJoining.push(`...${item} C° in ${index + 1} days`);
    //for degree alt + 0176
  });
  return extraArrayBoxForJoining.join(" ");
};
const test1 = [17, 21, 23];
console.log(printForecast(test1));
const test2 = [12, 5, -5, 0, 4];
console.log(printForecast(test2));*/

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

1) Understanding the problem
- Array transformed to string separated by ...

- What is the x days? Ans. index + 1

2) Breaking up into sub problems
- Transform array into string
- Transform each element to string with °C
- Strings need to contain day (index + 1)
- Add ... between elements and in start and at the end of string
- Log the string to console
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// console.log(`... ${data1[0]}°C ... ${data1[1]}°C ... ${data1[2]}°C ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};

printForecast(data2);

