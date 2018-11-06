import { Component, OnInit, Input } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    isCollapsed: Boolean = true;
    isConnected: Boolean = false;

    constructor(public cookies: CookieService, public router: Router) { }

    ngOnInit() {
        if (this.cookies.check('user')) {
            this.isConnected = true;
        }

        console.log('Ty iz ty', this.isConnected);
    }

    signout() {
        alert('Vous allez être déconnecter');
        this.cookies.deleteAll();
        window.location.reload();
    }
}
