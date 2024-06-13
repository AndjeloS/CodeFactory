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
