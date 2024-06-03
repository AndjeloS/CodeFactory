// Exercise 1
// --------------
// Create a JavaScript program that will calculate and display the average grade for each student in the class.
// Here are the points for each student:
// Martin = 76,64,81,57,94
// Thomas = 85,49,81,72,55
// Klaus = 65,91,84,67,85
// Maria = 93,70,81,64,84
// David = 81,99,71,100,69
// Based on their average score, output the grade, according to this scale:
//  Below 60 = F
// < Below 60 = F
// Below 80 = C
// Below 90 = B
// Below 100 = A
// Finally, calculate the class average and output it (e.g. if the class average is 74 points, their average grade will be C).
console.warn("\nIntermediate-Exercise 1:\n ");

const studentArr = [
    [76,64,81,57,94],
    [85,49,81,72,55],
    [65,91,84,67,85],
    [93,70,81,64,84],
    [81,99,71,100,69]
];

function avgArr(arr){
    let max = 0;
    arr.forEach(num => {
        max += num;
    });
    let avg = max / arr.length;
    return avg;
}

function gradeToLetter(grade){
    let letter = "";
    if(grade < 60) letter = "F"
    else if(grade < 70) letter = "D"
    else if(grade < 80) letter = "C"
    else if(grade < 90) letter = "B"
    else letter = "A"

    return letter;
}

let classAvg = 0;
studentArr.forEach(arr => {
    console.log(gradeToLetter(avgArr(arr)));
    classAvg += avgArr(arr);
})
classAvg /= studentArr.length;

console.log("Class avg: " + gradeToLetter(classAvg));


// Exercise 2
// --------------
// Create a JavaScript program which iterates the integers from 1 to 100. 
// For multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".
// e.g. 
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
console.warn("\nIntermediate-Exercise 2:\n ");

// there are maaany solutions for fizzbuzz
for(let i = 1; i <= 100; i++){
    let out = "";
    if(0 == i % 3) out += "Fizz";
    if(0 == i % 5) out += "Buzz";
    if("" == out) out = i;
    console.log(out);
}

// Exercise 3
// --------------
// Create a program that generates the classic pyramid pattern, using a loop.
// The pyramid should be constructed with asterisks (*), where each new line
// of the pyramid has one more asterisk than the line before it, starting from
// one asterisk at the top. Aim to replace the following pattern:
// *
// **
// ***
// ****
// *****
// ******
console.warn("\nIntermediate-Exercise 3:\n ");

for(let i = 1; i < 10; i++){
    console.log("*".repeat(i));
}