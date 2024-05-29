function avgGrade(math, physics, english) {
    let sum = math + physics + english;
    let avg = sum / 3;
    if (sum != Number || avg != Number) {
        console.log("Please enter only numbers!");
    } else {
        return `Sum: ${sum} \n Average: ${avg}`
    }

}

console.log(
    avgGrade(3, 4, 5)
);