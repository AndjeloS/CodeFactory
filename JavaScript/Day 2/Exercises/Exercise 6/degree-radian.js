function degreeRadianConvert(degree) {
    let radian = degree * (Math.PI / 180);
    return `${radian.toFixed(5
    )} radians`
}
console.log(
    degreeRadianConvert(90));