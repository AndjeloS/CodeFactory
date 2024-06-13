"use strict";
// interface IPerson {
//     firstName: string;
//     lastName: string;
//     age: number;
//     printInfo: () => string
// }
let employeeArr = [];
class HospitalEmployee {
    constructor(id, firstName, lastName, salary) {
        this.vacationDays = 20;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        // console.log(this);
        employeeArr.push(this);
    }
    printSalary() {
        return `${this.firstName} ${this.lastName} with an id of ${this.id} earns ${this.salary}E/month;`;
    }
    takeVacationDays(days) {
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
    constructor(id, firstName, lastName, salary, insurances) {
        super(id, firstName, lastName, salary);
        this.insurances = insurances;
    }
    printInsurances() {
        return `${this.firstName} with id of ${this.id} works with insurances ${this.insurances}}`;
    }
}
new Nurse(2, "Johana", "Doe", 2000, ['AA', 'BB']);
new Nurse(3, "Ana", "Doe", 5000, ['AA', 'BB']);
new Nurse(4, "Marta", "Doe", 4000, ['CC', 'BB']);
// console.log(nurse1.printSalary());
// nurse1.takeVacationDays(12);
// console.log(nurse1.vacationDays);
// console.log(nurse1.printInsurances());
// console.log(employeeArr);
let result = document.getElementById('result');
for (let employee of employeeArr) {
    console.log(employee);
    const { firstName, lastName } = employee;
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
   `;
}
