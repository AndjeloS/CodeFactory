document.getElementById("santa").addEventListener("click", removeElement);

function removeElement() {
    document.getElementById("img")
    let img = document.querySelectorAll("img");
    img.forEach((element) => {
        element.addEventListener("click", function () {
            this.remove();
        });
    });
}