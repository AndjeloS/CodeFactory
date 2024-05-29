// let fname = prompt("Please type your name");
// let a = 30;
// let b = 40;
// // ==    !=   // ==   ===
// // >   <   >=    <=
// if (fname == "John" || fname == "Serri") {
//   console.log("Hello Admin");
// } else {
//   console.log("Hello User");
// }
/* 2nd example */
// let number = 50;
// if (number < 60) {
//   // number <= 59    // number > 0 &&  number <= 59  // 60 >= number && number < 80
//   console.log("grade: red");
// } else if (number < 80) {
//   // number > 59 && number < 80                     // 55
//   console.log("grade: yellow");
// } else {
//   console.log("grade: green");
// }
// let a = 30;
// let b = "30";
// if (a === b) {
//   // not only the value but the type
//   // checking value without the type
//   console.log("they are the same");
// }
// let fname = prompt("Please type your name!");
// switch (fname) {
//   case "John":
//     console.log("Hello Admin");
//     break;
//   default:
//     console.log("Hello User");
// }
// let number = 50;
// // &&  ||
// switch (true) {
//   case number < 60:
//     console.log("grade: red");
//     break;
//   case number < 80:
//     console.log("grade: yellow");
//     break;
//   default:
//     console.log("grade: green");
// }
// let exam1John = 35;
// let exam2John = 55;
// let exam3John = 75;
// let exam4John = 40;
// let exam5John = 30;
// let exam6John = 75;
// let sumJohn =
//   exam1John + exam2John + exam3John + exam4John + exam5John + exam6John;
// let avgJohn = sumJohn / 6;
// let exam1Tom = 20;
// let exam2Tom = 30;
// let exam3Tom = 80;
// let exam4Tom = 40;
// let exam5Tom = 30;
// let exam6Tom = 75;
// let sumTom = exam1Tom + exam2Tom + exam3Tom + exam4Tom + exam5Tom + exam6Tom;
// let avgTom = sumTom / 6;
// inputs 6     output avg 1
// function calculateAvgForStudent(exam1, exam2, exam3, exam4, exam5, exam6) {
//   let sum = exam1 + exam2 + exam3 + exam4 + exam5 + exam6;
//   let avg = sum / 6;
//   // output in console or browser
//   return avg; // save the result in a variable
//   // return is the last line in the function
// }
// let avgJohn = calculateAvgForStudent(40, 30, 50, 60, 40, 51);
// console.log(avgJohn);
// document.write(avgJohn);
// global and local scope
// var let const
// var a = 13; // it is not inside any block - GLOBAL
// let a = 13; // GLOBAL
// {
//   let a = 30; // let create exists only inside the block
//   console.log(a);
// }
// console.log(a);
// let a = 12;
// {
//   let a = 30;
// }
// console.log(a);
// let b = 12;
// b = 30; // global
// const a = 12; // globally
// const fname = "serri out";
// {
//   const fname = "serri in";
// }
// console.log(fname);
// // const hostName = "127.0.0.1:3000";
// // const pi = 3.1475867;
// console.log(a, b);
// function createProductCard(name, price, picture) {
//   return `<div class="card" style="width: 18rem;">
//     <img src="${picture}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${name}</h5>
//       <p class="card-text">${price}</p>
//       <a href="#" class="btn btn-primary">Add to cart</a>
//     </div>
//   </div>`;
// }
// document.write(
//   createProductCard(
//     "Hat",
//     30.25,
//     "https://media.istockphoto.com/id/1453988945/de/foto/gelber-eimerhut-isoliert-auf-wei%C3%9F.jpg?s=2048x2048&w=is&k=20&c=nuRO3ylPLnhfkR0u9bNNCGR79c6t8RFbwJTV-mPjkZc="
//   )
// );
// document.write(
//   createProductCard(
//     "T shirt",
//     20,
//     "https://media.istockphoto.com/id/1453988945/de/foto/gelber-eimerhut-isoliert-auf-wei%C3%9F.jpg?s=2048x2048&w=is&k=20&c=nuRO3ylPLnhfkR0u9bNNCGR79c6t8RFbwJTV-mPjkZc="
//   )
// );
// function calculateAge(dateOfBirth, currectYear, name) {
//   let age = currectYear - dateOfBirth;
//   return [age, name]; // how to return two values
// }
// console.log(
//   calculateAge(1990, 2024, "Serri")[0],
//   calculateAge(1990, 2024, "Serri")[1]
// ); // loops
// // ES6
// const calculateAge2 = (dateOfBirth, currectYear, name) => {
//   let age = currectYear - dateOfBirth;
//   return [age, name]; // how to return two values
// };
// function name(){} ==  name = ()=>{}
// built in objects
// Math
// let random = Math.random() * 31; // random number between 0 and 30.8163982635
// random = Math.floor(random);
// // Math.floor()
// console.log(random);
// -5    25
let random = Math.random() * 31 - 5; //  -5   25
random = Math.floor(random);
console.log(random);
// Date
let date = new Date();
console.log(date.toDateString());