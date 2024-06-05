let products = [
  {
    name: "test",
    price: 40,
    image:
      "https://media.istockphoto.com/id/1488944909/de/foto/umweltkonzept-gr%C3%BCne-glaskugel-mit-einem-baum-im-wald-mit-sonnenlicht-nachhaltigkeitskonzept.jpg?s=2048x2048&w=is&k=20&c=QmK8WZQKeXyfV6ERP4JH6EdZPHJ-LTWsdS2w8_WihhI=", // images/nameofPic  /images/name
  },
  {
    name: "test2",
    price: 11,
    image:
      "https://media.istockphoto.com/id/1488944909/de/foto/umweltkonzept-gr%C3%BCne-glaskugel-mit-einem-baum-im-wald-mit-sonnenlicht-nachhaltigkeitskonzept.jpg?s=2048x2048&w=is&k=20&c=QmK8WZQKeXyfV6ERP4JH6EdZPHJ-LTWsdS2w8_WihhI=", // images/nameofPic  /images/name
  },
  {
    name: "test3",
    price: 22,
    image:
      "https://media.istockphoto.com/id/1488944909/de/foto/umweltkonzept-gr%C3%BCne-glaskugel-mit-einem-baum-im-wald-mit-sonnenlicht-nachhaltigkeitskonzept.jpg?s=2048x2048&w=is&k=20&c=QmK8WZQKeXyfV6ERP4JH6EdZPHJ-LTWsdS2w8_WihhI=", // images/nameofPic  /images/name
  },
  {
    name: "test4",
    price: 30,
    image:
      "https://media.istockphoto.com/id/1488944909/de/foto/umweltkonzept-gr%C3%BCne-glaskugel-mit-einem-baum-im-wald-mit-sonnenlicht-nachhaltigkeitskonzept.jpg?s=2048x2048&w=is&k=20&c=QmK8WZQKeXyfV6ERP4JH6EdZPHJ-LTWsdS2w8_WihhI=", // images/nameofPic  /images/name
  },
  {
    name: "test5",
    price: 55,
    image:
      "https://media.istockphoto.com/id/1488944909/de/foto/umweltkonzept-gr%C3%BCne-glaskugel-mit-einem-baum-im-wald-mit-sonnenlicht-nachhaltigkeitskonzept.jpg?s=2048x2048&w=is&k=20&c=QmK8WZQKeXyfV6ERP4JH6EdZPHJ-LTWsdS2w8_WihhI=", // images/nameofPic  /images/name
  },
  {
    name: "test6",
    price: 66,
    image:
      "https://media.istockphoto.com/id/1488944909/de/foto/umweltkonzept-gr%C3%BCne-glaskugel-mit-einem-baum-im-wald-mit-sonnenlicht-nachhaltigkeitskonzept.jpg?s=2048x2048&w=is&k=20&c=QmK8WZQKeXyfV6ERP4JH6EdZPHJ-LTWsdS2w8_WihhI=", // images/nameofPic  /images/name
  },
  {
    name: "test7",
    price: 77,
    image:
      "https://media.istockphoto.com/id/1488944909/de/foto/umweltkonzept-gr%C3%BCne-glaskugel-mit-einem-baum-im-wald-mit-sonnenlicht-nachhaltigkeitskonzept.jpg?s=2048x2048&w=is&k=20&c=QmK8WZQKeXyfV6ERP4JH6EdZPHJ-LTWsdS2w8_WihhI=", // images/nameofPic  /images/name
  },
  {
    name: "test8",
    price: 88,
    image:
      "https://media.istockphoto.com/id/1488944909/de/foto/umweltkonzept-gr%C3%BCne-glaskugel-mit-einem-baum-im-wald-mit-sonnenlicht-nachhaltigkeitskonzept.jpg?s=2048x2048&w=is&k=20&c=QmK8WZQKeXyfV6ERP4JH6EdZPHJ-LTWsdS2w8_WihhI=", // images/nameofPic  /images/name
  },
  {
    name: "test9",
    price: 99,
    image:
      "https://media.istockphoto.com/id/1488944909/de/foto/umweltkonzept-gr%C3%BCne-glaskugel-mit-einem-baum-im-wald-mit-sonnenlicht-nachhaltigkeitskonzept.jpg?s=2048x2048&w=is&k=20&c=QmK8WZQKeXyfV6ERP4JH6EdZPHJ-LTWsdS2w8_WihhI=", // images/nameofPic  /images/name
  },
  {
    name: "test10",
    price: 100,
    image:
      "https://media.istockphoto.com/id/1488944909/de/foto/umweltkonzept-gr%C3%BCne-glaskugel-mit-einem-baum-im-wald-mit-sonnenlicht-nachhaltigkeitskonzept.jpg?s=2048x2048&w=is&k=20&c=QmK8WZQKeXyfV6ERP4JH6EdZPHJ-LTWsdS2w8_WihhI=", // images/nameofPic  /images/name
  },
];

for (let val of products) {
  // first loop is taking the first object
  // second loop will take the second object
  document.getElementById("result").innerHTML += `
  <div>
  <div class="card mt-3" style="width: 18rem;">
  <img src="${val.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${val.name}</h5>
    <p class="card-text">${val.price}</p>
    <a href="#details" class="btn btn-primary mybtn">Show details</a>
  </div>
</div>
</div>
`;
}

let btns = document.querySelectorAll(".mybtn");
btns.forEach((element, i) => {
  element.addEventListener("click", function () {
    document.getElementById(
      "details"
    ).innerHTML = `<div class="card" style="height: 50vh !important">
    <img src="${products[i].image}" class="card-img-top" height="100%">
    <div class="card-body">
      <h5 class="card-title">${products[i].name}</h5>
      <p class="card-text">${products[i].price}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  });
});
