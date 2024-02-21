// CHALLENGE#1

// CALCULATE BMI
// MARK DATA 1
let Markmass= 78;
let Markheight=1.69;
const MarkbmiData1 = Markmass / (Markheight ** 2)
// const result = MarkbmiData1.toFixed(2) 
console.log(`Mark BMI Data 1: `,MarkbmiData1)

// MARK DATA 2
Markmass= 95;
Markheight=1.88;
const MarkbmiData2 = Markmass / (Markheight ** 2)

console.log(`Mark BMI Data 2: `,MarkbmiData2)

// JOHN DATA 1
let JohnMass = 92;
let JohnHeight = 1.95;
const JohnbmiData1 = JohnMass / (JohnHeight ** 2)

console.log(`John BMI Data 1: `,JohnbmiData1)

// JOHN DATA 2
JohnMass = 85;
JohnHeight = 1.76;
const JohnbmiData2 = JohnMass / (JohnHeight ** 2)

console.log(`John BMI Data 2: `,JohnbmiData2)


// CHALLENGE#2
// PRINT IN NICE OUTPUT


// In DATA 1
const HigherBmi1 = MarkbmiData1 > JohnbmiData1
console.log(`Is in data 1 Mark BMI is Higher than John?`,HigherBmi1) 

//In DATA 2
const HigherBmi2 = MarkbmiData2 > JohnbmiData2
console.log(`Is in data 2 Mark BMI is Higher than John?`,HigherBmi2)

// IN IF ELSE STATEMENT
// DATA 1
if (MarkbmiData1 > JohnbmiData1){
    console.log(`Mark's have ${MarkbmiData1.toFixed(2)} is Higher than John's ${JohnbmiData1.toFixed(2)} BMI in DATA 1`)
}
else{
    console.log(`John's have ${JohnbmiData1} is higher than Mark's ${MarkbmiData1.toFixed(2)}`)
}

// DATA2
if (MarkbmiData2 > JohnbmiData2){
    console.log(`Mark's have ${MarkbmiData2} is Higher than John's ${JohnbmiData2} BMI in DATA 2`)
}
else{
    console.log(`John's have ${JohnbmiData2.toFixed(2)} is higher than Mark's ${MarkbmiData2.toFixed(2)}`)
}

