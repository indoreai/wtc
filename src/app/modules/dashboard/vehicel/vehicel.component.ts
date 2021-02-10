import { Component, OnInit } from '@angular/core';
import {MatDialog,} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
@Component({
  selector: 'app-vehicel',
  templateUrl: './vehicel.component.html',
  styleUrls: ['./vehicel.component.scss']
})
export class VehicelComponent implements OnInit {
 
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  openDialog():void  {
    const dialogRef = this.dialog.open(ModalComponent,{
      width: '450px',

    });
  }
  columnDefs = [{ field: "make" }, { field: "model" }, { field: "price" }];

  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];


}
