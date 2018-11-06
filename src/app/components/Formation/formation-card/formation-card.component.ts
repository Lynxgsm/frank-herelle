import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formation-card',
  templateUrl: './formation-card.component.html',
  styleUrls: ['./formation-card.component.css']
})
export class FormationCardComponent implements OnInit {
  @Input()
  title;
  @Input()
  description;
  @Input()
  url;
  @Input()
  image;

  constructor() {}

  ngOnInit() {}
}
