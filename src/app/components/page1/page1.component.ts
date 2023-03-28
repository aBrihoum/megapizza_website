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

  async load() {
    const { Page2Component } = await import('../page2/page2.component');
    this.injectHere.createComponent(Page2Component);
    const { Page3Component } = await import('../page3/page3.component');
    this.injectHere.createComponent(Page3Component);
    const { Page4Component } = await import('../page4/page4.component');
    this.injectHere.createComponent(Page4Component);
    const { Page5Component } = await import('../page5/page5.component');
    this.injectHere.createComponent(Page5Component);
  }
  ngAfterViewInit() {
    this.load();
  }
}
