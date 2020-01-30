import {Component, OnInit, AfterViewChecked, ChangeDetectorRef} from '@angular/core';
import { RESTAURANTS } from './mock';
import {Restaurant} from './models';
import {RestaurantService} from './restaurant.service';
import {HistorialService} from './historial.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DialogInfoRestaurantComponent} from './dialog-info-restaurant/dialog-info-restaurant.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {}
}
