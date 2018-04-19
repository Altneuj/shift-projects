// //OO programming
// class Vehicle {
//   constructor(x , y, speed, gas) {
//     this.x = x,
//     this.y = y,
//     this.speed = speed,
//     this.gas = gas
//   }
//   move(){
//     this.x += this.speed;
//     this.y += this.speed;
//   }
// };
//
// const b = new Vehicle(1,2,5);
//
// class Car extends Vehicle {
//   constructor(x, y, gas){
//     super(x, y, 5, gas)
//   }
//
//   honk() {
//     console.log("HONK!!");
//   }
// };
//
// class Bike extends Vehicle {
//   constructor(x, y){
//     super(x, y, 2, 0)
//   }
//   honk(){
//     console.log("Hey watch out!!")
//   }
// };
//
// const a = new Car(5, 7);
// const c = new Car (1 , 2, 8);
// const myBike = new Bike(6, 9);
//
//
// console.log(myBike);
// myBike.move();
// myBike.honk();
// console.log(myBike);


//OLOO VERSION BELOW

var Vehicle = {
  init: function(x , y, speed, gas) {
    this.x = x,
    this.y = y,
    this.speed = speed,
    this.gas = gas
  },
  move: function(){
    this.x += this.speed;
    this.y += this.speed;
  }
};


var Car = Object.create(Vehicle);

  Car.honk = function() {
    console.log("HONK!!");
  };

  var Bike = Object.create(Vehicle);

  Bike.honk = function() {
    console.log("Hey watch out!");
  }

var myCar = Object.create(Car);

myCar.init(1,4,5,7);

var myBike = Object.create(Bike);

myBike.init(3,4,2,0);

console.log(myCar);
myCar.honk();
myCar.move();
console.log(myCar);

console.log(myBike);
myBike.honk();
myBike.move();
console.log(myBike);
