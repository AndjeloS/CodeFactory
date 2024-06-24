let value = [1, 7, -3, 9];

function biggestNumberInArray(arr) {
    // The largest number at first should be the first element or null for empty array
    let largest = arr[0] || null;

    // Current number, handled by the loop
    let number = null;
    for (var i = 0; i < arr.length; i++) {
        // Update current number
        number = arr[i];

        // Compares stored largest number with current number, stores the largest one
        largest = Math.max(largest, number);
    }

    return largest;
}

console.log(
    biggestNumberInArray(value)
);