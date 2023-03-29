import { Injectable } from '@angular/core';
import { SlideTypesT } from '../interfaces/slides.model';
import { SharedService } from './city.service';
//
import lightGallery from 'lightgallery';
// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgRotate from 'lightgallery/plugins/rotate';

@Injectable({
  providedIn: 'root',
})
export class LightgalleryService {
  constructor(private Shared: SharedService) {}

  lgSlides: any[] = [];

  openGallery(imageNumber: number, type: SlideTypesT) {
    let tmp: any[] = [];
    if (type === 'food') tmp = this.Shared.returnPickedMealCategory().slides;
    else if (type === 'menus') tmp = this.Shared.returnPickedMealCategory().menu;
    else if (type === 'buildings') tmp = this.Shared.returnPickedTown().getValue().slides;
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
