import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) { 
    this.loginForm = fb.group({
      mobileNumber: ['', [Validators.required,
         Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
  }

  ngOnInit(): void {
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
