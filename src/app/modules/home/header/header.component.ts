import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog,} from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  constructor(public dialog: MatDialog) { }
  
  ngOnInit(): void {
  }
  openDialog():void  {
    const dialogRef = this.dialog.open(ModalComponent,{
      width: '450px',

    });
    
  }

}
