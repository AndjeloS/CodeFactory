// Exercise 1
// --------------
// Many people love games of chance and especially the thrill of "roll of the
// dice". For this exercise, create a page with a two-sided layout for two
// players based on the idea of "roll of the dice".
// When the page loads, a prompt method should appear to receive a string
// (the name for each player), then display their names in the header of the
// page, for example, "Thomas vs. Martin".
// In each half of the layout, place a button that calls a function. This function
// should create one random number. Next, display the number separately
// and visually appealing in each player's half, so that the player can see what
// they "rolled". Once both players have rolled, announce the winner based on
// the highest score! Do your best to create a rich game-design using CSS or
// Bootstrap

// Consider the following programming principles while solving the Challenge:

// ● Use of best practices in semantic elements, code indentation and
// comments

// ● Give your page a responsive layout with at least two breakpoints

// ● Correct use of attributes with functions

// ● Declaring variables as global or local, when appropriate

// ● Best practices in naming variables

// ● Manipulating the DOM with methods like .getElementById() and
// properties like .innerHTM


console.warn("\nChallenge-Exercise 1:\n ");
console.log("This has its onw HTML! Please open that one.");

// first we do the prompts to get the names
const name1 = prompt("Player 1 name");
const name2 = prompt("Player 2 name");
// and put them in the "versus" heading and the players sides
document.querySelector("#versus").innerHTML = `${name1} VS. ${name2}`;
document.querySelector("#p1").innerHTML = name1;
document.querySelector("#p2").innerHTML = name2;

// lets make 2 gloval variables to hold the dice results so we can compare them later
let roll1;
let roll2;

// now we put some event listeners on the buttons to handle the dice rolls
document.querySelector("#p1-btn").addEventListener("click", ()=>{
    // we can check if the player already rolled by checking the global var
    // we created, if its undefined then p1 didnt roll yet, otherwise we already have a result
    if(roll1 === undefined){
        roll1 = Math.floor(Math.random() * 6) + 1;
        // then write it in the field for the roll
        document.querySelector("#p1-roll").innerHTML = roll1;

        // at last we can check if the other player already rolled and if so we can compare 
        // the rolls to determine a winner
        // at best we can create a function for that as it will be the same as for player 2
        checkWin(); // further down
    }
})

// now the same thing for player 2
document.querySelector("#p2-btn").addEventListener("click", ()=>{
    if(roll2 === undefined){
        roll2 = Math.floor(Math.random() * 6) + 1;
        document.querySelector("#p2-roll").innerHTML = roll2;
        checkWin();
    }
})


function checkWin(){
    if(roll1 !== undefined && roll2 !== undefined){
        if(roll1 === roll2){
            document.querySelector("#result").innerHTML = "DRAW";
        }
        else {
            if(roll1 > roll2){
                document.querySelector("#result").innerHTML = `${name1} WINS!`;
            }
            else {
                document.querySelector("#result").innerHTML = `${name2} WINS!`;
            }
        }
    }
}