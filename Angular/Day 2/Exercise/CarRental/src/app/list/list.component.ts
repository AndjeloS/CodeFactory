import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  info = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    days: new FormControl('', Validators.required),
    img: new FormControl('', Validators.required),
  });

  cars: { name: string; price: number; days: number; img: any }[] = [
    {
      name: `Kia Sportage`,
      price: 276.29,
      days: 3,
      img: `https://cdn2.rcstatic.com/images/car_images_b/web/kia/sportage_lrg.jpg`,
    },
    {
      name: `Hyundai i30`,
      price: 206.21,
      days: 3,
      img: `https://cdn2.rcstatic.com/images/car_images_b/web/hyundai/i30_lrg.jpg`,
    },
    {
      name: 'Cupra Formentor',
      price: 603.93,
      days: 3,
      img: `https://cdn2.rcstatic.com/images/car_images/new_images/cupra/formentor_lrg.jpg`,
    },
    {
      name: 'BMW 5',
      price: 778.99,
      days: 3,
      img: `https://cdn2.rcstatic.com/images/car_images/new_images/bmw/5_series_touring_lrg.jpg`,
    },
    {
      name: 'Mercedes E-Class Estate GPS',
      price: 778.99,
      days: 3,
      img: `https://cdn2.rcstatic.com/images/car_images_b/web/mercedes/e_class_estate_lrg.jpg`,
    },
  ];

  onSubmit() {
    // TODO: Use EventEmitter with form value
    if (this.info.valid) {
      console.log(this.info.value);
    }
  }
}
