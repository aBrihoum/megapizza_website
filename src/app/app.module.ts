import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { Page5Component } from './components/page5/page5.component';
import { Page4Component } from './components/page4/page4.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    NavbarComponent,
  ],
  imports: [BrowserModule, SwiperModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
