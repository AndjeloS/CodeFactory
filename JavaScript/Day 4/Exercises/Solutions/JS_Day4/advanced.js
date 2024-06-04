// Exercise 1
// --------------
// Create a circle and center it on the page. 
// This circle will respond to different mouse events by displaying messages and changing the background color.

// ● Hover: Display a message below the circle that reads "You are in the
// circle" when the mouse is over it.

// ● Mouse Leave: Show a message that says "You are outside of the
// circle" when the mouse leaves the circle

// ● Click: Change the webpage's background color to gray upon a single
// mouse click on the circle.

// ● Double-Click: Change the webpage's background color to blue when
// you double-click on the circle.


console.warn("\nAdvanced-Exercise 1:\n ");

const circle = document.querySelector("#circle");
const circleText = document.querySelector("#circle-text");

circle.addEventListener("mouseover", ()=>{
    circleText.innerHTML = "you are in the circle";
})

circle.addEventListener("mouseleave", ()=>{
    circleText.innerHTML = "you are outside of the circle";
})

circle.addEventListener("click", ()=>{
    circle.style.backgroundColor = "grey";
})

circle.addEventListener("dblclick", ()=>{
    circle.style.backgroundColor = "blue";
})