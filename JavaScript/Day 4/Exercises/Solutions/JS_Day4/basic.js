// Exercise 1
// Create a form with input fields for your firstname, lastname and age.  
// Extract the values from each input field and display them all in a separate div.
// If the length of your name is larger than 5 characters, change the text colour to green. 
// Otherwise, change the text-colour to red. 
console.warn("\nBasic-Exercise 1:\n ");
console.log("Enter something in the form and hit 'Submit'")

// first we get all the elements we need: the form itself and all the inputs and the div where
// we will print the results
const form = document.querySelector("#basic-form");
const fNameInput = document.querySelector("#fName");
const lNameInput = document.querySelector("#lName");
const ageInput = document.querySelector("#age");
const results = document.querySelector("#basic-result");

// then we listen for the submit event which happens when we submit the form or hit
// enter while in an input
form.addEventListener("submit", function(event){
    // the event parameter in the () of the function is always the event
    // itself, e.g. the submit event, you can call it however you want but its
    // always the first parameter in the callback function for eventListeners

    // normally the form would automatically refresh the website on submit,
    // to avoid that we can use the preventDefault() method.
    event.preventDefault();

    // now we can get all the input values
    let fName = fNameInput.value;
    let lName = lNameInput.value;
    let age = ageInput.value;

    // now we can check the lenght of the name (either one of them or both together)
    // and change the styles of the result div
    let len = fName.length + lName.length;
    if(len > 5){
        results.style.color = "green";
    }
    else{
        results.style.color = "red";
    }

    // finally we can put all the values in the result div
    // here we use the back-ticks to enable the ${interpolation}
    // but you can also use + to concatenate all the strings
    results.innerHTML = `
        <p>${fName}</p>
        <p>${lName}</p>
        <p>${age}</p>
    `;
})



// Exercise 2
// --------------
// Extend the form you created in Exercise 1 by adding a dropdown (select
//     option) for choosing a profession. You can include options like IT,
//     hospitality, education, etc.
//     Once the form is submitted, the background color of the div displaying the
//     form's information should change based on the selected profession:

// ● If 'IT' is selected, change the background color to purple.

// ● If 'hospitality' is chosen, switch the color to yellow.

// Feel free to add more professions and corresponding colors.

// (Hint: extracting the selection value is done in a similar way as extracting
//     the input values)

console.warn("\nBasic-Exercise 2:\n ");
console.log("Use the same form as for exercise 1");

// same as before, we get all the elements
// you can also use the same form as before and just add the select
const form2 = document.querySelector("#basic-form2");
const fNameInput2 = document.querySelector("#fName2");
const lNameInput2 = document.querySelector("#lName2");
const ageInput2 = document.querySelector("#age2");
const results2 = document.querySelector("#basic-result2");
const select = document.querySelector("#select");

form2.addEventListener("submit", function(event){
    event.preventDefault();

    let fName = fNameInput2.value;
    let lName = lNameInput2.value;
    let age = ageInput2.value;
    let profession = select.value;

    // here we can check the value we specified in html for the options 
    // and do something accordingly. Lets use a switch for that.
    switch(profession){
        case "it":
            results2.style.backgroundColor = "purple";
            // dont forget the break ;)
            break;
        case "hospitality":
            results2.style.backgroundColor = "yellow";
            break;
        default:
            results2.style.backgroundColor = "lime";
            break;
    }
    
    results2.innerHTML = `
        <p>${fName}</p>
        <p>${lName}</p>
        <p>${age}</p>
        <p>${profession}</p>
    `;
})