interface IVehicles {
  pricenew: number;
  milage: number;
  fuelConsum: number;
  wheels: number;
  fuelType: string;
  buildYear: number;
  name: string;
}

let vehicleArr: IVehicles[] = [];

class Vehicles {
  milage: number;
  fuelConsum: number;
  pricenew: number;
  constructor(milage: number, fuelConsum: number, pricenew: number) {
    this.milage = milage;
    this.fuelConsum = fuelConsum;
    this.pricenew = pricenew;
  }
}

class Motorcyle extends Vehicles {
  name: string;
  wheels: number;
  fuelType: string;
  buildYear: number;
  constructor(
    wheels: number,
    fuelType: string,
    buildYear: number,
    fuelConsum: number,
    milage: number,
    pricenew: number,
    name: string
  ) {
    super(milage, fuelConsum, pricenew);
    this.wheels = wheels;
    this.buildYear = buildYear;
    this.fuelType = fuelType;
    this.name = name;
    vehicleArr.push(this);
  }
}

let Honda = new Motorcyle(2, "Diesel", 2004, 48, 14000, 24000, "Honda Striker");

// for (let vehcile of vehicleArr) {
//   console.log(vehcile);
//   // function printPrize(vehcile): any {
//   //   let fuelcost: number = 0;
//   //   let date: any = new Date();
//   //   let currentDate = date.getFullYear();
//   //   let vehicelAge: number = currentDate - vehcile.buildYear;
//   //   let milageCost: number = vehcile.milage / 10000;
//   //   let costFor100Miles: number = vehcile.fuelConsum * fuelcost + 100;
//   //   let currentPrice: number = 0;

//   //   if ((vehcile.fuelType = "Diesel")) {
//   //     fuelcost = 2;
//   //     let allCosts: number =
//   //       (milageCost + costFor100Miles) * vehicelAge + vehcile.pricenew / 3;
//   //     let currentPrice: number = vehcile.pricenew - allCosts;
//   //   } else {
//   //     fuelcost = 1;
//   //     let allCosts: number =
//   //       (milageCost + costFor100Miles) * vehicelAge + vehcile.pricenew / 3;
//   //     currentPrice = vehcile.pricenew - allCosts;
//   // }
//   }
//   let sellPrice: number = printPrize(vehcile);
//   let result = document.getElementById("motorcycle-result") as HTMLElement;
//   result.innerHTML += `
//    <div>
//         <div class="card my-3" >
//             <div class="card-body">
//                 <h5 class="card-title">${vehcile.name}</h5>
//                 <p class="card-text">${sellPrice}</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//     </div>
//    `;
// }

// class Car extends Vehicles {
//   pricenew: number;
//   milage: number;
//   fuelConsum: number;
//   wheels: number;
//   fuelType: string;
//   buildYear: number;
//   constructor(
//     wheels: number,
//     fuelType: string,
//     buildYear: number,
//     fuelConsum: number,
//     milage: number,
//     pricenew: number
//   ) {
//     super(milage, fuelConsum, pricenew);
//     this.wheels = wheels;
//     this.buildYear = buildYear;
//     this.fuelType = fuelType;
//   }
// }

// class Truck extends Vehicles {
//   pricenew: number;
//   milage: number;
//   fuelConsum: number;
//   wheels: number;
//   fuelType: string;
//   buildYear: number;
//   constructor(
//     wheels: number,
//     fuelType: string,
//     buildYear: number,
//     fuelConsum: number,
//     milage: number,
//     pricenew: number
//   ) {
//     super(milage, fuelConsum, pricenew);
//     this.wheels = wheels;
//     this.buildYear = buildYear;
//     this.fuelType = fuelType;
//   }
// }

// class PKW extends Vehicles {
//   pricenew: number;
//   milage: number;
//   fuelConsum: number;
//   wheels: number;
//   fuelType: string;
//   buildYear: number;
//   constructor(
//     wheels: number,
//     fuelType: string,
//     buildYear: number,
//     fuelConsum: number,
//     milage: number,
//     pricenew: number
//   ) {
//     super(milage, fuelConsum, pricenew);
//     this.wheels = wheels;
//     this.buildYear = buildYear;
//     this.fuelType = fuelType;
//   }
// }
