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

class Motorbike extends Car {
    wheels;
    speed;

    constructor(brand, model, name, price, wheels, speed) {
        super(brand, model, name, price);
        this.wheels = wheels;
        this.speed = speed;
    }
    printInfo() {
        return `Here we have a ${this.brand} ${this.name} it costs ${this.price}$ has ${this.wheels} and can reach ${this.speed}kmph. `
    }
}

class Fish extends Animal {
    water;
    size;

    constructor(name, race, age, color, water, size) {
        super(name, race, age, color);
        this.water = water;
        this.size = size;
    }
    printInfo() {
        return `This is a ${this.race}, it lives in ${this.water} and can reach ${this.size} cm in size!`
    }
}

class Profession extends Person {
    jobposition;
    experience; //in years

    constructor(fname, lname, age, job, jobposition, experience) {
        super(fname, lname, age, job);
        this.jobposition = jobposition;
        this.experience = experience;
    }
    printInfo() {
        return `${this.fname} ${this.lname} is a ${this.age} year old ${this.jobposition}, but secretly he is a ${this.job} with ${this.experience} years of experience.`
    }
}


let bike = new Motorbike("Kawasaki", "Urban Cruise", "Eliminator 500", 7.199, 2, 160);
let bike2 = new Motorbike("BMW", "Roadster", "S 1000 R", 19.490, 2, 261);
let bike3 = new Motorbike("Honda", "Cross", "CRF450R", 10.890, 2, 91);

let fish = new Fish("Silver carp", "Carp", 0.5, "silver", "Freshwater", 102);
let fish2 = new Fish("European perch", "Perch", 1, "green", "Freshwater", 60);
let fish3 = new Fish("Atlantic salmon", "Salmon", 2.5, "silver", "Freshwater", 66);

let person = new Profession("Benjamin", "Tennyson", 10, "Super Hero", "Middle Schooler", 0.8);
let person2 = new Profession("Dick", "Grayson", 23, "Super Hero", "Psychology and Criminology Student", 8);
let person3 = new Profession("Peter", "Parker", 27, "Spider Man", "Photographer", 12);







document.getElementById("info").innerHTML = `
<h1>INFO:</h1>
<p>${person.printInfo()}</p>
<p>${person2.printInfo()}</p>
<p>${person3.printInfo()}</p>
<br>
<p>${fish.printInfo()}</p>
<p>${fish2.printInfo()}</p>
<p>${fish3.printInfo()}</p>
<br>
<p>${bike.printInfo()}</p>
<p>${bike2.printInfo()}</p>
<p>${bike3.printInfo()}</p>
`