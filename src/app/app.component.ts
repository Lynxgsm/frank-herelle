import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event, NavigationEnd, NavigationError } from '@angular/router';
import * as firebase from 'firebase';
import { firebaseConfig } from '../environments/firebase.config';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'globformation';
  isConnected: Boolean;
  loaded: Boolean = true;

  constructor(private route: Router, public cookies: CookieService) { }

  ngOnInit() {
    firebase.initializeApp(firebaseConfig);
    this.route.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.loaded = false;

        if (this.cookies.check('user')) {
          this.isConnected = true;
        } else {
          this.isConnected = false;
        }
      }
      if (event instanceof NavigationEnd) {
        this.loaded = true;
      }
      if (event instanceof NavigationError) {
        console.log(event.error);
      }
    });
  }
}
