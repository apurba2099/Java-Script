"use strict";
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 20;
  console.log(`${this.make} going at ${this.speed} km/h speed.`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h speed.`);
};

const Bugatti = new Car("Bugatti", 140);
console.log(Bugatti);
Bugatti.accelerate();
Bugatti.brake();

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h speed, with a charge of ${this.charge}`
  );
};
const tesla = new EV("Tesla", 180, 90);
console.log(tesla);
tesla.accelerate();
tesla.brake();
