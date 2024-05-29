// Exercise 1
// ---------------
// Create a program that generates a random temperature each time it runs, within the range of-5°C to 25°C.
// Your task is to make the program sort this temperature into one of two categories: either 'cold' or 'moderate'.
// Here's how it should work:
// If the temperature is between-5°C and 10°C, the program should output: "The weather is cold." ● If the temperature is above 10°C, the program should output: "The weather is moderate."

// Hint: To get that random temperature, use Math.random(). This sneaky little function will give you a random decimal between 0 and just under 1,so any value between these two numbers (for example 0,315 , 0,91239 0,1).
// Want to stretch those numbers to fit your range? Multiply it by the scale of your temperature range. For instance, multiplying by 10 gets you a number between 0 and 10. Get creative with it to fit your-5°C to 25°C range!

console.warn("\nBasic-Exercise 1:\n ");

let randomNum = Math.floor(Math.random() * (25 - -5) + -5);
if (randomNum < 10) {
  console.log("The weather is cold");
} else {
  console.log("The weather is moderate");
}

// Exercise 2
// Create an array named favoriteFoods which contains the food items like "pizza", “hamburger”, "ice cream", “chocolate”.
// Next, write a function named randomFood. The function should be able to choose and return randomly
// a favorite food in your favoriteFoods array.

console.warn("\nBasic-Exercise 2:\n ");

const foodArr = ["pizza", "hamburger", "ice cream", "chocolate"];

function randomFood(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

console.log(randomFood(foodArr));

// Exercise 3
// Write a function named crystalGazer() that takes four arguments: number of children,
// partner's name, geographic location, and job title. Once the user passes the four arguments
// the program should output the following message on screen:
// You will be a job_title in location and married to partners_name with number_childrens.
console.warn("\nBasic-Exercise 3:\n ");

function crystalGazer(num_children, partner, location, title) {
  return `You will be a ${title} in ${location} and married to ${partner} with ${num_children} children.`;
}

console.log(crystalGazer(2, "Maria", "Vienna", "WebDev"));

// Exercise 4
// Write a function called ageCalculator() that takes two arguments: birth year and current year.
// Using these arguments, your function should calculate and return two potential ages.
//  This is because without knowing the exact birth month, there are two possible ages a person could be during a given year.
// The function's output should output:
// "You are either [Age Option 1] or [Age Option 2]."
// For instance, if someone was born in 1993 and the current year is 2024, the function should output: "You are either 30 or 31."
console.warn("\nBasic-Exercise 4:\n ");

function ageCalculator(birth_year, current_year) {
  return `You are either ${current_year - birth_year} or ${
    current_year - birth_year - 1
  }`;
}

console.log(ageCalculator(1992, 2023));

// Exercise 5
// Let's level up your previous exercise with a bit of automation! The goal remains the same- to create a function called ageCalculator()- but with a twist.
// This time, instead of passing two parameters, you'll only pass one: the birth year.
// The function should automatically fetch the current year using JavaScript's built-in Date methods.
// Remember, you still need to provide two possible ages due to the unknown birth month. You should get the following results: You are either 30 or 31
console.warn("\nBasic-Exercise 5:\n ");

function ageCalculator(birth_year) {
  let current_year = new Date().getFullYear();
  return `You are either ${current_year - birth_year} or ${
    current_year - birth_year - 1
  }`;
}

console.log(ageCalculator(1992));

// Exercise 6
// Create a JavaScript function that converts degrees to radians. The function accepts one parameter,
// the degrees, and outputs the radians based on them. The formula for converting degrees to radians is: "degrees * (pi/180)"
// For example, if you input 90 degrees into your function, it should return the result as approximately 1.57079 radians.
console.warn("\nBasic-Exercise 6:\n ");

function degToRad(deg) {
  return deg * (Math.PI / 180);
}

console.log(degToRad(30));

// Exercise 7
// Create a function that will calculate both the area and the volume of a box.
// This function should accept three parameters: width, height, and depth of the box.
// Using these, it should compute:
// Thearea of the box using the formula: area = width x height
// The volume of the box using the formula: volume = width x height x depth
// The function should then return both the area and volume in a readable format.
// For instance, if you input 2 for width, 7 for height, and 5 for depth, the function should return The area of the box is: 14 The volume of the box is: 70
console.warn("\nBasic-Exercise 7:\n ");

function boxDimensions(width, height, depth) {
  let area = width * height;
  let volume = width * height * depth;

  return [area, volume];
}

console.log(boxDimensions(10, 10, 10)[0]);
console.log(boxDimensions(10, 10, 10)[1]);
