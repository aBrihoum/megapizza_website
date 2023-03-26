import { Injectable } from '@angular/core';
import { GalleryTypeT } from '../interfaces/lightgallery.model';
import { SharedService } from './shared.service';

declare let lightGallery: any;
declare let lgThumbnail: any;
declare let lgZoom: any;
declare let lgRotate: any;

@Injectable({
  providedIn: 'root',
})
export class LightgalleryService {
  constructor(private Shared: SharedService) {}

  lgSlides: any[] = [];

  openGallery(imageNumber: number, type: GalleryTypeT) {
    let tmp: any[] = [];
    if (type === 'food') tmp = this.Shared.pickedMealCategory.slides;
    else if (type === 'menus') tmp = this.Shared.pickedMealCategory.menu;
    else if (type === 'buildings') tmp = this.Shared.pickedTown.slides;
    this.lgSlides = [];
    tmp.forEach((el) => {
      this.lgSlides.push({
        src: el.path,
        thumb: el.path,
      });
    });
    const el = document.getElementById('lg-slides');
    if (el) {
      const dynamicGallery = lightGallery(el, {
        dynamic: true,
        dynamicEl: this.lgSlides,
        plugins: [lgThumbnail, lgZoom, lgRotate],
        speed: 100,
        loop: false,
        mousewheel: true,
        thumbnail: true,
        mobileSettings: {
          controls: false,
        },
      });
      dynamicGallery.openGallery(imageNumber);
    }
  }
}
