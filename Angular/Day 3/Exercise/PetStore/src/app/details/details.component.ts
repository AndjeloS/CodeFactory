import { Component } from '@angular/core';
import { pets } from '../pets';
import { IPet } from '../pet.model';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  pets: IPet[];
  pet: IPet;

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.pets = pets;
    const id = +this.route.snapshot.params['index'];
    this.pet = this.pets[id];
  }

  addToCart() {
    this.cartService.addToCart(this.pet);
  }
}
