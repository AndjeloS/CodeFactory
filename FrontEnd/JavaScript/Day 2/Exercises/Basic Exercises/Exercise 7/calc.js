function AreaAndVolume(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;

    return `The area of the box is: ${area} cm². \n \n The volume of the box is: ${volume} cm³`
}
console.log(
    AreaAndVolume(2, 7, 5)
);