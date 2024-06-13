"use strict";
class Person {
    constructor(firstName, lastName, age, jobTitle) {
        (this.firstName = firstName),
            (this.lastName = lastName),
            (this.age = age),
            (this.jobTitle = jobTitle);
    }
    printInfo() {
        return `Hello there, My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
    }
}
let p1 = new Person("John", "Doe", 24, "Programmer");
console.log(p1.printInfo());
class Job extends Person {
    constructor(firstName, lastName, age, jobTitle, salary, jobLocation) {
        super(firstName, lastName, age, jobTitle);
        (this.salary = salary), (this.jobLocation = jobLocation);
    }
    printInfoExtend() {
        return `${this.printInfo()} and I get ${this.salary}€ every month, and I work in ${this.jobLocation}`;
    }
}
let p2 = new Job("John", "Doe", 24, "Programmer", 2500, "Vienna");
let result = document.getElementById("result");
result.innerHTML += `${p2.printInfoExtend()}`;
