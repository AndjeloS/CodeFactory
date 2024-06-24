let people = ["Greg", "Mary", "Devon", "James"];

people.shift();
people.unshift("Matt");
people.pop();
people.push("Andjelo");

let newPeople = people.slice(2, 4);


console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));

people = ["Greg", "Mary", "Devon", "James"];

people.splice(2, 1, "Elizabeth", "Anna")
console.log(people);