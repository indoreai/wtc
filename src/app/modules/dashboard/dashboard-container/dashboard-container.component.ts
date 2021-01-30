import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  constructor() { }
  navClass = 'admin-container'
  ngOnInit(): void {
  }

  navChange($event){
    
      if($event){
        this.navClass = 'admin-container sidebar-collapse';
      } else{
        this.navClass = 'admin-container';
      }
    
  }

}
