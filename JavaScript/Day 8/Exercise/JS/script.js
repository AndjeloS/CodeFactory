for (let val of flowers) {
  document.getElementById("shop-item").innerHTML += `
<div class="card ms-3 mb-3" style="width: 18rem;">
  <img class="shop-item-img" src="Images/Flowers/${val.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center">${val.name}</h5>
    <p class="card-text text-center">${val.price}</p>
    <a href="#" class="btn btn btn-success add-to-cart">Add to cart</a>
  </div>
</div>
`;
}

let cart = [];

let btns = document.querySelectorAll(".add-to-cart");
btns.forEach((element, index) => {
  element.addEventListener("click", function () {
    if (cart.find((val) => val.name == flowers[index].name)) {
      flowers[index].qtty++;
    } else {
      cart.push(flowers[index]);
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
                      <div class="p-2 flex-fill"><img src="Images/Flowers/${val.img}" width="80" height="80"></div>
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

  for (let flowers of cart) {
    total = total + flowers.price * flowers.qtty;
    // total += flowers.price * flowers.qtty
  }
  document.getElementById("total").innerHTML = total.toFixed(2) + " €";
}
