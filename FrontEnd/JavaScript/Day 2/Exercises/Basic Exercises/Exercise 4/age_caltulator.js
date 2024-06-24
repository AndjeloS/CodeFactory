function calcAge(birthOfDate) {
    let date = new Date;
    let cYear = date.getFullYear();
    return `You are either ${cYear - birthOfDate} or ${cYear - birthOfDate - 1}.`


}

console.log(
    calcAge(1999)
);