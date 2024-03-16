// it performing a faulty calculator where 90% is correct answer given and 10% answer is wrong

let random = Math.random();
console.log(random)
let a = parseFloat(prompt("Enter the First Number: "));
let b = prompt("Enter the operation: ");
let c = parseFloat(prompt("Enter the second number: "));

console.log(`result is ${a} ${b} ${c}`);


let obj = {
     "+":"-",
     "*":"+",
     "-":"/",
     "/":"**",
 };

if(random > 0.1){
// performin correct calculation
  console.log(`The result: ${a} ${b} ${c}`);
  alert(`The result is: ${eval(`${a} ${b} ${c}`)}`);
}

else{
    //performing wrong calculation
    b=obj[b] 
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}
