import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  back_formation: string;
  back_coaching: string;
  back_event: string;
  constructor() {}

  ngOnInit() {
    this.back_coaching = '../../../assets/media/coaching.jpeg';
    this.back_event = '../../../assets/media/event.jpeg';
    this.back_formation = '../../../assets/media/formation.jpg';
  }
}
