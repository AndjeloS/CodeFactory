// Capitalize
// ---------------
// Write a JavaScript function to capitalize only the first letter of any given string while leaving the rest of the string unchanged.
// This function will take just one parameter: a string.
// For example, if the input is 'i am a web developer', the function should transform and return the string as 'I am a web developer'.
// Hint: To accomplish this, you might want to explore the use of the JavaScript String charAt() method, along with other string manipulation techniques.
console.warn("\nIntermediate-Exercise Capitalize:\n ");

const capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(capitalize("i am a web developer"));

// Average Grade
// ---------------
// Create a function that will accept 3 parameters, representing grades in Math, Physics, and English.
// Your task is to ensure that these parameters are numbers, then perform the calculations to find the sum and average of these grades.
// Finally, the function should display these values. For example, if the input grades are 3 (Math), 4 (Physics), and 5 (English), the function should output: Sum: 12 Average: 4
console.warn("\nIntermediate-Exercise Average Grade:\n ");

function average(num1, num2, num3) {
  return (Number(num1) + Number(num2) + Number(num3)) / 3;
  // return (Number(num1) + Number(num2) + Number(num3)) / arguments.length;
}

console.log(average(1, 2, 3));
