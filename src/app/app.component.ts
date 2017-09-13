import { ViewChild, Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { PageScrollConfig } from 'ng2-page-scroll';

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

    PageScrollConfig.defaultDuration = 200;
    PageScrollConfig.defaultScrollOffset = 64;
  }
}
