import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page2Component {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('loadingSvg') loadingSvg!: ElementRef<HTMLImageElement>;
  constructor(private SharedService: SharedService) {}

  pickedCityTowns = this.SharedService.pickedCityTowns;
  pickedTown = this.SharedService.pickedTown;
  showModal = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }
  changeTown(index: number) {
    this.SharedService.changeTown(index);
    this.refresh();
  }

  refresh() {
    this.pickedTown = this.SharedService.pickedTown;
    this.video.nativeElement.classList.add('lazyload');
    this.loadingSvg.nativeElement.style.display = 'block';
  }
}
