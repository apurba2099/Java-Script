//test data

const apurba = {
    MyName:"Apurba Dutta",
    roll:65,
    class:"cst",
    college: "jis"
}
console.log(apurba);
console.log(Object.values(apurba))
console.log(Object.keys(apurba))
const newStart = "My"
const add = "Name"
console.log(["My"+ add])
// console.log(apurba["My"+add])


const biku = {
  firstName: "Apurba",
  lastName: "Dutta",
  age: 2024 - 2002,
  work: "Coder",
  friends: ["Michael", "Peter", "Steven"],
};

const nameKey = "Name";
console.log(biku["first" + nameKey]);
console.log(biku["last" + nameKey]);