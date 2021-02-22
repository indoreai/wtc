import { Component, OnInit } from '@angular/core';
import {MatDialog,} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog():void  {
    const dialogRef = this.dialog.open(ModalComponent,{
      width: '450px',
      data: {
        openForModal: 'employee_list',
        title: 'Add Employee'
      }
    });
  }

  columnDefs = [{ field: "SN", width: 60 }, { field: "Name" }, { field: "PhoneNumber" }, { field: "Email" }, { field: "Role" }];

  rowData = [
    { SN: "1", Name:"Deepak Kanthi", PhoneNumber: 9754118024, Email:"deepak@indoreail.com", Role:"Admin"},
    { SN: "2", Name:"Kesav Singh", PhoneNumber: 9754118024, Email:"mukesh@indoreai.com", Status:"Pending", Role:"HR"},
    { SN: "3", Name:"Mukesh Mishra", PhoneNumber: 9754118024, Email:"kesav@indoreai.com",Status:"Delivered", Role:"Driver"}
  ];

  ngOnInit(): void {
  }

}
