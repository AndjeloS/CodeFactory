import { Injectable } from '@angular/core';
import { IPet } from './pet.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: IPet[] = [];
  formData!: string;
  constructor() {}

  addToCart(pet: IPet) {
    this.cartItems.push(pet);
    console.log(this.cartItems);
  }
  getData() {
    return;
  }
  addData(data: string) {
    this.formData = data;
  }
}
