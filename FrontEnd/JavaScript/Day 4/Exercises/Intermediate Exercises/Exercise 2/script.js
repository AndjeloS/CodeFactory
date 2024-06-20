document.getElementById("body").addEventListener("click", setBg);
function setBg() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
}


function chBackcolor(color) {
    document.body.style.background = color;
}