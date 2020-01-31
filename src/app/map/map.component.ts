import { Component, OnInit, Input } from '@angular/core';
import {Restaurant} from '../models';
import {HistorialService} from '../historial.service';
import {MatDialog} from '@angular/material';
import {DialogInfoRestaurantComponent} from '../dialog-info-restaurant/dialog-info-restaurant.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() restaurants: Restaurant[];
  @Input() restaurant: Restaurant;
  latitudCenter: number;
  longitudCenter: number;
  id: number;
  constructor() { }
  //constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.latitudCenter = 0;
    this.longitudCenter = 0;
    this.getCenter();
  }
  // It is calculate adding all latlng number (average)
  getCenter() {
    this.restaurants.map(item => {
      this.latitudCenter = this.latitudCenter + item.latlng.lat;
      this.longitudCenter = this.longitudCenter + item.latlng.lng;
    });
    this.latitudCenter = this.latitudCenter / this.restaurants.length;
    this.longitudCenter = this.longitudCenter / this.restaurants.length;
  }

  markerClicked(object: Restaurant) {
    //this.openDialog(object);
    this.id = object.id;
  }

  openDialog(object) {
    //this.dialog.open(DialogInfoRestaurantComponent, {data: {
      //name: object.name,
      //}});
  }
}
