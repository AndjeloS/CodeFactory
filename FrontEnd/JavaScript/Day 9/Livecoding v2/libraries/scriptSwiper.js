let images = [
  "https://cdn.pixabay.com/photo/2019/08/09/13/51/boat-4395122_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/08/09/13/51/boat-4395122_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/08/09/13/51/boat-4395122_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/08/09/13/51/boat-4395122_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/08/09/13/51/boat-4395122_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/08/09/13/51/boat-4395122_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/08/09/13/51/boat-4395122_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/08/09/13/51/boat-4395122_1280.jpg",

  "https://cdn.pixabay.com/photo/2019/08/09/13/51/boat-4395122_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/08/09/13/51/boat-4395122_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/08/09/13/51/boat-4395122_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/08/09/13/51/boat-4395122_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/08/09/13/51/boat-4395122_1280.jpg",
];

for (let val of images) {
  document.getElementById("result").innerHTML += `
          <div class="swiper-slide">
            <img src="${val}" />
          </div>`;
}
