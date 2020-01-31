import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Restaurant} from '../models';
import {RestaurantService} from '../restaurant.service';
import {HistorialService} from '../historial.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit, AfterViewChecked {
  restaurants: Restaurant[] = [];
  pageOfItems: Array<Restaurant>;
  error = '';
  constructor(private restaurantService: RestaurantService, private historialService: HistorialService, private cdRef: ChangeDetectorRef, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.restaurants = this.restaurantService.getAllRestaurants();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.error = paramMap.get('error');
    });
  }
  // Se ha usado este metodo para detectar los cambios que se realizan en la componente. Por que como sabemos, angular lo primero que hace
  // es crear el constructor y nostros estamos accediendo a un parametro del contructor que esta cambiando de valor cada dos por tres
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }
  onChangePage(pageOfItems: Array<Restaurant>) {
    this.pageOfItems = pageOfItems;
  }

}
