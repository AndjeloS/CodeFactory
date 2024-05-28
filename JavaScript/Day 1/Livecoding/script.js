// DATA TYPES

// string "" ''
let first_name = "Andjelo";
let last_name = "Saltin";
console.log(first_name + last_name);


// number
let number = 2;
console.log(number);

// boolean true or false
console.log(5 > 3);
let gym = false;
console.log(gym);

// undefined (null), used rarly
let age;
console.log(age);

//condition == <= >=
let sum = 0;
sum = 1 + 4 + 3; //8
console.log(sum);


let firstName = "Andjelo";
let lastName = "Saltin";

// In the console i want to see, Hello, my name is firstName lastName
console.log("Hello, my name is " + firstName + " " + lastName);

//better way
console.log(`Hello, my name is ${firstName} ${lastName}`);



//METHODS USED FOR STRINGS

//length
console.log(firstName.length);
//can be user for validation

//split (will cut your string and convert it to an array)
let splitText = "I am a web developer";
console.log(splitText.split(" "));


//join convert the arry in a string
let joinText = "I$am$a$web$developer";
console.log(joinText.split("$").join(" "));

//toUpperCase(), toLowerCase()
// my name is andjelo
let nameText = "My Name iS andJelo"
console.log(nameText.toUpperCase());
console.log(nameText.toLocaleLowerCase());

//substring()
let longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam esse nesciunt sed repellat accusantium eligendi vero. Necessitatibus doloribus autem sint at quidem numquam in iste, quibusdam nihil animi non sunt!";
console.log(longText);
console.log(longText.substring(0, 50));
console.log(longText.substring(0, 1).toUpperCase());


//ARAYS

//Arrays multiple values
// let arrayNumber = [1, 2, 30, 77, -10, 0, 0.15];
// console.log(arrayNumber);

// let students = ["John", "Mary", "Paul", "Kate", "Aci", "Martin"];
// let randomArray = ["John", 12, false, null]
// console.log(students[students.length - 1]);
// console.log(students[5]);

//multi dimensional array
let arrayNumber = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(arrayNumber[2][1]);
console.log(arrayNumber[1][2], arrayNumber[0][0]);

let names = ["Test 1", "Test 2", "Test 3", "Test 4"]

//push adds element to array
names.push("Test 5")
console.log(names);

//pop will remove last element (not really used)
// names.pop()
// console.log(names);

//splice (index,  how many elements you want to remove)
names.splice(1, 2);
console.log(names);

// names.splice(1, 2, "Test 2", "Test 3", "Test 44", "Test 55");
// console.log(names);

//sort()
let students = ["John", "Mary", "Paul", "Kate", "Aci", "Martin"];
console.log(students.sort());
console.log(students);