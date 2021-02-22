import { Component, OnInit } from '@angular/core';
import {MatDialog,} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  isDisabled:boolean = true;
  enable(){
    this.isDisabled = false
  }
  disable(){
    this.isDisabled = true
  }

  constructor(public dialog: MatDialog) { }
  openDialog():void  {
    const dialogRef = this.dialog.open(ModalComponent,{
      width: '450px',
      data: {
        openForModal: 'add_customer',
        title: 'Add Customer'
      }
    });
  }
  
  columnDefs = [{ field: "SN", width: 60},{ field: "Name" }, { field: "Email" },{ field: "PhoneNumber", width: 130}, { field: "Address", width:'auto' }];

  rowData = [
    { SN: "1", Name:"Deepak Kanthi", Email:"deepak@indoreai.com", PhoneNumber: 9754118024, Address:"Shubh labh twins, scheme number 94, opposite bombay Hospital, Vijay Nagar, Indore"},
    { SN: "2", Name:"Kesav Singh", Email:"",PhoneNumber: 9754118024, Address:"Vijay Nagar, Indore", Status:"Pending"},
    { SN: "3", Name:"Mukesh Mishra", Email:"kesav@indoreai.com", PhoneNumber: 9754118024, Address:"Nanda Nagar, Indore",Status:"Delivered"}
  ];

  ngOnInit(): void {
  }

}
