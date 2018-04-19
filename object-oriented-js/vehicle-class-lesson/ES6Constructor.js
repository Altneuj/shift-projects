// var Vehicle = function (x, y, speed) {
//   this.x = x;
//   this.y = y;
//   this.speed = speed;
// };
//
// Vehicle.prototype.move = function() {
//   this.x = this.x + this.speed * this.randomStep();
//   this.y = this.y + this.speed * this.randomStep();
// };
//
// Vehicle.prototype.randomStep = function() {
//   if (Math.random() < 0.5) {
//     return -1;
//   } else {
//     return 1;
//   }
// }


//OO programming
class Vehicle {
  constructor(x , y, speed, gas) {
    this.x = x,
    this.y = y,
    this.speed = speed,
    this.gas = gas
  }
  move(){
    this.x += this.speed;
  }
};

const b = new Vehicle(1,2,5);

class Car extends Vehicle {
  constructor(x, y, gas){
    super(x, y, 5, gas)
  }

  honk() {
    console.log("HONK!!");
  }
};

class Bike extends Vehicle {
  constructor(x, y){
    super(x, y, 2, 0)
  }
  honk(){
    console.log("Hey watch out!!")
  }
};

const a = new Car(5, 7);
const c = new Car (1 , 2, 8);
const myBike = new Bike(6, 9);


console.log(myBike);
myBike.move();
myBike.honk();
console.log(myBike);


// //OLOO VERSION BELOW
//
// var Vehicle = {
//   init: function(x , y, speed, gas) {
//     this.x = x,
//     this.y = y,
//     this.speed = speed,
//     this.gas = gas
//   },
//   move: function(){
//     this.x += this.speed;
//   }
// };
//
//
// var Car = Object.create(Vehicle);
//
//   Car.honk = function() {
//     console.log("HONK!!");
//   };
//
// var myCar = Object.create(Car);
//
// myCar.init(1,4,5,7);
