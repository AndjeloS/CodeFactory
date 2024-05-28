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