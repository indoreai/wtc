import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
@NgModule({
  declarations: [

  ModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,MatFormFieldModule, MatDatepickerModule,MatInputModule 
  ],
  entryComponents: [
    ModalComponent
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule, 
    MatDatepickerModule,
    MatInputModule 
  ]
})
export class SharedModule { }
