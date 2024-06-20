import { Component } from '@angular/core';
import { ICar } from '../car.model';
import { cars } from '../cars';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  cars:ICar[];
  car: ICar;
  
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ){
     this.cars = cars;
    const id = +this.route.snapshot.params['index']
    this.car = this.cars[id];

  }

  addToCart(){
    this.cartService.addToCart(this.car)
  }
}
