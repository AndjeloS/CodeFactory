// Exercise Time Convert
// ---------------
// Create a JavaScript function that converts a given number of minutes into hours and minutes.
// The function should accept one parameter only– the total number of minutes.
// The goal is for the function to calculate and return a statement indicating how many hours and minutes those total minutes equate to.
// For instance, if the function is called with 200 minutes as the input, it should return: "200 minutes = 3 hour(s) and 20 minute(s)."

console.warn("\nAdvanced-Exercise Time Convert:\n ");

function convertMinutes(min) {
  let hours = Math.floor(min / 60);
  let minutes = min % 60;
  return `${min} minutes = ${hours} hour(s) and ${minutes} minute(s)`;
}

console.log(convertMinutes(200));
