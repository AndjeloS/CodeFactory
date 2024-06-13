

// interface IPerson {
//     firstName: string;
//     lastName: string;
//     age: number;
//     printInfo: () => string
// }

// let person: IPerson = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     printInfo: function (): string {
//         return `I am ${this.firstName} ${this.lastName}, and I am ${this.age} years old!`;
//     }
// }


// console.log(person.printInfo());

interface IEmployee {
    firstName: string;
    lastName: string;
    salary: number;
    age?: number;
    printSalary: () => string
    takeVacationDays: (days: number) => number
}

let employeeArr: IEmployee[] = []

class HospitalEmployee implements IEmployee {
    protected id: number;
    public firstName: string;
    lastName: string;
    salary: number;
    vacationDays: number = 20;
    constructor(id: number, firstName: string, lastName: string, salary: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        // console.log(this);
        employeeArr.push(this)
    }
    public printSalary(): string {
        return `${this.firstName} ${this.lastName} with an id of ${this.id} earns ${this.salary}E/month;`
    }
    takeVacationDays(days: number): number {
        // return this.vacationDays = this.vacationDays - days;
        return this.vacationDays -= days;
    }
}

new HospitalEmployee(1, "John", "Doe", 3000);
new HospitalEmployee(5, "John", "Doe", 3000);
// console.log(e1.printSalary());
// e1.takeVacationDays(5);
// console.log(e1.vacationDays);
// console.log(e1.id);




class Nurse extends HospitalEmployee {
    insurances: Array<string>;
    constructor(id: number, firstName: string, lastName: string, salary: number, insurances: Array<string>) {
        super(id, firstName, lastName, salary)
        this.insurances = insurances;
    }
    printInsurances(): string {
        return `${this.firstName} with id of ${this.id} works with insurances ${this.insurances}}`
    }
}

new Nurse(2, "Johana", "Doe", 2000, ['AA', 'BB'])
new Nurse(3, "Ana", "Doe", 5000, ['AA', 'BB'])
new Nurse(4, "Marta", "Doe", 4000, ['CC', 'BB'])
// console.log(nurse1.printSalary());
// nurse1.takeVacationDays(12);
// console.log(nurse1.vacationDays);
// console.log(nurse1.printInsurances());
// console.log(employeeArr);
let result = document.getElementById('result') as HTMLElement;

for (let employee of employeeArr) {
    console.log(employee);
    const { firstName, lastName } = employee
    result.innerHTML += `
   <div>
        <div class="card my-3" >
            <div class="card-body">
                <h5 class="card-title">${firstName} ${lastName}</h5>
                <p class="card-text">${employee.printSalary()}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
   `


}

