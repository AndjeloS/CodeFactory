// Exercise 1
// --------------
// In this exercise, we are going to create a website for the car shop.
// You are free to expand on design and the structure,
// but you should follow some basic requirements of this small project:
console.warn("\nChallenge-Exercise 1:\n ");
console.log("The website itself.");

// 1) Create an array of objects with data about cars, e.g. car name, car production year,
// car image (image link URL), car price, etc.
// 2) Display this data from this array in the index.html page using
// JavaScript loop and according to the provided design

const moreInfo = document.querySelector("#more_info");
const result = document.querySelector("#result");
const cars = [
  {
    name: "Toyota Corolla",
    brand: "Toyota",
    color: "Blue",
    info: function () {
      return `${this.name} and ${this.brand} and ${this.color}`;
    },
  },
  {
    name: "Honda Civic",
    brand: "Honda",
    color: "Red",
    info: function () {
      return `${this.name} and ${this.brand} and ${this.color}`;
    },
  },
  {
    name: "Ford Mustang",
    brand: "Ford",
    color: "Black",
    info: function () {
      return `${this.name} and ${this.brand} and ${this.color}`;
    },
  },
  {
    name: "Chevrolet Camaro",
    brand: "Chevrolet",
    color: "Yellow",
    info: function () {
      return `${this.name} and ${this.brand} and ${this.color}`;
    },
  },
];

// first we create a card for each of the objects in the array, i'll use bootstrap cards
// but you can use whatever you want.
cars.forEach((car) => {
  // note that we pack the actual card with another div with class myCard.
  // and the button for more details has the class bigimg-btn
  result.innerHTML += `
    <div class="p-3">
        <div class="card">
            <img src="https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_1280.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${car.name}</h5>
                <p class="card-text">${car.info()}</p>
                <button class="btn btn-primary bigimg-btn">Show more</button>
            </div>
        </div>
    </div>
    `;
});

// 3) When the user clicks on the car name you should display the div with the big photo
// and all details about the car, like on the image below (you should also provide the feature to hide the big div)

// now that the cards exist we can get all of the buttons, this must happen after we added them as innerHTML to e.g. the result div.
const btns = document.querySelectorAll(".bigimg-btn");

// here we use the arrow function to easily get the index of the element as the index is the same as in our array
// so the index of the button is the same index as in the original cars array
btns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    moreInfo.innerHTML = `
        <div class="card">
            <img src="https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_1280.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cars[index].name}</h5>
                <p class="card-text">${cars[index].info()}</p>
                <button class="btn btn-primary bigimg-btn">Show more</button>
            </div>
        </div>
        `;
  });
});
