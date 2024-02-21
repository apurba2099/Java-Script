"use strict;"
//BMI function
calcBMI = function (mass, height){
  return mass / height**2;
}

//Mark Miller details
const mark = {
  weight:92,
  tall:1.95
};
const markBMI = calcBMI(mark.weight,mark.tall);
console.log(`Mark Miller BMI is: ${markBMI.toFixed(2)}`);

//John Smith details
const john = {
  weight:78,
  tall:1.69
};
const johnBMI = calcBMI(john.weight,john.tall);
console.log(`John Smith BMI is: ${johnBMI.toFixed(2)}`);
z
//compare the BMI 
if(markBMI > johnBMI){
  console.log(`"Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!"`)
}
else{
  console.log(`"John's BMI (${johnBMI.toFixed(2)}) is higher than Marks's (${markBMI.toFixed(2)})!"`)
}