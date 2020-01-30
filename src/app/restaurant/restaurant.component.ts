import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../models';
import { NeighborhoodCodePipe } from '../neighborhood-code.pipe';
import {RestaurantService} from '../restaurant.service';
import {HistorialService} from '../historial.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  flag = 0;
  @Input() item: Restaurant;
  constructor(private historialService: HistorialService) { }

  ngOnInit() {
  }
  condition(): boolean {
    let res = false;
    if (this.flag === 1) {
      res = true;
      this.historialService.addRestaurantToHistorical(this.item);
    }
    return res;
  }
  showSection() {
    this.flag = 1;
  }
  hideSection() {
    this.flag = 0;
  }
}
