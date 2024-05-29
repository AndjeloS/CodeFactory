let random = Math.floor((Math.random() * 31) - 5);
console.log(random);

if (random >= -5 && random <= 10) {
    console.log("The Weather is cold.");
} else {
    console.log("The weather is moderate.");
}