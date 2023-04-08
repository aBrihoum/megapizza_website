import { Component } from '@angular/core';
import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
declare var WOW: any;
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
    let scripts = [
      'wow.js',
      'popper.js',
      'snackbar.js',
      'lightgallery.umd.js',
      'lg-zoom.umd.js',
      'lg-thumbnail.umd.js',
      'lg-rotate.umd.js',
    ];
    window.onload = async () => {
      //* ----------- load scripts -----------
      scripts.forEach((el) => appendScript(el, el === 'wow.js' ? true : false));
      //* ----------- laod styles -----------
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
    //* ----------- lazysizes -----------
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
