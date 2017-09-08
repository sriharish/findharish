import { ViewChild, Component, OnInit, HostListener, HostBinding } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(router: Router) {
    router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.sidenav.close();
      }
    });
  }

  ngOnInit() {
  }

}
