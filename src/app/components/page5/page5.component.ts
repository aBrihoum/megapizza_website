import { ChangeDetectionStrategy, Component } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions, FreeMode } from 'swiper';
SwiperCore.use([Pagination, FreeMode]);
import reviews from '../../../assets/json/reviews.json';
@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page5Component {
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
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  }
}
