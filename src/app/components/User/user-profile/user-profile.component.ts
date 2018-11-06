import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { url } from '../../../config';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  nom: string;
  prenom: string;
  email: string;
  age: string;
  sexe: string;

  constructor(public cookies: CookieService) { }

  ngOnInit() {
    this.getUserInfo(JSON.parse(this.cookies.get('user')).uid);
  }

  getUserInfo(id: string) {
    axios.get(url + `user/get?id=${id}`).then(response => {
      this.nom = response.data.nom;
      this.prenom = response.data.prenom;
      this.email = response.data.email;
      this.age = response.data.age;
      this.sexe = response.data.sexe;
    }).catch(err => {
      console.log(err);
    });
  }

  // updateUserInfo() {
  //   axios({
  //     method:'put',
  //     url:url+'client/'
  //   })
  // }

}
