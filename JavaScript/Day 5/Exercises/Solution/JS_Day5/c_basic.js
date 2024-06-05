// Exercise 1
// ----------------
// Extend from the last example and create 3 different classes to create objects from:  car, animal and person.
// These classes should have some properties like name, brand, model, type, color, weight, age...
// of course inherent to its type because, for instance, an animal has no brand...
// Each class should have at least one method, that shows some properties about each theme.
// Feel free to expand on that.
// Create, using the classes, 3 different objects for each class.
// The results from the methods must be printed on the browser too like the previous example.
console.warn("\nBasic-Classes-Exercise 1:\n ");

// Car class
class Car {
  constructor(name, brand, model, color, year) {
    this.name = name;
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
  }

  info() {
    return `Car: ${this.name}, Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}, Year: ${this.year}`;
  }
}

const cc1 = new Car("MyCar1", "Toyota", "Corolla", "Blue", 2019);
const cc2 = new Car("MyCar2", "Honda", "Civic", "Red", 2020);
const cc3 = new Car("MyCar3", "Ford", "Mustang", "Black", 2021);

console.log(cc1.info());
console.log(cc2.info());
console.log(cc3.info());

// Animal class
class Animal {
  constructor(name, breed, color, age) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.age = age;
  }

  info() {
    return `Animal: ${this.name}, Breed: ${this.breed}, Color: ${this.color}, Age: ${this.age}`;
  }
}

const a1 = new Animal("Buddy", "Golden Retriever", "Golden", 3);
const a2 = new Animal("Mittens", "Siamese", "White", 2);
const a3 = new Animal("Shadow", "Black Labrador", "Black", 4);

console.log(a1.info());
console.log(a2.info());
console.log(a3.info());

// Person class
class Person {
  constructor(name, age, profession, city) {
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.city = city;
  }

  info() {
    return `Person: ${this.name}, Age: ${this.age}, Profession: ${this.profession}, City: ${this.city}`;
  }
}

const p1 = new Person("Alice", 28, "Software Developer", "New York");
const p2 = new Person("Bob", 35, "Graphic Designer", "San Francisco");
const p3 = new Person("Charlie", 42, "Teacher", "Chicago");

console.log(p1.info());
console.log(p2.info());
console.log(p3.info());
