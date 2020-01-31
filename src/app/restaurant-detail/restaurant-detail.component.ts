import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {RestaurantService} from '../restaurant.service';
import {Restaurant} from '../models';
import {isEmpty} from 'rxjs/operators';
import {Location} from '@angular/common';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurantGrab: Restaurant;
  restaurants: Restaurant[] = [];
  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = +params.get('id');
      this.showRestaurantDetails(id);
    });
  }

  showRestaurantDetails(id): void {
    if (!isNaN(id) && this.restaurantService.getRestaurantById(id) !== undefined) {
      this.restaurantGrab = this.restaurantService.getRestaurantById(id);
      this.restaurants.push(this.restaurantGrab);
    } else {
      this.router.navigate(['restaurants']);
    }
  }
  goBack() {
    this.location.back();
  }

}
