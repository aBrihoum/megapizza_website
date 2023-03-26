import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('loadingSvg') loadingSvg!: ElementRef<HTMLImageElement>;
  constructor(private Shared: SharedService) {}

  pickedCityTowns = this.Shared.pickedCityTowns;
  pickedTown = this.Shared.pickedTown;

  changeTown(index: number) {
    this.Shared.changeTown(index);
    this.refresh();
  }

  showModal() {
    this.Shared.showModal();
  }

  refresh() {
    this.pickedTown = this.Shared.pickedTown;
    this.video.nativeElement.classList.add('lazyload');
    this.loadingSvg.nativeElement.style.display = 'block';
  }
}
