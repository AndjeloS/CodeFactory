document.getElementById("submit").addEventListener("click", function () {
    let fname = document.getElementById("fstname").value;
    let scndname = document.getElementById("scndname").value;
    let age = document.getElementById("age").value;

    let color = "green";
    if (fname.length < 5) {
        color = "red";
    }
    document.getElementById(
        "result"
    ).innerHTML = `Hi! My name is <span id='color'>${fname}</span> ${scndname} and i am ${age} years old.`;
    document.getElementById("color").style.color = color;
})