var Vehicle = function(x, y, speed, gas, altitude) {
 this.x = x;
 this.y = y;
 this.speed = speed;
 this.gas = gas;
 this.altitude = altitude;
};

Vehicle.prototype.move = function() {
 this.x = this.x + this.speed * this.randomStep();
 this.y = this.y + this.speed * this.randomStep();
};

Vehicle.prototype.randomStep = function() {
 if (Math.random() < 0.5) {
   return -1;
 } else {
   return 1;
 }
};

var Car = function (x, y, gas) {
 Vehicle.call(this, x, y, 5, gas);
};

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.honk = function () {
 console.log("Beep! Beep!");
};

var myCar = new Car(10, 9, 6);
// console.log(myCar);

var Bike = function(x, y) {
 Vehicle.call(this, x, y, 2, 0);
};

Bike.prototype = Object.create(Vehicle.prototype);

Bike.prototype.honk = function() {
 console.log("Hey Watch out!" );
};

var myBike = new Bike(5, 10);
// console.log(myBike);


var AngryBicycle = function(x, y) {
 Bike.call(this, x, y);
};

AngryBicycle.prototype = Object.create(Bike.prototype);

AngryBicycle.prototype.honk = function () {
 Object.getPrototypeOf(AngryBicycle.prototype).honk.call(this);
 Object.getPrototypeOf(AngryBicycle.prototype).honk.call(this);
};

var ab = new AngryBicycle(0, 0);

var FastCar = function(x, y, gas) {
 Car.call(this, x, y, gas)
};

FastCar.prototype = Object.create(Car.prototype);

FastCar.prototype.randomStep = function() {
 return Object.getPrototypeOf(FastCar.prototype).randomStep.call(this) * 2;
};

var myFastCar = new FastCar(1, 2, 3);

var RaceCar = function(x, y, gas) {
 FastCar.call(this, x, y, gas)
};

RaceCar.prototype = Object.create(FastCar.prototype);

RaceCar.prototype.randomStep = function() {
 return Object.getPrototypeOf(RaceCar.prototype).randomStep.call(this) * 2;
};

var myRaceCar = new RaceCar(1, 2, 3);

var Airplane = function(x, y, gas) {
 Vehicle.call(this, x, y, 10, gas, 0);
};

Airplane.prototype = Object.create(Vehicle.prototype);

Airplane.prototype.takeOff = function(num) {
 this.altitude += num;
};

Airplane.prototype.landing = function() {
 this.altitude = 0;
};

var myAirplane = new Airplane(0, 0, 10);
