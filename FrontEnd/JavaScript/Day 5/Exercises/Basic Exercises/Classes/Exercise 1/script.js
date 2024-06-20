class Car {
    brand;
    model;
    name;
    price;

    constructor(brand, model, name, price) {
        this.brand = brand;
        this.model = model;
        this.name = name;
        this.price = price;
    }

    printInfo() {
        return `Here we have a ${this.name} it costs ${this.price}$.`
    }
}

class Animal {
    name;
    race;
    age;
    color;
    constructor(name, race, age, color) {
        this.name = name;
        this.race = race;
        this.age = age;
        this.color = color;
    }

    printInfo() {
        return `This is ${this.name}, a ${this.age}year old ${this.race}.`
    }
}

class Person {
    fname;
    lname;
    age;
    job;

    constructor(fname, lname, age, job) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.job = job;
    }

    printInfo() {
        return `${this.fname} ${this.lname} is a ${this.job}.`
    }
}

let car = new Car("BMW", "4", "BMW 4er Gran Coupé (2024)", 52.992);
let car2 = new Car("Porsche", "911", "Carrera Coupé", 165.815);
let car3 = new Car("Volkswagen", "Golf", "VW Golf LifeBMW 4er Gran Coupé (2024)", 28.090);

let animal = new Animal("Dexter", "Dog", 5, "Black");
let animal2 = new Animal("Max", "Cat", 3, "Orange");
let animal3 = new Animal("Marie", "Hamster", 1, "Brown");


let person = new Person("Benjamin", "Tennyson", 10, "Super Hero");
let person2 = new Person("Dick", "Grayson", 23, "Super Hero");
let person3 = new Person("Ash", "Ketchum", 11, "SPokemon Trainer");




document.getElementById("info").innerHTML = `
<h1>INFO:</h1>
<p>${person.printInfo()}</p>
<p>${person2.printInfo()}</p>
<p>${person3.printInfo()}</p>
<br>
<p>${animal.printInfo()}</p>
<p>${animal2.printInfo()}</p>
<p>${animal3.printInfo()}</p>
<br>
<p>${car.printInfo()}</p>
<p>${car2.printInfo()}</p>
<p>${car3.printInfo()}</p>
`