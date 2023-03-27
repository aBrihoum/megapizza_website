import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
import SwiperCore, { Pagination, SwiperOptions, FreeMode } from 'swiper';
SwiperCore.use([Pagination, FreeMode]);
import reviews from '../../../assets/json/reviews.json';
@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss'],
})
export class Page5Component {
  constructor(private SharedService: SharedService) {}

  reviews = reviews;

  slide: SwiperOptions = {
    slidesPerView: 'auto',
    direction: 'vertical',
    slideToClickedSlide: true,
    autoHeight: true,
    pagination: { clickable: true },
    loop: false,
    freeMode: true,
    // grabCursor: true, // broken
    // autoplay: { delay: 2500, disableOnInteraction: false },
  };
  jumpToSection(selector: string) {
    this.SharedService.jumpToSection(selector);
  }
}
