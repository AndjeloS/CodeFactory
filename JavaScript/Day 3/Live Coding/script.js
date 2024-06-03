// print in the cosnole 1 -> 1000

// for loop, for numbers it can work with arrays

// for (let i = 1; i <= 1000; i++) {
//   // code
//   console.log(i);
// }

/*
i = 1        1 <= 1000   true    console.log(1)
i++    i = i + 1
i = 2        2 <= 1000   true    2

i = 3        3 <= 1000  true     3

i = 999     999 <= 1000   true   999
i = 1000    1000<=1000   true    1000

i = 1001    1001 <=1000   false
*/

let students = ["John", "Mary", "Tom", "Nico", "Johannes", "Test"];

//  0 -> 3

// for (let i = 0; i < students.length; i++) {
//   // i = i + 2   i+=2

//   console.log(students[i]);
// }

// for (let index = 0; index < array.length; index++) {

// }

// for of, works only with arrays, it will access the values

// for (let val of students) {
//   console.log(val);
// }

// // for in, works only with arrays, it can access the index and the value

// for (let index in students) {
//   console.log(index, students[index]);
// }

// foreach, works only with arrays, it can access the values and the indexes
students.forEach(function (val, i) {
    // first parameter whatever name is, will access the values, if you pass another parameter you access the index
    console.log(val, i);
});

students.forEach((x, y) => {
    console.log(x, y);
});

students.forEach((element, i) => {
    console.log(element, i);
});

/* standard for loop, while, do while, for of, for in, foreach */

// while is exactly for loop

// print in the cosnole 1 -> 1000

// let i = 1;
// while (i <= 1000) {
//   console.log(i);
//   i++;
// }
// // foreach, for in, for of

// // array of numbers, pick up the highest number in an array, without any builtin function max(), sort()

// let numbers = [-1, 5, 60, 3, 100, 30];

// // array =  for of    for in   foreach   standard for loop

// let max = numbers[0];

// for (let val of numbers) {
//   if (val > max) {
//     max = val;
//   }
// }

// console.log(max);

/*
  max = -1

  if(-1 > -1) false

  if(5 > -1)  true   max = 5
  if(60 > 5)   true   max = 60
  if(3 > 60)  false
  if(100 > 60)  true  max = 100
  if(30 > 100) false
  
*/

/*
  * {

  }
  #demo {
    
  }
  p#demo
*/

/* selector.prop */
document.getElementById("demo").innerHTML = "<i>Hello from JavaScript</i>";
// document.getElementById("demo").innerText = "<i>Hello from JavaScript</i>";

// Id unique selector

document.querySelector("p#demo").innerHTML = "Query Selector"; // select one element only

/* selecting a class, select all elements with the class that you want and it will return an array */
document.getElementsByClassName("heading")[0].innerHTML = "Hello Serri";

// document.querySelector(".heading")

/* second way */
document.querySelectorAll(".heading")[1].innerHTML = "Test";

document.querySelector("p#demo").style.backgroundColor = "red";