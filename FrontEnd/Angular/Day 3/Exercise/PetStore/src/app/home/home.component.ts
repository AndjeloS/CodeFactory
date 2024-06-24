import { Component } from '@angular/core';
import { pets } from '../pets';
import { IPet } from '../pet.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pets: IPet[];

  constructor() {
    this.pets = pets;
  }
}
