import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../models';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  flag = 0;
  @Input() item: Restaurant;
  constructor() { }

  ngOnInit() {
  }
  condition(): boolean {
    let res = false;
    if (this.flag === 1) {
      res = true;
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
