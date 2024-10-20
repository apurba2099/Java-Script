"use strict";
// challeneg 2 oops
class Carlc {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  //create a speed increase method
  accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is speed ${this.speed} k/h`);
  };
  //create a speed decrease method
  brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is speed ${this.speed} k/h`);
  };

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Carlc("Ford", 120);
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

///This is more specified to understanding the getter and setter
class Details {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  //  fullName(name) { this is a function
  set fullName(name) {
    if (name.includes(" ")) {
      [this.firstName, this.lastName] = name.split(" ");
    } else {
      console.log(`This ${name} is not a valid name`);
    }
  }
  // fullName() { this is function
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const apurbaD = new Details("Apurba", "Dutta", 2003);
console.log(apurbaD.fullName);
apurbaD.fullName = 'Apurba Roy'
console.log(apurbaD.fullName);
console.log(typeof apurbaD.fullName);
