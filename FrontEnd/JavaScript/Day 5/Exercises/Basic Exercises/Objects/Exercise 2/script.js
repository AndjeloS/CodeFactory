// Cars Theme START
let car = {
    brand: "BMW",
    model: "4",
    name: "BMW 4er Gran Coupé (2024)",
    price: 52.992,
    printInfo: function () {
        return `Here we have a ${this.name} it costs ${this.price}$.`
    }
}

let car2 = {
    brand: "Porsche",
    model: "911",
    name: "Carrera Coupé",
    price: 165.815,
    printInfo: function () {
        return `Here we have a ${this.name} it costs ${this.price}$.`
    }
}

let car3 = {
    brand: "Volkswagen",
    model: "Golf",
    name: "VW Golf Life",
    price: 28.090,
    printInfo: function () {
        return `Here we have a ${this.name} it costs ${this.price}$.`
    }
}
// END

// Animal Theme START
let aninmal = {
    name: "Dexter",
    race: "Dog",
    gender: "Male",
    age: 5,
    color: "Black",
    printInfo: function () {
        return `This is ${this.name}, he is a ${this.age}year old ${this.race}.`
    }
}

let aninmal2 = {
    name: "Max",
    race: "Cat",
    gender: "Male",
    age: 3,
    color: "Orange",
    printInfo: function () {
        return `This is ${this.name}, he is a ${this.age}year old ${this.race}.`
    }
}

let aninmal3 = {
    name: "Marie",
    race: "Hamster",
    gender: "Female",
    age: 1,
    color: "Brown",
    printInfo: function () {
        return `This is ${this.name}, she is a ${this.age}year old ${this.race}.`
    }
}
//END

//Person theme START
let person = {
    fname: "Benjamin",
    lname: "Tennyson",
    age: 10,
    job: "Super Hero",
    printInfo: function () {
        return `${this.fname} ${this.lname} is a ${this.job}.`
    }
}

let person2 = {
    fname: "Dick",
    lname: "Grayson",
    age: 23,
    job: "Super Hero",
    printInfo: function () {
        return `${this.fname} ${this.lname} is a ${this.job}.`
    }
}

let person3 = {
    fname: "Ash",
    lname: "Ketchum",
    age: 11,
    job: "Pokemon Trainer",
    printInfo: function () {
        return `${this.fname} ${this.lname} is a ${this.job}.`
    }
}
// END

document.getElementById("info").innerHTML = `
<h1>INFO:</h1>
<p>${person.printInfo()}</p>
<p>${person2.printInfo()}</p>
<p>${person3.printInfo()}</p>
<br>
<p>${aninmal.printInfo()}</p>
<p>${aninmal2.printInfo()}</p>
<p>${aninmal3.printInfo()}</p>
<br>
<p>${car.printInfo()}</p>
<p>${car2.printInfo()}</p>
<p>${car3.printInfo()}</p>
`