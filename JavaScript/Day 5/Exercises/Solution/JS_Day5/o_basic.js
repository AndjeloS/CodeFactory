// Exercise 1
// ---------------
// Create an object called sportsCar with the following properties:
// modelId → 7
// brand → "SpyMotors"
// model → "Spectre"
// colors → ["Silver", "Black", "White"]
// Print out the sportsCar object to the console. Update the modelId property of the sportsCar object to be 8.
// Add "Midnight Blue" to the array of colors available for sportsCar. Print out the sportsCar object to the console again.

console.warn("\nBasic-Object-Exercise 1:\n ");

// Create the sportsCar object with the specified properties
let sportsCar = {
  modelId: 7,
  brand: "SpyMotors",
  model: "Spectre",
  colors: ["Silver", "Black", "White"],
};

// Print out the sportsCar object to the console
console.log(sportsCar);

// Update the modelId property of the sportsCar object to be 008
sportsCar.modelId = 8;

// Add "Midnight Blue" to the array of colors available for sportsCar
sportsCar.colors.push("Midnight Blue");

// Print out the sportsCar object to the console again
console.log(sportsCar);

// Exercise 2
// ---------------
// Create 3 different objects for 3 different themes:  car, animal and person.
// The end result should be 9 objects in total.  These objects should have some properties like name,
// brand, model, type, color, weight, age... of course inherent to its type because, for instance,
// an animal has no brand...
// Each object should have at least one method, that shows some properties about each theme.
// Feel free to expand on that.
// The message from the methods must be printed on the browser too, either by manipulationg a paragraph
// for example or with console.log, document.write, ... .
console.warn("\nBasic-Object-Exercise 2:\n ");

// Car objects
const car1 = {
  brand: "Toyota",
  model: "Corolla",
  color: "Blue",
  year: 2019,
  info: function () {
    return `Car: ${this.brand} ${this.model}, Color: ${this.color}, Year: ${this.year}`;
  },
};

const car2 = {
  brand: "Honda",
  model: "Civic",
  color: "Red",
  year: 2020,
  info: function () {
    return `Car: ${this.brand} ${this.model}, Color: ${this.color}, Year: ${this.year}`;
  },
};

const car3 = {
  brand: "Ford",
  model: "Mustang",
  color: "Black",
  year: 2021,
  info: function () {
    return `Car: ${this.brand} ${this.model}, Color: ${this.color}, Year: ${this.year}`;
  },
};

// Animal objects

const animal1 = {
  name: "Buddy",
  breed: "Golden Retriever",
  age: 3,
  color: "Golden",
  info: function () {
    return `Animal: ${this.name}, Breed: ${this.breed}, Age: ${this.age}, Color: ${this.color}`;
  },
};

const animal2 = {
  name: "Mittens",
  breed: "Siamese",
  age: 2,
  color: "White",
  info: function () {
    return `Animal: ${this.name}, Breed: ${this.breed}, Age: ${this.age}, Color: ${this.color}`;
  },
};

const animal3 = {
  name: "Shadow",
  breed: "Black Labrador",
  age: 4,
  color: "Black",
  info: function () {
    return `Animal: ${this.name}, Breed: ${this.breed}, Age: ${this.age}, Color: ${this.color}`;
  },
};

// Person objects

const person1 = {
  name: "Alice",
  age: 28,
  profession: "Software Developer",
  city: "New York",
  info: function () {
    return `Person: ${this.name}, Age: ${this.age}, Profession: ${this.profession}, City: ${this.city}`;
  },
};

const person2 = {
  name: "Bob",
  age: 35,
  profession: "Graphic Designer",
  city: "San Francisco",
  info: function () {
    return `Person: ${this.name}, Age: ${this.age}, Profession: ${this.profession}, City: ${this.city}`;
  },
};

const person3 = {
  name: "Charlie",
  age: 42,
  profession: "Teacher",
  city: "Chicago",
  info: function () {
    return `Person: ${this.name}, Age: ${this.age}, Profession: ${this.profession}, City: ${this.city}`;
  },
};

// Print info from each object to the console
console.log(car1.info());
console.log(car2.info());
console.log(car3.info());
console.log(animal1.info());
console.log(animal2.info());
console.log(animal3.info());
console.log(person1.info());
console.log(person2.info());
console.log(person3.info());
