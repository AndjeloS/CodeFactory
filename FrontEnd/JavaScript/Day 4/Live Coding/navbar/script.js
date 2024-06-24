let menuStatus = false; // false
// "show" "hide"  // visible  // not visible

document.getElementById("menu-btn").addEventListener("click", function () {
  if (menuStatus == true) {
    // if(menuStatus)
    document.getElementById("menu").style.marginLeft = "-300px";
    document.getElementById("menu-btn").innerText = "Show";
    menuStatus = false;
  } else {
    document.getElementById("menu").style.marginLeft = "0px";
    document.getElementById("menu-btn").innerText = "Close";
    menuStatus = true;
  }
});
