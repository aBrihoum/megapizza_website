import { SafePipe } from './pipes/safe.pipe';
import { SlideComponent } from './components/slide/slide.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ModalComponent, SlideComponent, SafePipe],
  imports: [CommonModule],
  exports: [ModalComponent, SlideComponent, SafePipe],
})
export class SharedModule {}
