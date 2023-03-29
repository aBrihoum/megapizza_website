import { Component, ChangeDetectionStrategy, ViewChild, ViewContainerRef } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page1Component {
  constructor() {}

  @ViewChild('injectHere', { read: ViewContainerRef }) injectHere!: ViewContainerRef;

  slide: SwiperOptions = {
    pagination: { clickable: true },
    loop: true,
    grabCursor: true,
  };
}
