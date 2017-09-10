import { ViewChild, Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(router: Router) {
    router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.sidenav.close();
      }
    });
  }
}
