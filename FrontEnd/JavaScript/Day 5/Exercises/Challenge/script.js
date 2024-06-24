let products = [
    {
        modell: "Car",
        brand: "Honda",
        name: "e:Ny1",
        price: 41.990,
        image:
            "https://www.honda.at/content/dam/central/cars/e-ny1-electric-suv/overview-phase-3/hero-tile/01_RET_2023_03_HONDA_Shot_1_0214_1805.jpg/jcr:content/renditions/fb_r_w.webp" // images/nameofPic  /images/name
    },
    {
        modell: "Car",
        brand: "Ford",
        name: "Mustang GT",
        price: 86.000,
        image:
            "https://www.gpas-cache.ford.com/guid/186b3146-7cf6-37c3-9984-8dfd4b03acce.png" // images/nameofPic  /images/name
    },
    {
        modell: "Car",
        brand: "Jaguar",
        name: "XF",
        price: 91.414,
        image:
            "https://jlr.scene7.com/is/image/jlr/X15224GL_303101393_003_PR?wid=1500" // images/nameofPic  /images/name
    },
    {
        modell: "Car",
        brand: "BMW",
        name: "4er Gran Coupé (2024)",
        price: 52.992,
        image:
            "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331rjFhnOqIbqP6qWL3hZtUDQGxbZ35BjkeTjHq0MvUi5pXJ9SGZIaoLkNF1A6x8U0%25lLhzUyfriC2yRUQvmEO30BHtuc%25IdkATQLjKvQFQ%25QBH2YDafvOajmqn1cn5DyLOEAGGqTJIsFeXL3uBrqU6JdSeZWCuuzVMRrdsSkNh56k9VA0ogRcXNF4Hvmfx0Kc%252g7Q4WxfjvUfcP81D2GmxbUEqCuF89GsLljUUiprJq9WGw6ZujlwptYRSDUW67m5VuTJYCygN6U7mlTv0J6HyX324AkDTQdjcFhf3azDxKiodnkq8WoqzOALUPwnkIFJGbYQABKup9g1FeWS6AraKMPVYFTqWhbNmKXMPo90yW5BbHi4TPO89%25wc3ZmFiftxd92gw178z3aftECUkg3o7slGAtsHCrXpF7hClZQ6Kdv6XRaYWz9OQ5nmP%25T0agOybAgrnvIT91vWO2B1BFO%25Cp5lb8oCrms8fnOl6JQD0mbH8wlD7Z9cvt3ReHifGruLBkJnTNM3TFe0PL5kiLSMfbYznQ5Lsm6Ui5AekxVA71HsscCtFbiwNJ0%25lYOh%25qTMDESqvLB9orO2krlROWUmgXAeHCrmu09DP05CZHO" // images/nameofPic  /images/name
    },
    {
        modell: "Car",
        brand: "Porsche",
        name: "911 Carrera Coupé",
        price: 165.815,
        image:
            "https://pics.porsche.com/rtt/iris?COSY-EU-100-1713c6eK12UC31P3T5JOCU%25hjdmiTDDmvMXlHWguCuq6Q44RtRHo9ZAaDj6u5PNI7tGW3rNbZJNKXv9Z7KFrQZtcZdtH4LOLRZUhlO5cwUc7Njm0jIy0TPEapPvlPWhGSTIUy2Y4WAJoagZS%25v10lnj4qTllI3Ui7wawABSU7elZCNERHSo0VV2YZjamcPjRHnvyXZ2E4vFDcL3iD8dGwYYWtFePWMMXRn1o5%25VKkNNj2z17qz9TV3BZloTZsk6paVvajgwzX299sMeIzR%25BWIJCgN2" // images/nameofPic  /images/name
    },
    {
        modell: "Car",
        brand: "Volkswagen",
        name: "Golf Life",
        price: 28.090,
        image:
            "https://cf-cdn-v7-api.volkswagen.at/images/6e6ac2143e56b08de5504be60626c5dc8735a45a/29e9b0eb-dae4-4639-ba46-60d0bc3045d8/crop:100:100:CENTER:0:0/resize:1920:1080/gl6494-original" // images/nameofPic  /images/name
    },
    {
        modell: "Motorbike",
        brand: "Kawasaki",
        name: "Eliminator 500",
        price: 7.199,
        image:
            "https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/24MY_Eliminator_BK1_STU__2_.png" // images/nameofPic  /images/name
    },
    {
        modell: "Motorbike",
        brand: "BMW",
        name: "S 1000 R",
        price: 19.490,
        image:
            "https://www.bmw-motorrad.at/content/dam/bmwmotorradnsc/common/multiimages/images/models/roadster/s1000r-2020/nsc-master-s1000r-P0N3H-cgi-2560x1440.jpg.asset.1709029797277.jpg" // images/nameofPic  /images/name
    },
    {
        modell: "Motorbike",
        brand: "Honda",
        name: "CRF450R",
        price: 10.890,
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCpoYyMWWKGQYPlSbVCyAVxn5pDIPLV5acig&s" // images/nameofPic  /images/name
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
      <h5 class="card-title">${val.brand} ${val.name}</h5>
      <p class="card-text">${val.price}€</p>
      <a href="#details" class="btn btn-primary mybtn">Show details</a>
    </div>
  </div>
  </div>
  `;
};

let btns = document.querySelectorAll(".mybtn");
btns.forEach((element, i) => {
    element.addEventListener("click", function () {
        document.getElementById(
            "details"
        ).innerHTML = `
            <div id="decr-body" class="card">
                <img src="${products[i].image}" class="card-img-top" id="desc-img">
                <div class="card-body">
                <h5 class="card-title">${products[i].name}</h5>
                <p class="card-text">${products[i].price}</p>
                <a href="#" class="btn btn-primary btnRemoveDetails">Go somewhere</a>
                
                <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Close Details
                </a>
            </button>
                </div>
            </div>;`
    });
});
