/*const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    else if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 9], [1, 2, 6]);
// IDENTIFY
console.log(amplitudeBug);
*/

function reverseInput(input) {
  return typeof input === "string"
    ? input.split("").reverse().join("")
    : typeof input === "number"
    ? parseFloat(input.toString().split("").reverse().join(""))
    : Array.isArray(input)
    ? input.reverse()
    : "invalid input";
}
console.log(reverseInput([1, 2, 3, 4, 5]));
console.log(reverseInput("hello"));
console.log(reverseInput(12345));
console.log(reverseInput(123.45));

let text = "How are you doing today?";
let a = text.split("").reverse().join("");
console.log(a);
