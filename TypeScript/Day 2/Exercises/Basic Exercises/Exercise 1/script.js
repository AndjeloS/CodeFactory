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
let result = document.getElementById("result");
result.innerHTML += `${p1.printInfo()}`;
