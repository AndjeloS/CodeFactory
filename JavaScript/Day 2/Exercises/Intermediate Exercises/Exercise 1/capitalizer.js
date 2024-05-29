function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(
    capitalizeFirstLetter("hi, my name is jeff!")
);