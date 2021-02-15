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
  columnDefs = [{ field: "SN" }, { field: "Number" }, { field: "WaterCapacity" }];

  rowData = [
    { SN: "1", Number: "MP 09 AR 9343", WaterCapacity: 35000},
    { SN: "2", Number: "MP 09 AR 9343", WaterCapacity: 32000},
    { SN: "3", Number: "MP 09 AR 9343", WaterCapacity: 72000}
  ];


}
