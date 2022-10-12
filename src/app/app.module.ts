import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Page1Component } from './main/page1/page1.component';
import { SwiperModule } from 'swiper/angular';
import { Page2Component } from './main/page2/page2.component';
import { Page3Component } from './main/page3/page3.component';
import { Page4Component } from './main/page4/page4.component';
import { Page5Component } from './main/page5/page5.component';
import { SafePipe } from './pipes/safe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
