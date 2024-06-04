document.getElementById("btn").addEventListener("click", createTask);

function createTask() {
  let task = document.getElementById("task").value;
  document.getElementById(
    "result"
  ).innerHTML += `<li class='todo'>${task}</li>`;

  // add events
  addEventToEachLiElement();
}

function addEventToEachLiElement() {
  let lis = document.querySelectorAll("li.todo");
  // selecting all li's with the class todo
  lis.forEach((element) => {
    element.addEventListener("click", function () {
      this.remove();
      // code here
      // element
    });
  });
}
// you can't add event to more than one element
// let allLists = document.querySelectorAll(".list");
// allLists.forEach((element) => {
//   element.addEventListener("click", function () {
//     // logic

//     this.remove();
//   });
// });
