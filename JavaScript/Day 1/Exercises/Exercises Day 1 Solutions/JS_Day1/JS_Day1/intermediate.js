// Exercise 1
// --------------
// Write a JavaScript program that will sort the following values alphabetically: 
// Tesla, Audi, Renault, Volvo, Mazda, Fiat and Ferrari.
// (Use an array to contain these values)
console.warn("\nIntermediate-Exercise 1:\n ");

const carArr = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
console.log(carArr.sort());

// Exercise 2
// --------------
// Create a program where:
// 1. The first array contains the following values:
// 'apple', 'banana', 'kiwi', 'mango', and 'pear'
// Using different methods, the output should be as follows:
// 'apple', 'banana', 'kiwi', 'mango', 'pear’, ‘orange’
// 'banana', 'kiwi', 'mango', 'pear’, ‘orange’
// 'apple', 'banana', 'kiwi', 'mango', 'pear’
// strawberry, 'banana', 'kiwi', 'mango', 'pear’
// (Each statement should be outputted on a separate line.)
// 2. The second array contains the following values:
// 'monkey', 'horse', 'dog', 'elephant', and 'giraffe'
// Using different methods, the output should be as follows:
// 'horse', 'dog', 'elephant', 'giraffe'
// 'cat', 'horse', 'dog', 'elephant', 'giraffe'
// 'cat', 'horse', 'dog', 'elephant'
// 'cat', 'horse', 'dog', 'elephant', 'tiger'
// Sort this array in reverse alphabetical order and display the sorted array in the console
console.warn("\nIntermediate-Exercise 2:\n ");

const fruitArr = ["apple", "banana", "kiwi",'mango','pear'];
console.log(fruitArr);

fruitArr.push("orange");
console.log(fruitArr);
fruitArr.shift();
console.log(fruitArr);
fruitArr.unshift("apple");
fruitArr.pop();
console.log(fruitArr);
fruitArr.shift();
fruitArr.unshift("strawberry");
console.log(fruitArr);



const animalArr = ["monkey", "horse", "dog",'elephant','giraffe'];
console.log(animalArr);

animalArr.shift();
console.log(animalArr);

animalArr.unshift("cat");
console.log(animalArr);

animalArr.pop();
console.log(animalArr);

animalArr.push('tiger');
console.log(animalArr);

animalArr.reverse();
console.log(animalArr);

// Exercise 3
// --------------
// Create a variable containing the following string:
// "mango/cherries/kiwi/grapes/pear/peach/orange/lemon"
// Create a program that will output each fruit on a separate line in the web browser:
console.warn("\nIntermediate-Exercise 3:\n ");

let fruits = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
console.log(fruits.replaceAll("/", "\n"));