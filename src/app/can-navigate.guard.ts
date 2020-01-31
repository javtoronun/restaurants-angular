import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {RestaurantService} from './restaurant.service';
// Comprueba el numero maximo de restaurantes que le estoy pasando por la url
@Injectable({
  providedIn: 'root'
})
export class CanNavigateGuard implements CanActivate {
  constructor(private restaurantService: RestaurantService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const restaurants = this.restaurantService.getAllRestaurants();
    if(restaurants.length < 15) {
      return true;
    } else {
      this.router.navigate(['restaurants', {error: 'max-restaurant-error'}])
      return false;
    }
  }
}
