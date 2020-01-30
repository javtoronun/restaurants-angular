import { Component, OnInit } from '@angular/core';
import { RESTAURANTS } from './mock';
import {Restaurant} from './models';
import {RestaurantService} from './restaurant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Restaurant Reviews';
  restaurants: Restaurant[] = [];
  constructor(private restaurantService: RestaurantService) {
  }
  ngOnInit() {
    this.restaurants = this.restaurantService.getAllRestaurants();
  }
}
