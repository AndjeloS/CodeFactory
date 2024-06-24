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
    let color2 = "blue";
    document.getElementById("circle").style.background = color2;
};