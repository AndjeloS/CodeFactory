// document.getElementById("heading").onclick = function () {
//   console.log("clicked");
//   let a = 12;
//   let b = 30;
//   console.log(a + b);
// };

// function printInConsole() {
//   console.log("Clicked");
//   let a = 12;
//   let b = 30;
//   console.log(a + b);
// }

// document.getElementById("heading").onclick = printInConsole;

// document.getElementById("heading").addEventListener("click", function () {
//   printInConsole();
//   console.log("Hello User");
// });

// #heading

// function addingClassToElement() {
//   document.getElementById("heading").setAttribute("class", "active");
// }

// document
//   .getElementById("heading")
//   .addEventListener("click", addingClassToElement);

document.getElementById("create").addEventListener("click", function () {
  let fname = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let job = document.getElementById("job").value;
  // length of the first name is less than 3, fname in red, if more, green
  let color = "green";
  if (fname.length < 3) {
    color = "red";
  }

  document.getElementById(
    "result"
  ).innerHTML = `my name is <span id='color'>${fname}</span> and i am ${age} years old, and i work as ${job}`;
  document.getElementById("color").style.color = color;
});
