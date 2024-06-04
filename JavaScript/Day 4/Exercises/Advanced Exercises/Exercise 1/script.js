document.getElementById("circle").addEventListener("mouseover", inCircle);
document.getElementById("circle").addEventListener("mouseout", outCircle);
document.getElementById("circle").addEventListener("dbclick", BgBlue);
document.getElementById("circle").addEventListener("click", BgGray);

function inCircle() {
    document.getElementById("dot").innerHTML = `<p>You are in the
    circle</p>`
}

function outCircle() {
    document.getElementById("dot").innerHTML = `<p>You are out of the
    circle</p>`
}

function BgGray() {
    let color1 = "gray";
    document.getElementById("circle").style.background = color1;
}


let DELAY = 700, clicks = 0, timer = null;

function BgBlue() {
    ("a").on("click", function (e) {

        clicks++;  //count clicks

        if (clicks === 1) {

            timer = setTimeout(function () {

                alert("Single Click");  //perform single-click action    
                clicks = 0;             //after action performed, reset counter

            }, DELAY);

        } else {

            clearTimeout(timer);    //prevent single-click action
            alert("Double Click");  //perform double-click action
            clicks = 0;             //after action performed, reset counter
        }

    })
        .on("dblclick", function (e) {
            e.preventDefault();  //cancel system double-click event
        });
    let color2 = "blue";
    document.getElementById("circle").style.background = color2;
};