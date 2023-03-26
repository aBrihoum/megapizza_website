import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component implements OnInit {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('loadingSvg') loadingSvg!: ElementRef<HTMLImageElement>;
  constructor(public Shared: SharedService) {}

  refresh() {
    this.video.nativeElement.classList.add('lazyload');
    this.loadingSvg.nativeElement.style.display = 'block';
  }

  ngOnInit(): void {}
}
