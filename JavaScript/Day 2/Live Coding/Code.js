let frstname = "Mary";

//== comparing values if the are the same (= set a value in a variable)
// != not same values
// >, <, >=, <=
if (frstname == "John") {
    console.log("Hello ADMIN!");
} else {
    console.log("Hello User!");
}

//2nd example

let number = 50;

if (number < 60) { // number <=59    // number >0 && number <=59
    console.log("grade: red");
} else if (number < 80) { // number >59 && number < 80
    console.log("grade: yellow");
} else {
    console.log("grade: green");
}



console.log(55 < 60); // true or false

switch (true) {
    case number < 60:
        console.log("grade: red");
        break;

    case number < 80:
        console.log("grade: yellow");
        break;

    default:
        console.log("grade: green");
}

// let newname = prompt("Please type your name!")

// switch (newname) {
//     case "John":
//         console.log("Hello Admin!");
//         break;

//     default:
//         console.log("Hello User!");
// }



// let exam1John = 35;
// let exam2John = 55;
// let exam3John = 75;
// let exam4John = 40;
// let exam5John = 30;
// let exam6John = 75;

// let sumJohn = exam1John + exam2John + exam3John + exam4John + exam5John + exam6John;

// let avgJohn = sumJohn / 6;

// let exam1Tom = 20;
// let exam2Tom = 30;
// let exam3Tom = 80;
// let exam4Tom = 40;
// let exam5Tom = 30;
// let exam6Tom = 75;

// let sumTom = exam1Tom + exam2Tom + exam3Tom + exam4Tom + exam5Tom + exam6John;

// let avgTom = sumTom / 6;

// input:6      output avg:1

function calculateAvgForStudent(exam1, exam2, exam3, exam4, exam5, exam6) {
    let sum = exam1 + exam2 + exam3 + exam4 + exam5 + exam6;
    let avg = sum / 6;
    console.log(avg); // outpuz in console the avg
    return avg//save the result of the variable
}//dynamic template

let avgJohn = calculateAvgForStudent(40, 30, 50, 60, 40, 50);
console.log(avgJohn);

// var a =13 //iz is noz inside any block - GLOBAL
let a = 13; //GLOBAL
