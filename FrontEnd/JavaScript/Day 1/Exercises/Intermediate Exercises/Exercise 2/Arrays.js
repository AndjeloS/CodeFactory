let firstArray = ['apple', 'banana', 'kiwi', 'mango', 'pear'];

firstArray.push("orange");
console.log(firstArray);
//push - adds element at the end

firstArray.splice(0, 1);
console.log(firstArray);
//splice - adds and/or removes array elements

firstArray.pop();
console.log(firstArray);
//pop - removes elements at the end

firstArray.fill("strawberry", 0, 1);
console.log(firstArray);
//fill -  fills specified elements in an array with a value

//-----------------------------------

let secondArray = ['monkey', 'horse', 'dog', 'elephant', 'giraffe'];

secondArray.shift();
console.log(secondArray);
//shift - removes elements at the beginning

secondArray.unshift("cat");
console.log(secondArray);
//unshift - adds a elements at the beginning

secondArray.splice(4, 1);
console.log(secondArray);

secondArray.push("tiger")
console.log(secondArray);

secondArray.sort();
secondArray.reverse();
//reverse - reverses the order of the elements in an array

console.log(secondArray);