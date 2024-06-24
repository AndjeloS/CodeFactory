// Exercise 1
// --------------
// Create a Javascript program that will make the Santa Clauses disappear on a click 
// from the following 3x3 matrix. Each click should only remove the specific Santa that was clicked, leaving the rest of the images unchanged.

console.warn("\nIntermediate-Exercise 1:\n ");

// lets start by getting all the santas by selecting them by class
const santas = document.querySelectorAll(".santa");

// loop through all of them
santas.forEach(santa=>{
    // give each an event listener for being clicked
    santa.addEventListener("click", function(){
        // we will make them in-/visible by using the opacity css property
        // however, there are lots of possible solutions
        // the getComputedStyle method returns all the currently applied styles for an element
        // note that here we use the "this" keyword which will point to the element that invoked (called) 
        // the callback function (the function we pass inside addEventListener()), this is only 
        // possible with the classical "function" keyword, the fat arrow function (()=>{}) would return
        // the window itself instead of the element 
        const visible = getComputedStyle(this).opacity;
        // going the extra step with getting the current styles, we can also bring the santa back
        // if we click it again by checking if its currently visible or not
        if(visible == 1){
            this.style.opacity = 0;
        }
        else{
            this.style.opacity = 1;
        }
    })
})


// Exercise 2
// --------------
// Create a JavaScript function to create random background colors each time we click a button that we had on the website.
// Hint:
// - Consider the RGB color code
// - Consider the Global DOM built-in properties and methods
console.warn("\nIntermediate-Exercise 2:\n ");

const cBtn = document.querySelector("#color-btn");

// this time we dont need the button element when we click it so no need for
// a classic fuction, but you can use one if you prefer :)
cBtn.addEventListener("click", ()=>{
    // again, lots of ways to do this, we will do two ways: RGB and the way easier hex

    // RGB
    // we start by making 3 random numbers between 0 and 255 as the rgb values (rgb(30,30,30))
    // range from 0-255. note: the Math.random() goes from 0-1 where 0 is included but 1 is not
    // so the actual values range from 0 to 0.9999.. . Using Math.floor means we have to multiply by 256
    // if we want our max to be 255.
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    // now that we have our numbers we can simply set the style for the body
    document.body.style.backgroundColor = `rgb(${randomRed},${randomGreen},${randomBlue})`;
    // [[ COMMENT THIS LINE FOR HEX ]]


    // HEX
    // now, this isnt perfect but less work as we only need one random number.
    // hex color normally come with a hashtag followed by 6 characters e.g. #000000 for black
    // first 2 chars are red, next 2 green and the last 2 for blue and they would range
    // from 00 to FF, however, if we leave out the letters and only use 0-9 we can easily make a color

    // multipy by 1 million will give us 0-999999
    const randomHex = Math.floor(Math.random() * 1000000);

    // document.body.style.backgroundColor = `#${randomHex}`;
    // [[ UNCOMMENT THIS LINE FOR HEX ]]

})