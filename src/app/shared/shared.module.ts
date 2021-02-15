import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularOtpLibModule } from 'angular-otp-box';
import { MatMenuModule} from '@angular/material/menu';
import { from } from 'rxjs';
@NgModule({
  declarations: [

  ModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,MatMenuModule,
    MatButtonModule,MatFormFieldModule, MatDatepickerModule,MatInputModule,ReactiveFormsModule,AngularOtpLibModule 
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
