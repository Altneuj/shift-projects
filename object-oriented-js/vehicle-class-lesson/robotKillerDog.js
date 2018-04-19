const barker = function (state) {
  return {
    bark: function () {
      console.log('Woof, I am ' + state.name);
    }
  }
};

const driver = function (state) {
  return {
    drive: function () {
      state.position = state.position + state.speed;
    }
  }
}

const meower = function(state) {
  return {
    meow: function() {
      console.log("Meow, I am " + state.name);
    }
  }
};

const killer = function (state) {
  return {
    kill: function(str) {
      console.log("I just killed " + str);
    }
  }
};

const cleaner = function(state) {
  return {
    clean: function(state) {
      console.log("I just cleaned");
    }
  }
};

const pooper = function(state) {
  return {
    poop: function() {
      console.log("I just pooped");
    }
  }
};

const RobotDog = function (name) {
  let state = {
    name: name,
    speed: 100,
    position: 5
  }

  return Object.assign(
    {},
    barker(state),
    driver(state)
  )
}

const CleaningRobot = function (name) {
  let state = {
    name: name,
    speed: 100,
    position: 5
  }
  return Object.assign({},
  cleaner(state),
  driver(state)
)
};

const MurderRobot = function (name) {
  let state = {
    name: name,
    speed: 100,
    position: 5
  }
  return Object.assign({},
  killer(state),
  driver(state)
)
};

const Dog = function (name) {
  let state = {
    name: name,
    speed: 100,
    position: 5
  }
  return Object.assign({},
  pooper(state),
  barker(state)
)
};

const Cat = function (name) {
  let state = {
    name: name,
    speed: 100,
    position: 5
  }
  return Object.assign({},
  pooper(state),
  meower(state)
)
};

const MurderRobotDog = function (name) {
  let state = {
    name: name,
    speed: 100,
    position: 5
  }
  return Object.assign({},
  barker(state),
  driver(state),
  killer(state)
)
};

var testDog = MurderRobotDog("Test");

console.log(testDog);
testDog.bark()
testDog.kill("you")
testDog.drive();
console.log(testDog)
