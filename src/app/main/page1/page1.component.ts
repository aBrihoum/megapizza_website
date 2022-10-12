import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from "swiper";
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  constructor() { }


  slide: SwiperOptions = {
    pagination: { clickable: true },
    loop: true,
    grabCursor: true,
    // centeredSlides: true,
    // autoHeight: true
  }


  ngOnInit(): void {
  }

}
