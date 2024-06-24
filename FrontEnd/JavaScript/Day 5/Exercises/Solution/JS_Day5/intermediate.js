// Exercise 1
// --------------
// Now you will extend the classes from the previous exercise.
// Car: Extend with a child class called Motorbike, that will inherit the property and methods
// from the parent Class, as well as create new properties and methods that are unique to this class.
// Example: number of wheels.
// Animal: Extend with a child class called Fish, that will inherit the property and methods
// from the parent Class, as well as create new properties and methods that are unique to this class.
// Example: type of water it inhabits.
// Person: Extend with a child class called Profession, that will inherit the property and methods
// from the parent Class, as well as create new properties and methods that are unique to this class.
// Example: job position.
// Create, using the Child classes, 3 different objects for each class.
// The results from the methods must be printed on the browser too.
console.warn("\nIntermediate-Exercise 1:\n ");

// the car class comes from another file which is linked above this one in the
// index.html, hence we can use it here too

class Motorbike extends Car {
  constructor(name, brand, model, color, year, numWheels) {
    super(name, brand, model, color, year);
    this.numWheels = numWheels;
  }

  info() {
    return `${super.info()}, Wheels: ${this.numWheels}`;
  }
}

const motorbike1 = new Motorbike("Speedster", "Yamaha", "R1", "Blue", 2022, 2);
const motorbike2 = new Motorbike(
  "Thunder",
  "Ducati",
  "Panigale V4",
  "Red",
  2021,
  2
);
const motorbike3 = new Motorbike(
  "Blaze",
  "Harley-Davidson",
  "Street 750",
  "Black",
  2020,
  2
);

console.log(motorbike1.info());
console.log(motorbike2.info());
console.log(motorbike3.info());

class Fish extends Animal {
  constructor(name, breed, color, age, typeWater) {
    super(name, breed, color, age);
    this.typeWater = typeWater;
  }

  info() {
    return `${super.info()}, Water Type: ${this.typeWater}`;
  }
}

const fish1 = new Fish("Nemo", "Clownfish", "Orange", 2, "Saltwater");
const fish2 = new Fish("Dory", "Blue Tang", "Blue", 3, "Saltwater");
const fish3 = new Fish("Goldie", "Goldfish", "Gold", 1, "Freshwater");

console.log(fish1.info());
console.log(fish2.info());
console.log(fish3.info());

class Profession extends Person {
  constructor(name, age, profession, city, position) {
    super(name, age, profession, city);
    this.position = position;
  }

  info() {
    return `${super.info()}, Position: ${this.position}`;
  }
}

const profession1 = new Profession(
  "Alice",
  28,
  "Software Developer",
  "New York",
  "Senior Developer"
);
const profession2 = new Profession(
  "Bob",
  35,
  "Graphic Designer",
  "San Francisco",
  "Lead Designer"
);
const profession3 = new Profession(
  "Charlie",
  42,
  "Teacher",
  "Chicago",
  "Head of Department"
);

console.log(profession1.info());
console.log(profession2.info());
console.log(profession3.info());
