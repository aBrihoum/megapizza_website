import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  constructor() {}

  navbar($el: HTMLButtonElement, $nav: HTMLElement) {
    let isCollapsed = $el.classList.contains('collapsed');
    if (isCollapsed) {
      $nav.classList.remove('navbar-bg');
    } else {
      $nav.classList.add('navbar-bg');
    }
  }

  ngOnInit(): void {}
}
