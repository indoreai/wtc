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
      data: {
        openForModal: 'gen_orders',
        title: 'Generate Order'
      }
    });
  }
  
  columnDefs = [{ field: "SN", width: 60}, { field: "OrderDate", width: 140 }, { field: "DeliveryDate", width: 140 }, { field: "CustomerName" }, { field: "PhoneNumber", width: 130}, { field: "Address", width:350 }, { field: "WaterRequiredInLitters" }, { field: "Rate", width:100 }];

  rowData = [
    { SN: "1", OrderDate:"20-10-2021", DeliveryDate:"24-02-2021", CustomerName:"Deepak Kanthi", PhoneNumber: 9754118024, Address:"Shubh labh twins, scheme number 94, opposite bombay Hospital, Vijay Nagar, Indore", WaterRequiredInLitters:"2000", Rate: "3000"},
    { SN: "2", OrderDate:"21-10-2021", DeliveryDate:"25-02-2021",CustomerName:"Kesav Singh", PhoneNumber: 9754118024, Address:"Vijay Nagar, Indore", Status:"Pending", WaterRequiredInLitters:"4000", Rate: "5000"},
    { SN: "3", OrderDate:"22-10-2021", DeliveryDate:"26-02-2021",CustomerName:"Mukesh Mishra", PhoneNumber: 9754118024, Address:"Nanda Nagar, Indore",Status:"Delivered", WaterRequiredInLitters:"6000", Rate: "3000"}
  ];



  ngOnInit(): void {
   

  }

}
