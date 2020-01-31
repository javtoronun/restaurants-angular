import { Component, OnInit } from '@angular/core';
import {LatLng, OperatingHours, Restaurant} from '../models';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {
  restaurant: Restaurant;
  restaurantForm = this.fb.group({ name: ['', [Validators.required, Validators.minLength(5)]],
    address: ['', [Validators.required]],
    neighborhood: ['', [Validators.required]],
    photograph: ['', [Validators.required]],
    cuisineType: ['', [Validators.required]],
    latlng: this.fb.group({
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]],
    }),
    operatingHours: this.fb.group({
      Monday: ['', [Validators.required]],
      Tuesday: ['', [Validators.required]],
      Wednesday: ['', [Validators.required]],
      Thursday: ['', [Validators.required]],
      Friday: ['', [Validators.required]],
      Saturday: ['', [Validators.required]],
      Sunday: ['', [Validators.required]]})
    });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.restaurant = new Restaurant();
    this.restaurant.latlng = new LatLng();
    this.restaurant.operatingHours = new OperatingHours();
  }
  onFormSubmit(): void {
    this.restaurant = this.restaurantForm.value;
    console.log(this.restaurantForm.value);
  }
}
