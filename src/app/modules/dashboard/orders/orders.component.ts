import { Component, OnInit } from '@angular/core';
import {MatDialog,} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog():void  {
    const dialogRef = this.dialog.open(ModalComponent,{
      width: '450px',
    });
  }
  columnDefs = [{ field: "SN" }, { field: "CustomerName" }, { field: "PhoneNumber" }, { field: "Address" }, { field: "Status" }];

  rowData = [
    { SN: "1", CustomerName:"Deepak Kanthi", PhoneNumber: 9754118024, Address:"Shubh labh twins, scheme number 94, opposite bombay Hospital, Vijay Nagar, Indore", Status:"Delivered"},
    { SN: "2", CustomerName:"Kesav Singh", PhoneNumber: 9754118024, Address:"Vijay Nagar, Indore", Status:"Pending"},
    { SN: "3", CustomerName:"Mukesh Mishra", PhoneNumber: 9754118024, Address:"Nanda Nagar, Indore",Status:"Delivered"}
  ];
  ngOnInit(): void {
  }

}
