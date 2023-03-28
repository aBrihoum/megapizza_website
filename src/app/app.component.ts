import { Component } from '@angular/core';
import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
declare var WOW: any;
@Component({
  selector: 'app-root',
  template: `
    <section>
      <app-page1></app-page1>
    </section>
  `,
})
export class AppComponent {
  ngAfterContentInit() {
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
    window.onload = () => {
      //* ----------- scripts -----------
      //? wow.js -------------------------------------
      appendScript('wow.js', true);
      //? popper -------------------------------------
      appendScript('popper.js');
      //? snackbar -------------------------------------
      appendScript('snackbar.js');
      //? lightgallery -------------------------------------
      appendScript('lightgallery.umd.js');
      // lightgallery - zoom
      appendScript('lg-zoom.umd.js');
      // lightgallery - thumbnail
      appendScript('lg-thumbnail.umd.js');
      // lightgallery - rotate
      appendScript('lg-rotate.umd.js');
      //* ----------- styles -----------
      //? late styles -------------------------------------
      appendStyle('late_styles.css');

      //* ----------- functions -----------
      function appendScript(name: string, init?: boolean) {
        let script = document.createElement('script');
        script.src = name;
        script.async = true;
        document.head.appendChild(script);
        if (init)
          script.addEventListener('load', () => {
            var wow = new WOW({
              callback: function (el: HTMLElement) {
                if (el.dataset['removeAnimation'] != undefined)
                  setTimeout(() => (el.style.animationName = 'none'), 2000);
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
    };
  }
}
