import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  page: string;
  constructor() { }

  ngOnInit() {
    this.page = 'dashboard';
  }

  changePage(p: string) {
    this.page = p;
  }
}
