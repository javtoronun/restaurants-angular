import { Injectable } from '@angular/core';
import {Restaurant} from './models';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  historicalRestaurants = new Set();
  constructor() { }

  addRestaurantToHistorical(restaurant: Restaurant) {
    this.historicalRestaurants.add(restaurant);
  }
}
