import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-info-restaurant',
  templateUrl: './dialog-info-restaurant.component.html',
  styleUrls: ['./dialog-info-restaurant.component.css']
})
export class DialogInfoRestaurantComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogInfoRestaurantComponent>, @Inject(MAT_DIALOG_DATA) public data: any ) {
  }

  ngOnInit() {
  }

}
