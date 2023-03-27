import { LightgalleryService } from '../../shared/services/lightgallery.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
import { SharedService } from 'src/app/shared/services/shared.service';
import { GalleryTypeT } from 'src/app/shared/interfaces/lightgallery.model';
declare var Snackbar: any; // lazyloaded, cuz i really care about the bundle size man !
declare var Popper: any; // lazyloaded, cuz i really care about the bundle size man !
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss'],
})
export class Page4Component {
  constructor(private SharedService: SharedService, private LgService: LightgalleryService) {}
  @ViewChild('map') map!: ElementRef<HTMLDivElement>;

  slide: SwiperOptions = {
    pagination: { clickable: true },
    spaceBetween: 20,
    loop: true,
    lazy: true,
    breakpoints: {
      1: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 1 },
    },
  };

  pickedCity = this.SharedService.pickedCity;
  pickedCityTowns = this.SharedService.pickedCityTowns;
  pickedTown = this.SharedService.pickedTown;

  changeTown(index: number) {
    this.SharedService.changeTown(index);
    this.pickedTown = this.SharedService.pickedTown;
    this.refresh();
  }
  showModal() {
    this.SharedService.showModal();
  }
  refresh() {
    this.map.nativeElement.classList.remove('lazyloaded');
    this.map.nativeElement.classList.add('lazyload');
  }

  openGallery(imgNumber: number, type: GalleryTypeT) {
    this.LgService.openGallery(imgNumber, type);
  }

  copyText(value: string) {
    const el = document.createElement('textarea');
    el.value = value;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-100vw';
    document.body.appendChild(el);
    el.select();
    el.setSelectionRange(0, 99999); // for mobile devices
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  showToast(text: string) {
    Snackbar.show({
      pos: 'bottom-left',
      text: `${text}`,
      duration: 4200,
      backgroundColor: 'white',
      textColor: 'black',
    });
    this.hidetooltTip();
  }

  createTooltip(button: HTMLButtonElement, tooltipEl: HTMLDivElement) {
    tooltipEl.style.display = 'inline-block';
    Popper.createPopper(button, tooltipEl);
    let fct = (event: Event) => {
      if (!(tooltipEl as any).contains(event.target)) {
        document.removeEventListener('mousedown', fct);
        this.hidetooltTip(tooltipEl);
      }
    };
    document.addEventListener('mousedown', fct);
  }

  hidetooltTip(tooltipEl?: HTMLDivElement) {
    if (tooltipEl) tooltipEl.style.display = 'none';
    else
      (document.querySelectorAll('.tooltip') as NodeListOf<HTMLDivElement>).forEach(
        (el) => (el.style.display = 'none')
      );
    console.log('here');
  }
}
