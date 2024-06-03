// Exercise 1
// --------------
// To solve this task, you will need two arrays: Student and MathGrades.In
// Students, store the names of students (e.g., ["John", "Jane"]).
// Correspondingly, in MathGrades, store their math grades (ranging from 0 to
// 100) at the same indexes as their names. For example:

// Students = [“John”, “Jane”]
// MathGrades = [70, 85]

// Next, use a variable to store a student's name. This name should be
// compared against the names in the Students array. When a match is found,
// display the student's name and their math grade. The output should be
// formatted nicely, like so:

// "John has reached 70 points in Math this season."

// Furthermore the grades should also be checked and change the color
// based on the following conditions

// Less than 60: Red
// Between 60 and 70: Yellow
// Over 70: Green
// Exactly 100: Blue

// Hint: Use the prompt() function to create an alert window where the user
// can enter a name. This name can then be stored in a variable. For
// example:

// let result = prompt("type your name");


const out = document.getElementById("grade");

const students = ["john", "jane", "mj"];
const grades = [24,73,100];

let student = prompt("(challenge ex.) Enter a name:\n(john, jane, mj)").toLowerCase();

if(students.indexOf(student) != -1){
    let grade = grades[students.indexOf(student)];
    let color = "blue"; // default

    if(grade < 60) color = "red";
    else if(grade < 70) color = "yellow";
    else if(grade < 100) color = "green";
    
    out.innerHTML = `${student} has reached <span style='color: ${color};'>${grades[students.indexOf(student)]}</span> points in Math this season.`;
}
else {
    out.innerHTML = "No such student found.";
}