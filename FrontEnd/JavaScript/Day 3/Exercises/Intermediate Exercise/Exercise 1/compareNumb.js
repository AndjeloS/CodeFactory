let martin = [76, 64, 81, 57, 94]
let thomas = [85, 49, 81, 72, 55]
let klaus = [65, 91, 84, 67, 85]
let maria = [93, 70, 81, 64, 84]
let david = [81, 99, 71, 100, 69]

function getAverage(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    let avg = total / array.length;

    let grade = "0";

    if (avg < 60) {
        grade = "F";
    } else if (avg < 70) {
        grade = "D";
    } else if (avg < 80) {
        grade = "C";
    } else if (avg < 90) {
        grade = "B";
    } else {
        grade = "A";
    }
}

function classAverage(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    let avg = total / array.length;
}
let martinScore = getAverage(martin);
let thomasScore = getAverage(thomas);
let klausScore = getAverage(klaus);
let mariaScore = getAverage(maria);
let davidScore = getAverage(david);
let classScore = (
    (classAverage(martin) + classAverage(thomas) + classAverage(klaus) + classAverage(maria) + classAverage(david)) / 5);

console.log(martinScore);

// document.getElementById(martin).innerHTML = `<p>Martin score is ${martinScore}</p>`;
// document.getElementById(thomas).innerHTML = `<p>Thomas score is ${thomasScore}</p>`;
// document.getElementById(klaus).innerHTML = `<p>Klaus score is ${klausScore}</p>`;
// document.getElementById(maria).innerHTML = `<p>Maria score is ${mariaScore}</p>`;
// document.getElementById(david).innerHTML = `<p>David score is ${davidScore}</p>`;
// document.getElementById(avgClass).innerHTML = `<p>Class score is ${classScore}</p>`;