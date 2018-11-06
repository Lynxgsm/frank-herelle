import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-event',
  templateUrl: './main-event.component.html',
  styleUrls: ['./main-event.component.css']
})
export class MainEventComponent implements OnInit {
  photo: string;
  constructor() { }

  ngOnInit() {
    this.photo = '../../../assets/media/home.jpeg';
  }
}
