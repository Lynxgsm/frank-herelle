import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import axios from 'axios';
import { url } from '../../config';
import qs from 'qs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loaded: Boolean = true;
  signupBtn: Boolean = false;
  email: string;
  message: string;
  password: string;
  type: string;
  confirm_password: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkForm() {
    return this.fieldCheck(this.email)
      || this.fieldCheck(this.password)
      || this.fieldCheck(this.confirm_password)
      || this.confirm_password !== this.password
      || this.password.length < 8;
  }

  fieldCheck(field: any) {
    return field === '' || field === undefined;
  }

  signup() {
    const params = {
      email: this.email,
      password: this.password
    };

    this.loaded = false;
    axios({
      method: 'post',
      url: url + 'clients',
      data: qs.stringify(params)
    }).then(response => {
      console.log(response);
      this.loaded = true;
      // setTimeout(() => {
      //   this.router.navigate(['login']);
      // }, 2000);
    }).catch(err => {
      this.loaded = true;
      console.log(err);
    });
  }
}
