import { LightgalleryService } from '../../shared/services/lightgallery.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
import { SharedService } from 'src/app/shared/services/city.service';
import { SlideTypesT } from 'src/app/shared/interfaces/slides.model';
import { TownI } from 'src/app/shared/interfaces/city.model';
declare var Snackbar: any; // lazyloaded (check app.component)
declare var Popper: any; // lazyloaded
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page4Component {
  constructor(
    private SharedService: SharedService,
    private LgService: LightgalleryService,
    private ref: ChangeDetectorRef
  ) {}
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
  pickedTown: TownI = {} as TownI;
  showModal = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  changeTown(index: number) {
    this.SharedService.changeTown(index);
    this.refresh();
  }

  refresh() {
    this.map.nativeElement.classList.remove('lazyloaded');
    this.map.nativeElement.classList.add('lazyload');
  }

  openGallery(imgNumber: number, type: SlideTypesT) {
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
    el.setSelectionRange(0, 99999);
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
  ngOnInit() {
    // idk, i just hate the asyc pipe
    this.SharedService.pickedTown$.subscribe((res) => {
      this.pickedTown = res;
      this.ref.markForCheck();
    });
  }
}
