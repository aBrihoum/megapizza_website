import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
declare var WOW: any;
@Component({
  selector: 'app-root',
  template: `
    <section>
      <app-page1></app-page1>
      <ng-container #injectHere></ng-container>
    </section>
  `,
})
export class AppComponent {
  @ViewChild('injectHere', { read: ViewContainerRef }) injectHere!: ViewContainerRef;

  async load() {
    const { Page2Component } = await import('./components/page2/page2.component');
    this.injectHere.createComponent(Page2Component);
    const { Page3Component } = await import('./components/page3/page3.component');
    this.injectHere.createComponent(Page3Component);
    const { Page4Component } = await import('./components/page4/page4.component');
    this.injectHere.createComponent(Page4Component);
    const { Page5Component } = await import('./components/page5/page5.component');
    this.injectHere.createComponent(Page5Component);
  }

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
      //* ----------- load components -----------
      await this.load();
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
