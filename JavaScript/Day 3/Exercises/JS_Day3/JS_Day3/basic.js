// Exercise 1
// Create a program to find the highest value in an array. 
// E.g. If we have the following values 1, 7, -3, 9 we should only get the highest value, number 9.
console.warn("\nBasic-Exercise 1:\n ");

function maxArr(arr){
    // we can use the spread operator (...) to extract the array
    return Math.max(...arr);
}

function maxArr2(arr){
    let max = arr[0];
    arr.forEach(num => {
        if(num > max){
            max = num;
        }
    });
    return max;
}

console.log(maxArr([-3,5,21,0,-42]));
console.log(maxArr2([-3,5,21,0,-42]));

// Exercise 2
// --------------
// Now when you have program Temperature v1.0 done from the other day, 
// it is time to upgrade it to the version 2.0. 
// Now you should create a nice looking responsive front-end for your program (mobile friendly) 
// and create more messages (e.g. if the temperature is above 32c output "The weather is hot" etc.) 
// and you should display a proper image for the current weather condition.
console.warn("\nBasic-Exercise 2:\n ");

const weatherDiv = document.getElementById("weather");

function weather(minTemp, maxTemp){
    let randomNum = Math.floor(Math.random() * (maxTemp - minTemp + 1) + minTemp);
    return randomNum;
}

console.log(weather(-20, 40));
weatherDiv.innerHTML = weather(-20, 40);

// basically the same as the previous days