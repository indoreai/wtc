import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [

  ModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    ModalComponent
  ],
})
export class SharedModule { }
