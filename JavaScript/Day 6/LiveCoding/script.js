// let string = `{
//   "message": 200,
//   "data": [
//     {
//       "name": "test",
//       "price": 22
//     },
//     {
//       "name": "test2",
//       "price": 33
//     }
//   ]
// }`;

// console.log(typeof string);

// let obj = JSON.parse(string);
// // converting the JSON format (string) to an object
// console.log(obj.data);

// for (let val of obj.data) {
//   console.log(val.name);
// }

// let jsonString = `[{
//     "name": "test",
//     "price": 300,
//     "image": "https://cdn.pixabay.com/photo/2017/08/10/00/40/stars-2616537_1280.jpg"
// },{
//     "name": "test2",
//     "price": 33,
//     "image": "https://cdn.pixabay.com/photo/2017/08/10/00/40/stars-2616537_1280.jpg"
// },{
//     "name": "test3",
//     "price": 22,
//     "image": "https://cdn.pixabay.com/photo/2017/08/10/00/40/stars-2616537_1280.jpg"
// },{
//     "name": "test4",
//     "price": 44,
//     "image": "https://cdn.pixabay.com/photo/2017/08/10/00/40/stars-2616537_1280.jpg"
// },{
//     "name": "test5",
//     "price": 55,
//     "image": "https://cdn.pixabay.com/photo/2017/08/10/00/40/stars-2616537_1280.jpg"
// }]`;

// let array = JSON.parse(jsonString);

// console.log(array);

// for (let val of array) {
//   document.getElementById("result").innerHTML += `<div>
//     <div class="card" style="width: 18rem;">
//     <img src="${val.image}" class="card-img-top" alt="...">
//     <div class="card-body">
//       <h5 class="card-title">${val.name}</h5>
//       <p class="card-text">${val.price}</p>
//       <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div></div>
//     `;
//   // #result
// }

// localStorage

// let a = 12;
// let array = [{ name: "test", price: 22 }];

// localStorage.setItem("array", JSON.stringify(array));

console.log(localStorage.getItem("fname"));

console.log(JSON.parse(localStorage.getItem("array")));
