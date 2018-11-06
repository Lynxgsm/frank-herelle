import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-item',
  templateUrl: './testimonial-item.component.html',
  styleUrls: ['./testimonial-item.component.css']
})
export class TestimonialItemComponent implements OnInit {
  @Input()
  background: string;
  @Input()
  testimonial: string;
  @Input()
  username: string;
  constructor() {}

  ngOnInit() {}
}
