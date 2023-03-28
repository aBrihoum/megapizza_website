import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { SharedService } from 'src/app/shared/services/city.service';
import { TownI } from 'src/app/shared/interfaces/city.model';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page2Component implements OnInit {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('loadingSvg') loadingSvg!: ElementRef<HTMLImageElement>;
  constructor(private SharedService: SharedService, private ref: ChangeDetectorRef) {}

  pickedCityTowns = this.SharedService.returnPickedCityTowns();
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
    this.video.nativeElement.classList.add('lazyload');
    this.loadingSvg.nativeElement.style.display = 'block';
  }

  ngOnInit() {
    // idk, i just hate the asyc pipe
    this.SharedService.returnPickedTown().subscribe((res) => {
      this.pickedTown = res;
      this.ref.markForCheck();
    });
  }
}
