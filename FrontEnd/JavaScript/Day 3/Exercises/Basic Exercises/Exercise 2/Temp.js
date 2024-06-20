let random = Math.floor((Math.random() * 31) - 5);
console.log(random);


if (random <= 10) {
    document.getElementById("text").innerHTML = `<p style="color:blue;font-size:22px;font-width:bold,fontfamily:sans-serif">The weather ${random}°C cold.</p> <img src="https://cdn.pixabay.com/photo/2021/12/13/17/29/branches-6868761_1280.jpg" width="300 alt="">`


} else {
    document.getElementById("text").innerHTML = `<p style="color:red;font-size:22px;font-width:bold,fontfamily:sans-serif"> The weather ${random}°C hot. </p>
    <img src="https://cdn.pixabay.com/photo/2017/07/02/21/44/harrison-hot-springs-2465933_1280.jpg" width="300 alt="">
    `

}
