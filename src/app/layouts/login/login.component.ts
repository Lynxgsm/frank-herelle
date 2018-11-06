import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { url } from 'src/app/config';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loaded: Boolean = true;
    email: string;
    password: string;
    message: string;
    type: string;
    constructor(public cookies: CookieService, public router: Router) { }

    ngOnInit() {
    }

    login() {
        this.loaded = false;
        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(this.email, this.password).then(response => {
            this.cookies.set('user', JSON.stringify(response.user));
            this.router.navigate(['user']);
            this.loaded = true;
        }).catch(err => {
            this.message = err.message;
            this.type = 'danger';
            this.loaded = true;
            console.log(err);
        });
    }

}
