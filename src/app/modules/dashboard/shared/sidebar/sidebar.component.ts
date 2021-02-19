import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
   isToggle = false;
  constructor() { }
  
  ngOnInit() { }

  isShow(){
    if(this.isToggle){
     document.getElementById('submenu').style.display = "none";
   
      this.isToggle = false;
    } else{
   document.getElementById('submenu').style.display = "block";
      this.isToggle = true;
    } 
  
  }
}
