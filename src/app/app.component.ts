import { Component } from '@angular/core';
import 'lazysizes';
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks';
import { SharedService } from './shared/services/shared.service';
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
    <div class="modal-container" id="modalContainer47510s5zM">
      <div id="modal47510s5zM" class="modal">
        <iframe
          *ngIf="Shared.isShowModal"
          class="iframe"
          title="YouTube video player"
          frameborder="0"
          [src]="Shared.pickedTown.youtube | safe"
          allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
  `,
  styles: [
    `
      .iframe {
        width: 100%;
        height: 100%;
        background-image: url('/assets/images/svg/loading.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 150px;
        border: 3px solid #695950;
        border-radius: 20px;
        padding: 8px;
      }

      // ? modal
      .modal-container {
        position: fixed;
        display: none;
        z-index: 101;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(32, 33, 36, 0.85);
        overflow: hidden;

        .modal {
          position: absolute;
          transform: translate(-50%, -50%);
          left: 50%;
          top: 50%;
          transition: all 0.4s;
          max-width: 900px;
          width: 100%;
          max-height: 60vh;
          height: 100%;

          @media (max-width: 660px) {
            padding: 0 17px;
          }
        }
      }
    `,
  ],
})
export class AppComponent {
  constructor(public Shared: SharedService) {}
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
