import { Component } from '@angular/core';
declare var WOW: any;
import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
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
    window.onload = () => {
      appendScript('popper.js');
      appendScript('bootstrap.js');
      appendScript('wow.js', true);
      appendScript('snackbar.js');
      appendScript('lightgallery.umd.js');
      appendScript('lg-zoom.umd.js');
      appendScript('lg-thumbnail.umd.js');
      appendScript('lg-rotate.umd.js');
      //
      appendStyle('late_styles.css');
    };
    function appendScript(name: string, init?: boolean) {
      let script = document.createElement('script');
      script.src = name;
      script.async = true;
      document.head.appendChild(script);
      if (init)
        script.addEventListener('load', () => {
          var wow = new WOW({
            callback: function (el: HTMLElement) {
              if (el.dataset['removeAnimation'] != undefined) setTimeout(() => (el.style.animationName = 'none'), 2000);
            },
          });
          wow.init();
        });
    }
    function appendStyle(name: string) {
      let style = document.createElement('link');
      style.rel = 'stylesheet';
      style.type = 'text/css';
      style.href = name;
      document.head.appendChild(style);
    }
  }
}
