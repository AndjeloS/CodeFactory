const products = [
  {
    name: "HTML Course",
    image: "html-icon-logo.png",
    price: 500.99,
    qtty: 1,
  },
  {
    name: "CSS Course",
    image: "css-icon-logo.png",
    price: 800.5,
    qtty: 1,
  },
  {
    name: "JS Course",
    image: "js-icon-logo.png",
    price: 2100.0,
    qtty: 1,
  },
];

for (let val of products) {
  document.getElementById("result").innerHTML += `
        <div>
            <div class="card" style="width: 18rem;">
                <img src="images/${val.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${val.name}</h5>
                    <p class="card-text">${val.price}</p>
                    <a class="btn btn-primary add-to-cart">Add to cart</a>
                </div>
            </div>
        </div>
    `;
}

let cart = [];

let btns = document.querySelectorAll(".add-to-cart");
btns.forEach((element, index) => {
  element.addEventListener("click", function () {
    if (cart.find((val) => val.name == products[index].name)) {
      products[index].qtty++;
    } else {
      cart.push(products[index]);
    }
    createCart();
    calculateTotal();
  });
});

function createCart() {
  document.getElementById("cart").innerHTML = "";
  for (let val of cart) {
    document.getElementById("cart").innerHTML += `
                <div class="d-flex">
                    <div class="p-2 flex-fill"><img src="images/${val.image}" width="100"></div>
                    <div class="p-2 flex-fill">${val.name}</div>
                    <div class="p-2 flex-fill">${val.price}</div>
                    <div class="p-2 flex-fill"><button class="btn btn-warning minus-btn">-</button></div>

                    <div class="p-2 flex-fill qtty">${val.qtty}</div>
                    <div class="p-2 flex-fill"><button class="btn btn-success plus-btn">+</button></div>
                    <div class="p-2 flex-fill"><button class="btn btn-danger delete-btn">X</button></div>

                </div>
            `;
  }

  // plus, minus and X btns on the page
  let plusBtns = document.querySelectorAll(".plus-btn");
  plusBtns.forEach((element, index) => {
    element.addEventListener("click", function () {
      cart[index].qtty++;
      document.querySelectorAll(".qtty")[index].innerHTML = cart[index].qtty;
      calculateTotal();
    });
  });

  let minusBtns = document.querySelectorAll(".minus-btn");
  minusBtns.forEach((element, index) => {
    element.addEventListener("click", function () {
      if (cart[index].qtty == 1) {
        // i want to remove the product
        cart.splice(index, 1);
        createCart();
      } else {
        cart[index].qtty--;
        document.querySelectorAll(".qtty")[index].innerHTML = cart[index].qtty;
      }
      calculateTotal();
    });
  });

  let deleteBtns = document.querySelectorAll(".delete-btn");
  deleteBtns.forEach((element, index) => {
    element.addEventListener("click", function () {
      cart[index].qtty = 1;
      cart.splice(index, 1);
      createCart();
      calculateTotal();
    });
  });
}

function calculateTotal() {
  let total = 0;

  for (let product of cart) {
    total = total + product.price * product.qtty;
    // total += product.price * product.qtty
  }

  //   if(total > 1000){
  //     total = total * 0.01;
  //   }

  document.getElementById("total").innerHTML = total.toFixed(2) + " €";

  // total = 0 + 300 * 4 = 1200
  // total = 1200 + (800 * 1) = 2000
  // total = 2000 + 2100 * 3 = 8300
}
