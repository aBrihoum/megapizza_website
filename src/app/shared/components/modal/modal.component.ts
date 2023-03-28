import { ChangeDetectionStrategy, Component, ViewChild, ElementRef, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  @ViewChild('modal') modal!: ElementRef<HTMLDivElement>;
  @Input() videoUrl = '';
  @Output() closeModalEvent = new EventEmitter<void>();

  ngAfterViewInit() {
    let modalEl = this.modal.nativeElement;
    let fct = (event: Event) => {
      if (!(modalEl as any).contains(event.target)) {
        document.removeEventListener('mousedown', fct);
        this.closeModalEvent.emit();
      }
    };
    document.addEventListener('mousedown', fct);
  }
}
