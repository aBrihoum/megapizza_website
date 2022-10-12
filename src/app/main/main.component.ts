import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SharedService } from '../services/shared.service';
declare var WOW: any // lazyloaded, cuz i really care about the bundle size man !
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  constructor(public Shared: SharedService) { }
  ngAfterContentInit() {
    // * lazysies _ lazyload
    document.addEventListener('lazybeforeunveil', function (e: any) {
      let bg = e.target?.getAttribute('data-bg');
      let video = e.target?.hasAttribute('autoplay')
      if (bg) { e.target.style.backgroundImage = 'url(' + bg + ')' }
      if (video) { e.target.muted = true; e.target.load() }
    })
    window.onload = () => {
      //* ----------- scripts -----------
      //? wow.js -------------------------------------
      appendScript('wow.js', true)
      //? popper -------------------------------------
      appendScript('popper.js')
      //? snackbar -------------------------------------
      appendScript('snackbar.js')
      //? lightgallery -------------------------------------
      appendScript('lightgallery.umd.js')
      // lightgallery - zoom
      appendScript('lg-zoom.umd.js')
      // lightgallery - thumbnail
      appendScript('lg-thumbnail.umd.js')
      // lightgallery - rotate
      appendScript('lg-rotate.umd.js')
      //* ----------- styles -----------
      //? late styles -------------------------------------
      appendStyle('late_styles.css')

      //* ----------- functions -----------
      function appendScript(name: string, init?: boolean) {
        let script = document.createElement('script')
        script.src = name
        script.async = true
        document.head.appendChild(script)
        if (init) script.addEventListener('load', () => {
          var wow = new WOW(
            {
              callback: function (el: HTMLElement) {
                if (el.dataset['removeAnimation'] != undefined)
                  setTimeout(() => el.style.animationName = 'none', 2000)
              }
            }
          )
          wow.init()
        })
      }
      function appendStyle(name: string) {
        let style = document.createElement('link')
        style.rel = 'stylesheet'
        style.type = 'text/css'
        style.href = name
        document.head.appendChild(style)
      }
    }

  }

  ngOnInit(): void { }
}
