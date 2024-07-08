//creates the task list cards and puts it in the html file
for (let val of taskList) {
  document.getElementById("taskList").innerHTML += `
    <div>
    <div id="card" class="card mt-3 ms-5 card-style p-3">
    <div class="card-header d-flex justify-content-between">
        <div>
            <span class="badge text-light bg-info p-2">Task</span>
        </div>
        <div>
            <img src="images/bookmark.png" id="card-head-img" alt="">
            <img src="images/more.png" id="card-head-img" alt="">
        </div>
    </div>
    
    <div class="card-body">
    <img src="${val.img}" id="card-img" class="card-img-top" alt="...">
        <h5 class="card-title text-center mt-2">${val.name}</h5>
        <p class="card-text card-info text-center caveat">${val.info}</p>
        <p class="card-text">
        <img src="images/warning.png" alt="...">
            Priority level: <a class="badge btn btn-success priorityBtn2"><span class="priority-number2 value">${val.priority} </span></a>
        </p>
        <p class="card-text">
        <img src="images/calendar.png" alt="...">
            Deadline: 27.01.2022</a>
        </p>
        
        <div>

        </div>
        <div class="d-flex justify-content-end">
            <a href="#details" class="btn btn-danger mybtn me-2"><img src="images/trash.png" alt=""> Delete</a>
            <a href="#details" class="btn btn-success mybtn"><img src="images/check.png" alt=""> Done</a>
        </div>
    </div>
  </div>
  </div>
  `;
}

//function to increase the priority of the cards
let btns2 = document.querySelectorAll(".priorityBtn2");
btns2.forEach((element, index) => {
  element.addEventListener("click", function () {
    if (taskList[index].priority < 5) {
      taskList[index].priority++;
      document.querySelectorAll(".priority-number2")[index].innerText =
        taskList[index].priority;

      //changes the button bg-color depending of number of priority
      //0-1=btn-success 2-3=btn-warning  4-5=btn-dangerif (shopList[index].priority <= 1) {
      if (taskList[index].priority <= 1) {
        document
          .getElementsByClassName("priorityBtn2")
          [index].classList.add("btn-success");
      } else if (taskList[index].priority <= 3) {
        document
          .getElementsByClassName("priorityBtn2")
          [index].classList.remove("btn-success");
        document
          .getElementsByClassName("priorityBtn2")
          [index].classList.add("btn-warning");
      } else {
        document
          .getElementsByClassName("priorityBtn2")
          [index].classList.remove("btn-warning");
        document
          .getElementsByClassName("priorityBtn2")
          [index].classList.add("btn-danger");
      }
    }
  });
});

console.log(window.innerWidth); //to see the widht the display has in the console

//switches the footer depending on the width of the display
if (window.innerWidth > 794) {
  document.getElementById("footer").innerHTML = `
    <div class="footer-head">
            <div class="socialmedia">
                <a href="#"><img src="images/facebook.png" alt=""></a>
                <p></p>
                <a href="#"><img src="images/instagram.png" alt=""></a>
                <p></p>
                <a href="#"><img src="images/twitter.png" alt=""></a>
            </div>
            
            <div class="subscribe input-group mt-4">
                <p class="text-light fs-5">Sign up for our newsletter</p>
                <div id="signup">
                    <input type="email" class="form-control"  placeholder="Enter your email">
                </div>
                <div class="input-group-btn">
                <button class="btn bg-dark-subtle" type="submit">Subscribe Now</button>
                </div>
            </div>
        </div>

        <div class="footer-bottom fs-6">
            <p class="text-light"><img src="images/copyright.png" alt="copyright"> 2024 copyright Andjelo SALTIN</p>
        </div>
        `;
} else if (window.innerWidth < 794) {
  document.getElementById("footer").innerHTML += `
    <div class="footer-head">
            <div class="socialmedia">
                <a href="#"><img src="images/facebook.png" alt=""></a>
                <p></p>
                <a href="#"><img src="images/instagram.png" alt=""></a>
                <p></p>
                <a href="#"><img src="images/twitter.png" alt=""></a>
            </div>
            

            <details class="mt-4 text-center">
                <summary class="text-light fs-5">Sign up for our newsletter</summary>
                <br>
                <div class="text-center">
                <input type="email" id="signup" class="form-control"  placeholder="Enter your email">
                </div>
                <span class="input-group-btn">
                <br>
                <button class="btn bg-dark-subtle" type="submit">Subscribe Now</button>
                </span>
            </details>
        </div>

        <div class="footer-bottom fs-6">
            <p class="text-light"><img src="images/copyright.png" alt="copyright"> 2024 copyright: Andjelo SALTIN</p>
        </div>
        `;
}
