interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
  printInfo: () => string;
}

class Person implements IPerson {
  firstName: string;
  lastName: string;
  age: number;
  jobTitle: string;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    jobTitle: string
  ) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.age = age),
      (this.jobTitle = jobTitle);
  }

  printInfo(): string {
    return `Hello there, My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old, and I am a ${this.jobTitle}`;
  }
}

let p1 = new Person("John", "Doe", 24, "Programmer");
console.log(p1.printInfo());

class Job extends Person {
  salary: number;
  jobLocation: string;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    jobTitle: string,
    salary: number,
    jobLocation: string
  ) {
    super(firstName, lastName, age, jobTitle);
    (this.salary = salary), (this.jobLocation = jobLocation);
  }

  printInfoExtend(): string {
    return `${this.printInfo()} and I get ${
      this.salary
    }€ every month, and I work in ${this.jobLocation}`;
  }
}

let p2 = new Job("John", "Doe", 24, "Programmer", 2500, "Vienna");

let result = document.getElementById("result") as HTMLElement;

result.innerHTML += `${p2.printInfoExtend()}`;
