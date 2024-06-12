"use strict";
let person = [
    { fName: "Andjelo", lName: "Saltin" },
];
for (let i = 0; i < person.length; i++) {
    const element = person[i];
    console.log(`${element.fName} ${element.lName}`);
}
for (var i = 0; i < 10; i++) {
    let result = document.getElementById("result");
    person.forEach((person) => {
        result.innerHTML += `
        ${person.fName}`;
    });
}
function printLname() {
    person.forEach((person) => {
        console.log(`${person.lName}`);
    });
}
for (var i = 0; i < 10; i++) {
    setTimeout(printLname, 5000);
}
