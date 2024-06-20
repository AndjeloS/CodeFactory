document.getElementById("submit").addEventListener("click", function () {
    let fname = document.getElementById("fstname").value;
    let scndname = document.getElementById("scndname").value;
    let age = document.getElementById("age").value;

    let color = "green";
    if (fname.length < 5) {
        color = "red";
    }

    let job = document.getElementById("job").value;
    let backcolor = "white";
    if (job == "IT") {
        backcolor = "purple";
    } else if (job == "Hospitality") {
        backcolor = "yellow";
    } else {
        backcolor = "green";
    }

    document.getElementById(
        "result"
    ).innerHTML = `Hi! My name is <span id='color'>${fname}</span> ${scndname} and i am ${age} years old and i work in ${job}.`;
    document.getElementById("color").style.color = color;
    document.getElementById("result").style.backgroundColor = backcolor;
})