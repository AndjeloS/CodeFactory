// OBJECT

let person = {
    fname: "Andjelo",
    lname: "SALTIN",
    age: 24,
    gym: true,
    hobbies: ["read", "code"],
    printInfo: function () {
        return `My name is ${this.fname} ${this.lname}, and i am ${this.age} years old, and my hobbies are ${this.hobbies.join(", ")}.`
    }
};

console.log(person.printInfo());

//50 Objects //50 students

//template - object generator //CLASSES

class Person {
    fname;
    lname;
    age;
    gym;
    hobbies;

    constructor(fname, lname, age, gym, hobbies) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.gym = gym;
        this.hobbies = hobbies;
    }
    //in typescript you have to specify what value it is, like string or number. 

    printInfo() {
        return `My name is ${this.fname} ${this.lname}, and i am ${this.age} years old, and my hobbies are ${this.hobbies.join(", ")}.`
    }

}

//50 students //10 trainers - 2 extra properties (jobtitle, salary)

//child      |   //parent
class Trainer extends Person {
    jobTitle;
    salary;

    constructor(fname, lname, age, gym, hobbies, job, salary) {
        super(fname, lname, age, gym, hobbies); //take them from the parent class
        this.jobTitle = job;
        this.salary = salary;
    }
    printInfo() {
        return `${super.printInfo()} I work as ${this.jobTitle}, and i get ${this.salary}$.`
    }
}

let person2 = new Person("Maria", "Doe", 28, true, ["code", "reading"])

let trainer = new Trainer("Thomas", "Doe", 25, true, ["code", "running"], "Trainer", 2800)

console.log(person2.printInfo());
console.log(trainer.printInfo());

//User - Admin