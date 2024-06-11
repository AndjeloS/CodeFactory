let people = [
  {
    name: "test",
    age: 17,
  },
  {
    name: "test2",
    age: 26,
  },
  {
    name: "test3",
    age: 18,
  },
  {
    name: "test4",
    age: 30,
  },
  {
    name: "test5",
    age: 15,
  },
];

for (let val of people) {
  document.getElementById(
    "result"
  ).innerHTML += `<div class="mt-3"><div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${val.name}</h5>
      <p class="card-text">${val.age}</p>
    </div>
  </div></div>`;
}
let sortStatus = "highest";

function sortPeople() {
  let test = [];
  if (sortStatus == "highest") {
    test = people.sort((a, b) => b.age - a.age); // highest to the smallest
    sortStatus = "smallest";
    document.getElementById("sort").innerText = "sort By Age ->";
  } else {
    test = people.sort((a, b) => a.age - b.age); // the opposite
    sortStatus = "highest";
    document.getElementById("sort").innerText = "sort By Age <-";
  }

  document.getElementById("result").innerHTML = "";
  for (let val of test) {
    document.getElementById(
      "result"
    ).innerHTML += `<div class="mt-3"><div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${val.name}</h5>
            <p class="card-text">${val.age}</p>
          </div>
        </div></div>`;
  }
}

document.getElementById("sort").addEventListener("click", sortPeople);
