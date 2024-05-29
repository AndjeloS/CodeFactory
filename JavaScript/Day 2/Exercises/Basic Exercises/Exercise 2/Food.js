let favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"];

function randomFood() {
    console.log(favoriteFoods[(Math.floor(Math.random() * favoriteFoods.length))]);

}
randomFood()