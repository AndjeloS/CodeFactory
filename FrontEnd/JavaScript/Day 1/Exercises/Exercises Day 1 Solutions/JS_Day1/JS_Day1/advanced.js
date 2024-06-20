// Exercise 1
// -------------
// Declare five variables:
// let a = 7;
// let b = 14;
// let c = "21";
// let d = '36';
// let e = 42;
// Sum these variables and store the total in a new variable.
// Declare another set of variables: 
// let f = '1';
// let g = 15;
// let h = 8;
// let i = "1";
// Multiply these variables and store the product in a different variable.
// Finally, divide the two results (the sum by the product) that you got from the arithmetic operations and print the result in the web browser.
console.warn("\nAdvanced-Exercise 1:\n ");

let a = 7;
let b = 14;
let c = "21";
let d = '36';
let e = 42;

// the plus (+) symbol can also mean concatination (glue two strings together)
// thats why we have to convert possible number strings to be numbers.
// you'll see that we dont have to do that for other operations (although recommended)
let sum = Number(a) + Number(b) + Number(c) + Number(d) + Number(e);
console.log(sum);

let f = '1';
let g = 15;
let h = 8;
let i = "1";

let product = f * g * h * i;
console.log(product);

console.log(sum / product);


// Exercise 2
// ---------------
// let people = [“Greg”, “Mary”, “Devon”,”James”];
// 1.     Remove "Greg" from the array.
// 2.     Add "Matt" to the front of the array.
// 3.     Remove “James” from the array.
// 4.     Add your name to the end of the array.
// 5.     Make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
// 6.     Using the indexOf method, find the index of where "Mary" is located.
// 7.     Using the indexOf method, find the index of where "Foo" is located (this should return -1).
// 8.     Redefine the people variable with the values you started with.
// 9.     Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Anna". 
// Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Anna", "James"].
console.warn("\nAdvanced-Exercise 2:\n ");

let people = ["Greg", "Mary", "Devon", "James"];

people.shift();
console.log(people);
people.unshift("Matt");
console.log(people);
people.pop();
console.log(people);
people.push("MJ");
console.log(people);

const copy = people.slice(2);
console.log(copy);

console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));

people = ["Greg", "Mary", "Devon", "James"];
console.log(people);
people.splice(2, 1, "Elizabeth", "Anna");
console.log(people);


// Exercise 3
// From the following multidimensional Array:
// [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ]
// Write a program to find and display the numbers 11, 25, 17, 27, and 0 in the console.
console.warn("\nAdvanced-Exercise 3:\n ");

const numberArr = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];
console.log(numberArr[1][1]);
console.log(numberArr[4][2]);
console.log(numberArr[5][3]);
console.log(numberArr[2][3]);
console.log(numberArr[2][1]);