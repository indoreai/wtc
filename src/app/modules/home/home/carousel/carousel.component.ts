import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(){
    $('#slider').rotateSlider({});
  }

}
