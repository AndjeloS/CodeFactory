import { Injectable } from '@angular/core';
import { ICar } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: ICar[]= [];
  formData!: string;
  constructor() { }


  addToCart(car: ICar){
    this.cartItems.push(car);
    console.log(this.cartItems);
    
  }
  getData(){
    return
  }
  addData(data: string){
    this.formData = data
  }
}
