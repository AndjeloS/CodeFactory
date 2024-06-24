import { Component } from '@angular/core';
import { ICar } from '../car.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartItems!: ICar[];
}
