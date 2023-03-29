import { Component } from '@angular/core';
import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
//@ts-ignore
import * as WOW from 'wow.js/dist/wow.js';
@Component({
  selector: 'app-root',
  template: `
    <section>
      <app-page1></app-page1>
      <app-page2></app-page2>
      <app-page3></app-page3>
      <app-page4></app-page4>
      <app-page5></app-page5>
    </section>
  `,
})
export class AppComponent {
  ngAfterContentInit() {
    // * WOWjs
    var wow = new WOW({
      callback: function (el: HTMLElement) {
        if (el.dataset['removeAnimation'] != undefined) setTimeout(() => (el.style.animationName = 'none'), 2000);
      },
    });
    wow.init();
    // * lazysies _ lazyload
    document.addEventListener('lazybeforeunveil', function (e: any) {
      let bg = e.target?.getAttribute('data-bg');
      let video = e.target?.hasAttribute('autoplay');
      if (bg) {
        e.target.style.backgroundImage = 'url(' + bg + ')';
      }
      if (video) {
        e.target.muted = true;
        e.target.load();
      }
    });
  }
}
