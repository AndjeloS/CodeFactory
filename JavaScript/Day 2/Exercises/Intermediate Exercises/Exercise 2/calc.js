function Grade(math, physics, english) {
    let sum = math + physics + english;
    let avg = sum / 3;

    return `Sum: ${sum} \n Average: ${avg}`
}

console.log(
    Grade(3, 4, 5)
);