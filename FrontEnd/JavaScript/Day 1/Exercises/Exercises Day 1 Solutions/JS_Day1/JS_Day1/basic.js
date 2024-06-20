// Exercise 1 (within the body tag in index.html)

// Exercise 2
// --------------
// Create an HTML document and link it to an external JavaScript file.  
// It has to print the following message in the console "Hi my name is Martin" 
// Modify your JavaScript code by creating a variable named name and assign your own name to it.
// Update the console log statement to use this name variable, so it now displays "Hi, my name is [Your Name]". 
// Create another variable named age and set it to your age.
// Modify the console log statement that uses both the name and age variables to display the message "Hi, my name is [Your Name] and I am [Your Age] years old."
console.warn("\nBasic-Exercise 2:\n ");

console.log("Hi my name is Martin");
let myName = "John";
console.log("Hi, my name is "+ myName);
let age = 25;
console.log("Hi, my name is "+ myName +" and I am "+ age + " years old");



// Exercise 3
// --------------
// Create an array called players. Add the following names as values to it: 
// Martin, Thomas, Peter, Mathias and Niki. 
// Output only the third player in the console.  The text should be: 
// "The most valuable player of the match is <third_player_name>".
console.warn("\nBasic-Exercise 3:\n ");

const players = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];
console.log(`The most valuable player of the match is ${players[2]}`);
// the third player is on index 2, hence array[2] and not [3]