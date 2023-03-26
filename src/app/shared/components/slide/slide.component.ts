import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideComponent {
  @Input() isSlideActive!: string;
  @Input() slideID!: string;
}
