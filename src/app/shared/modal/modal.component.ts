import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  name:FormControl;
  isSendOtp = false;
  settings = {length: 4,numbersOnly: true,timer:20}
  loginForm: FormGroup = new FormGroup({});
  isOtpVerify = false;
  constructor(private fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.loginForm = fb.group({
      name: [],
      mobileNumber: ['', [Validators.required,
         Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
  }

  ngOnInit(): void {
    console.error(this.data)
  }

  onSubmit() {
    this.isSendOtp = true;
  }

  onInputChange(e){
     if(e && e.length == 4){
      this.isOtpVerify = true;
     }
  }

  get f(){
    return this.loginForm.controls;
  }
   
}
