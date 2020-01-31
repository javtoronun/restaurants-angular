import { Injectable } from '@angular/core';
import {Restaurant} from './models';
import {RESTAURANTS} from './mock';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor() { }
  getAllRestaurants(): Restaurant[] {
    return RESTAURANTS;
  }
  getRestaurantById(id: number) {
    return id > 0 && id < 11 ? RESTAURANTS[id - 1] : undefined;
  }
}
