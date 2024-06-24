// Sort Flowers

let sortStatus = "highest";

function sortFlowers() {
  let test = [];
  if (sortStatus == "highest") {
    test = flowers.sort((a, b) => b.price - a.price); // highest to the smallest
    sortStatus = "smallest";
    document.getElementById(
      "sortFlower"
    ).innerHTML = `<img src="Images/Symbol/sort-hightolow.png" alt="" />`;
  } else {
    test = flowers.sort((a, b) => a.price - b.price); // the opposite
    sortStatus = "highest";
    document.getElementById(
      "sortFlower"
    ).innerHTML = `<img src="Images/Symbol/sort-lowtohigh.png" alt="" />`;
  }

  document.getElementById("shop-item-flower").innerHTML = "";
  for (let val of test) {
    document.getElementById("shop-item-flower").innerHTML += `
<div class="card ms-3 mb-3" style="width: 18rem;">
<div class="card-header d-flex justify-content-between">
        <div>
            <span class="badge text-black bg-success-subtle p-2">Flower</span>
        </div>
        <div>
            <img src="Images/Symbol/heart.png" id="card-head-img" alt="">
        </div>
    </div>
  <img class="shop-item-img" src="${val.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title text-center">${val.name}</h5>
    <p class="card-text text-center">${val.price}€</p>
    <a class="btn btn btn-success add-to-cart">Add to cart</a>
  </div>
</div>
`;
  }
}

document.getElementById("sortFlower").addEventListener("click", sortFlowers);

// Sort Misc

let sortStatus2 = "highest";

function sortMisc() {
  let test2 = [];
  if (sortStatus == "highest") {
    test2 = misc.sort((a, b) => b.price - a.price); // highest to the smallest
    sortStatus = "smallest";
    document.getElementById(
      "sortMisc"
    ).innerHTML = `<img src="Images/Symbol/sort-hightolow.png" alt="" />`;
  } else {
    test2 = misc.sort((a, b) => a.price - b.price); // the opposite
    sortStatus = "highest";
    document.getElementById(
      "sortMisc"
    ).innerHTML = `<img src="Images/Symbol/sort-lowtohigh.png" alt="" />`;
  }

  document.getElementById("shop-item-misc").innerHTML = "";
  for (let val of test2) {
    document.getElementById("shop-item-misc").innerHTML += `
  <div class="card ms-3 mb-3" style="width: 18rem;">
  <div class="card-header d-flex justify-content-between">
          <div>
              <span class="badge text-black bg-success-subtle p-2">Misc</span>
          </div>
          <div>
              <img src="Images/Symbol/heart.png" id="card-head-img" alt="">
          </div>
      </div>
    <img class="shop-item-img" src="${val.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title text-center">${val.name}</h5>
      <p class="card-text text-center">${val.price}€</p>
      <a class="btn btn btn-success add-to-cart2">Add to cart</a>
      <div ></div>
    </div>
  </div>
  `;
  }
}

document.getElementById("sortMisc").addEventListener("click", sortMisc);
