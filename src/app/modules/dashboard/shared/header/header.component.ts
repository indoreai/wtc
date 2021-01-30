import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() navChange:any = new EventEmitter();
  constructor() { }
 isOpen = false;
  ngOnInit(): void {
  }

  navigationClick(){
   this.isOpen = !this.isOpen;
   this.navChange.emit(this.isOpen);
  }
}
