// //generic function
// function name(){
//     console.log("Apurba")
// }
// name();
// //function expression
// const name1 = function (){
//     console.log("Apurba")
// }
// name1();

// arrow function
const name3 = name => console.log("Apurba")
// name3();

//arrow function more details

// one line Code 
const calcAge = birthYear => 2024 - birthYear;
const age = calcAge(2003);
// console.log(age)

// two-line code
const retireMent =  (birthyear, firstname) =>{
    const age = 2024 - birthyear;
    const retirement = 60 - age;
    // return retirement
    return `${firstname} is retire in ${retirement} year`;
}
console.log(retireMent(2003, "Apurba"))
console.log(retireMent(1996, "Avishek"))

//practice 

const subscription = (validationMonth) =>{
    const PackPrice = validationMonth * 99 ;
    return `you choose ${validationMonth} month of ${PackPrice} Pack Price`;
}
console.log(subscription(2))
console.log(subscription(6))


// function calling function 
const percentageCalculator = function (subject){
    return subject;
}
const Subjectmarks = function (bangla, english, math, biology, physics, chemistry){
    const language1 = percentageCalculator(bangla);
    const language2 = percentageCalculator(english);
    const Subject1 = percentageCalculator(math);
    const Subject2 = percentageCalculator(biology);
    const Subject3 = percentageCalculator(physics);
    const Subject4 = percentageCalculator(chemistry);
    
    const overallPercentage = `${(language1+ language2 + Subject1 + Subject3 + Subject4) / 6} overall percentage`
    return overallPercentage;
}
console.log(Subjectmarks(60,67,80,80,98,70));

