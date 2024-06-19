import { Component } from '@angular/core';
import { cars } from '../cars';
import { ICar } from '../car.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cars:ICar[];

  constructor(){
     this.cars = cars
  }
}
