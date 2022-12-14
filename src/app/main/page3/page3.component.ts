import { LightgalleryService } from './../../services/lightgallery.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from "swiper";
import { SharedService } from 'src/app/services/shared.service';
SwiperCore.use([Pagination]);
//
@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {
  constructor(public Lg: LightgalleryService, public Shared: SharedService) { }

  @ViewChild('headerText') headerText!: ElementRef<HTMLHeadingElement>
  @ViewChild('shapeUpper') shapeUpper!: ElementRef<HTMLElement>
  @ViewChild('shapeLower') shapeLower!: ElementRef<HTMLElement>
  @ViewChild('slidesSection') slidesSection!: ElementRef<HTMLElement>
  @ViewChild('menu') menu!: ElementRef<HTMLImageElement>

  pickedMenuIndex = 0


  colors = [
    { bg: '#cc9c68', text: '#372e1c' },
    { bg: '#6893cc', text: '#17263a' },
    { bg: '#95639d', text: '#2d173a' },
    { bg: '#639d7e', text: '#173a38' }
  ]

  slide: SwiperOptions = {
    pagination: { clickable: true },
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      1: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    }
  }

  slide2: SwiperOptions = {
    pagination: { clickable: true },
    grabCursor: true,
  }

  link = {
    open: (url: string) => {
      window.open(url, '_blank');
    },
    download: (url: string, alt: string) => {
      var link = document.createElement('a')
      link.href = url
      link.download = alt
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  onSlideChange(params: any) {
    let index = params[0].activeIndex
    this.headerText.nativeElement.style.color = this.colors[index].text
    this.headerText.nativeElement.style.backgroundColor = this.colors[index].bg
    this.shapeUpper.nativeElement.style.fill = this.colors[index].bg
    this.shapeLower.nativeElement.style.fill = this.colors[index].bg
    this.slidesSection.nativeElement.scrollIntoView({ behavior: "smooth" })
  }

  refresh() {
    this.menu.nativeElement.classList.remove('lazyloaded')
    this.menu.nativeElement.classList.add('lazyload')
  }

  ngOnInit(): void { }
}
