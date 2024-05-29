function calcAge(birthOfDate) {
    return `You are either ${new Date().getFullYear() - birthOfDate} or ${new Date().getFullYear() - birthOfDate - 1}.`


}

console.log(
    calcAge(1999)
);